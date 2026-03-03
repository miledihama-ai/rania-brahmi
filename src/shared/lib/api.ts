import toast from 'react-hot-toast';

/** Standard API error response structure. */
interface ApiErrorResponse {
    message?: string;
    error?: string;
    statusCode?: number;
}

/** Result type for API calls — either success data or null on failure. */
export type ApiResult<T> = T | null;

/**
 * Safe API fetch wrapper with automatic error handling and toast notifications.
 * Catches all errors (network + HTTP) and shows Arabic toast messages.
 * Returns null on failure for easy null-checking.
 */
export async function safeFetch<T>(
    url: string,
    options?: RequestInit,
    customErrorMsg?: string
): Promise<ApiResult<T>> {
    try {
        const res = await fetch(url, {
            headers: { 'Content-Type': 'application/json', ...options?.headers },
            ...options,
        });

        if (!res.ok) {
            let errorData: ApiErrorResponse = {};
            try {
                errorData = await res.json();
            } catch {
                // Response not JSON — use status text
            }

            const message =
                customErrorMsg ||
                errorData.message ||
                errorData.error ||
                getDefaultErrorMessage(res.status);

            toast.error(message);
            console.error(`[API Error] ${res.status} ${url}: `, errorData);
            return null;
        }

        const data: T = await res.json();
        return data;
    } catch (err) {
        const message = customErrorMsg || 'حدث خطأ في الاتصال. تأكدي من اتصال الإنترنت وحاولي مرة أخرى.';
        toast.error(message);
        console.error(`[Network Error] ${url}: `, err);
        return null;
    }
}

/** Maps HTTP status codes to user-friendly Arabic messages. */
function getDefaultErrorMessage(status: number): string {
    const messages: Record<number, string> = {
        400: 'البيانات المُرسلة غير صحيحة. يرجى التحقق والمحاولة مرة أخرى.',
        401: 'يرجى تسجيل الدخول أولاً.',
        403: 'ليس لديك صلاحيات للوصول إلى هذا المحتوى.',
        404: 'المحتوى المطلوب غير موجود.',
        409: 'هذا الحجز مأخوذ بالفعل. يرجى اختيار موعد آخر.',
        422: 'البيانات المُرسلة غير مكتملة.',
        429: 'طلبات كثيرة جداً. يرجى الانتظار قليلاً والمحاولة مرة أخرى.',
        500: 'حدث خطأ في الخادم. نعمل على إصلاحه — حاولي لاحقاً.',
        503: 'الخدمة غير متاحة حالياً. حاولي مرة أخرى بعد قليل.',
    };
    return messages[status] || 'حدث خطأ غير متوقع. حاولي مرة أخرى.';
}
