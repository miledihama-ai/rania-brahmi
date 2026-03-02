'use client';

import Link from 'next/link';

const timezones = [
    { value: 'Africa/Tunis', label: 'تونس (CET +1)' },
    { value: 'Africa/Algiers', label: 'الجزائر (CET +1)' },
    { value: 'Africa/Casablanca', label: 'المغرب (WET +0)' },
    { value: 'Africa/Tripoli', label: 'ليبيا (EET +2)' },
    { value: 'Africa/Cairo', label: 'مصر (EET +2)' },
    { value: 'Asia/Riyadh', label: 'السعودية (AST +3)' },
    { value: 'Asia/Dubai', label: 'الإمارات (GST +4)' },
    { value: 'Europe/Paris', label: 'فرنسا (CET +1)' },
    { value: 'America/New_York', label: 'نيويورك (EST -5)' },
];

export default function RegisterPage() {
    return (
        <>
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold text-[var(--color-text)] mb-2">ابدئي رحلتك</h1>
                <p className="text-[var(--color-text-muted)] text-sm">أنشئي حساباً للوصول إلى البرامج والجلسات</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-2">الاسم الكامل</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="اسمك الكامل"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-primary-light)] transition-all duration-200 text-sm min-h-[48px]"
                    />
                </div>

                <div>
                    <label htmlFor="reg-email" className="block text-sm font-medium text-[var(--color-text)] mb-2">البريد الإلكتروني</label>
                    <input
                        id="reg-email"
                        type="email"
                        placeholder="your@email.com"
                        dir="ltr"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-primary-light)] transition-all duration-200 text-sm min-h-[48px]"
                    />
                </div>

                <div>
                    <label htmlFor="timezone" className="block text-sm font-medium text-[var(--color-text)] mb-2">المنطقة الزمنية</label>
                    <select
                        id="timezone"
                        defaultValue="Africa/Tunis"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-primary-light)] transition-all duration-200 text-sm appearance-none min-h-[48px]"
                    >
                        {timezones.map((tz) => (
                            <option key={tz.value} value={tz.value}>{tz.label}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="reg-password" className="block text-sm font-medium text-[var(--color-text)] mb-2">كلمة المرور</label>
                    <input
                        id="reg-password"
                        type="password"
                        placeholder="8 أحرف على الأقل"
                        dir="ltr"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-primary-light)] transition-all duration-200 text-sm min-h-[48px]"
                    />
                </div>

                {/* Privacy note */}
                <div className="bg-[var(--color-bg-warm)] border border-[var(--color-border)] rounded-xl p-4">
                    <p className="text-xs text-[var(--color-text-light)] leading-relaxed">
                        🔒 بياناتك محمية ومشفرة. لن نشارك معلوماتك مع أي طرف ثالث. قراءة{' '}
                        <Link href="/privacy" className="text-[var(--color-accent)] underline">سياسة الخصوصية</Link>.
                    </p>
                </div>

                <button id="register-submit" type="submit" className="btn-cta w-full text-center">
                    إنشاء الحساب
                </button>

                <div className="text-center pt-2">
                    <p className="text-sm text-[var(--color-text-muted)]">
                        لديك حساب بالفعل؟{' '}
                        <Link href="/login" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold transition-colors">
                            تسجيل الدخول
                        </Link>
                    </p>
                </div>
            </form>
        </>
    );
}
