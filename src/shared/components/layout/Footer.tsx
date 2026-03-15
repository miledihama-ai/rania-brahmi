import Link from 'next/link';
import { Logo } from '@/shared/components/ui/Logo';

/** A single link item in the footer. */
interface FooterLink {
    label: string;
    href: string;
}

/** Footer navigation grouped by category. */
type FooterLinks = Record<string, FooterLink[]>;

const footerLinks: FooterLinks = {
    'البرامج': [
        { label: 'Shadow Work', href: '/#programs' },
        { label: 'دورة النزيف النفسي لتنظيف الصدمات', href: '/#lms' },
        { label: 'استشارة طارئة', href: '/booking' },
        { label: 'الدورات المسجلة', href: '/#courses' },
    ],
    'المنصة': [
        { label: 'عن رانيا', href: '/#about' },
        { label: 'الشهادات', href: '/#testimonials' },
        { label: 'الأسئلة الشائعة', href: '/#faq' },
        { label: 'سياسة الخصوصية', href: '/privacy' },
    ],
    'التواصل': [
        { label: 'واتساب', href: 'https://wa.me' },
        { label: 'إنستغرام', href: '#' },
        { label: 'يوتيوب', href: '#' },
        { label: 'support@rania.com', href: 'mailto:support@rania.com' },
    ],
};

export const Footer = () => (
    <footer className="bg-[var(--color-bg)] text-white">
        <div className="fluid-container py-12 md:py-16">
            {/* Top */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-[var(--color-secondary-dark)]">
                {/* Brand */}
                <div className="sm:col-span-2 md:col-span-1">
                    <div className="mb-6">
                        <Logo variant="horizontal" />
                    </div>
                    <p className="text-[var(--color-primary-light)] text-sm leading-relaxed">
                        مساحة آمنة للتشافي والنمو الداخلي. برامج متخصصة ورحلات تطويرية ممتدة.
                    </p>
                    <div className="flex gap-3 mt-5">
                        {['📸', '▶️', '💬'].map((icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-9 h-9 rounded-full bg-[var(--color-secondary-dark)] hover:bg-[var(--color-accent)] flex items-center justify-center transition-colors text-sm"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links */}
                {Object.entries(footerLinks).map(([title, links]) => (
                    <div key={title}>
                        <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                            {title}
                        </h4>
                        <ul className="space-y-3">
                            {links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-[var(--color-primary-light)] hover:text-white text-sm transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Medical Disclaimer */}
            <div className="mt-8 bg-[var(--color-secondary-dark)]/40 border border-[var(--color-secondary-dark)] rounded-2xl p-5 text-center">
                <p className="text-[var(--color-primary-light)] text-sm leading-relaxed max-w-4xl mx-auto">
                    <strong className="text-white">⚠️ تنبيه طبي وأخلاقي هام:</strong>{' '}
                    منصة Rania Brahmi تُقدم خدمات استشارية وتطويرية وإرشادية فقط.
                    المحتوى والجلسات المقدمة{' '}
                    <u>ليست بديلاً بأي شكل عن العلاج الطبي النفسي السريري</u> أو الزيارات للمختصين والأطباء المعتمدين.
                </p>
            </div>

            {/* Bottom bar */}
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-[var(--color-text-muted)] text-xs">
                <p suppressHydrationWarning>© {new Date().getFullYear()} Rania Brahmi. جميع الحقوق محفوظة.</p>
                <p>المنصة استشارية تطويرية وليست بديلاً عن العلاج الطبي السريري.</p>
            </div>
        </div>
    </footer>
);
