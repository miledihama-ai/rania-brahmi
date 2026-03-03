'use client';

import Link from 'next/link';

/**
 * Next.js App Router — Not Found Page (404)
 * Shown when a route doesn't exist.
 */
export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] p-6">
            <div className="text-center max-w-md">
                <div className="text-7xl font-bold text-[var(--color-primary)] mb-4 opacity-40">
                    404
                </div>
                <h1 className="text-2xl font-bold text-[var(--color-text)] mb-3">
                    الصفحة غير موجودة
                </h1>
                <p className="text-[var(--color-text-muted)] text-sm mb-8 leading-relaxed">
                    يبدو أن الرابط الذي تبحثين عنه غير موجود أو تم نقله.
                </p>
                <Link href="/" className="btn-cta text-sm">
                    العودة للصفحة الرئيسية
                </Link>
            </div>
        </div>
    );
}
