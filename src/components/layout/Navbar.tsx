'use client';

import Link from 'next/link';

const navLinks = [
    { label: 'الرئيسية', href: '/' },
    { label: 'البرامج', href: '/#programs' },
    { label: 'الاستشارات', href: '/booking' },
    { label: 'عن رانيا', href: '/#about' },
];

export const Navbar = () => {
    return (
        <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-[var(--color-border-light)]">
            <div className="fluid-container flex items-center justify-between h-14 md:h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold text-lg shadow-[var(--shadow-soft)] group-hover:scale-105 transition-transform">
                        R
                    </span>
                    <span className="font-bold text-lg md:text-xl text-[var(--color-text)]">
                        Rania Brahmi
                    </span>
                </Link>

                {/* Desktop links — hidden on mobile (bottom nav replaces) */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-[var(--color-text-light)] hover:text-[var(--color-accent)] transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/booking" className="btn-cta text-sm !py-2.5 !px-5">
                        احجزي الآن
                    </Link>
                </div>
            </div>
        </nav>
    );
};
