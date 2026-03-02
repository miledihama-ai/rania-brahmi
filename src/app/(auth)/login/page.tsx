'use client';

import Link from 'next/link';

export default function LoginPage() {
    return (
        <>
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold text-[var(--color-text)] mb-2">مرحباً بعودتك</h1>
                <p className="text-[var(--color-text-muted)] text-sm">سجّلي دخولك للوصول إلى لوحة التحكم</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-2">
                        البريد الإلكتروني
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        dir="ltr"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-primary-light)] transition-all duration-200 text-sm min-h-[48px]"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-[var(--color-text)] mb-2">
                        كلمة المرور
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        dir="ltr"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-primary-light)] transition-all duration-200 text-sm min-h-[48px]"
                    />
                </div>

                <button
                    id="login-submit"
                    type="submit"
                    className="btn-cta w-full text-center"
                >
                    تسجيل الدخول
                </button>

                <div className="text-center pt-2">
                    <p className="text-sm text-[var(--color-text-muted)]">
                        ليس لديك حساب؟{' '}
                        <Link href="/register" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold transition-colors">
                            إنشاء حساب
                        </Link>
                    </p>
                </div>
            </form>
        </>
    );
}
