'use client';

import Link from 'next/link';
import { useEffect } from 'react';

/**
 * Next.js App Router — Global Error Page
 * Catches unhandled errors at the route level.
 * Shows a user-friendly Arabic error page.
 */
export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <html lang="ar" dir="rtl">
            <body className="min-h-screen flex items-center justify-center bg-[#FDFBF7] p-6">
                <div className="text-center max-w-md">
                    <div className="text-6xl mb-6">😔</div>
                    <h1 className="text-2xl font-bold text-[#333333] mb-3">
                        عذراً، حدث خطأ غير متوقع
                    </h1>
                    <p className="text-[#666666] text-sm mb-8 leading-relaxed">
                        نعتذر عن هذا الخطأ. فريقنا تم إخطاره وسيعمل على إصلاحه.
                        <br />
                        يمكنك المحاولة مرة أخرى أو العودة للصفحة الرئيسية.
                    </p>
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={reset}
                            className="w-full py-3 rounded-full bg-[#B88E4B] text-white font-semibold text-sm hover:opacity-90 transition-opacity min-h-[48px]"
                        >
                            حاولي مرة أخرى
                        </button>
                        <Link
                            href="/"
                            className="w-full py-3 rounded-full border-2 border-[#DCAE96] text-[#2D3A30] font-semibold text-sm hover:bg-[#DCAE96]/10 transition-colors inline-flex items-center justify-center min-h-[48px]"
                        >
                            العودة للصفحة الرئيسية
                        </Link>
                    </div>
                </div>
            </body>
        </html>
    );
}
