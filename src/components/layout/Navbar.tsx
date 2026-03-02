'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
    { label: 'الرئيسية', href: '/' },
    { label: 'البرامج', href: '/#programs' },
    { label: 'الاستشارات', href: '/booking' },
    { label: 'عن رانيا', href: '/#about' },
];

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-[var(--color-border-light)]">
            <div className="fluid-container flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold text-lg shadow-[var(--shadow-soft)] group-hover:scale-105 transition-transform">
                        R
                    </span>
                    <span className="font-bold text-xl text-[var(--color-text)]">
                        Rania Brahmi
                    </span>
                </Link>

                {/* Desktop links */}
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

                {/* Mobile hamburger */}
                <button
                    id="mobile-menu-toggle"
                    onClick={() => setOpen(!open)}
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[var(--color-primary-light)] transition-colors"
                    aria-label="Toggle menu"
                >
                    <div className="space-y-1.5">
                        <span className={`block w-5 h-0.5 bg-[var(--color-text)] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-[var(--color-text)] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-[var(--color-text)] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="fluid-container pb-5 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="block py-3 px-4 rounded-xl text-[var(--color-text)] hover:bg-[var(--color-primary-light)] transition-colors text-sm font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/booking"
                        onClick={() => setOpen(false)}
                        className="btn-cta w-full text-center mt-2"
                    >
                        احجزي الآن
                    </Link>
                </div>
            </div>
        </nav>
    );
};
