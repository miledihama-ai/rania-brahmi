'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Magnetic } from '@/shared/components/ui/Magnetic';
import { Logo } from '@/shared/components/ui/Logo';
import { FluidMenu } from '@/shared/components/layout/FluidMenu';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            // Hide when scrolled more than 80px from the top
            setVisible(window.scrollY < 80);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <header
                className="fixed top-0 w-full z-50 pt-6 pb-4 md:pt-8 transition-all duration-500"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(-100%)',
                    pointerEvents: visible ? 'auto' : 'none',
                }}
            >
                <nav className="fluid-container relative flex items-center justify-center">

                    {/* Centered Logo */}
                    <Magnetic strength={0.25}>
                        <Link
                            href="/"
                            className="hover:opacity-80 transition-opacity block"
                            aria-label="الصفحة الرئيسية"
                        >
                            <Logo
                                variant="centered"
                                className="scale-[0.55] sm:scale-[0.65] origin-top"
                            />
                        </Link>
                    </Magnetic>

                    {/* Menu Toggle — absolute left so it never shifts the logo */}
                    <div className="absolute left-0">
                        <Magnetic strength={0.3}>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-[#EAE6E1] text-sm font-semibold tracking-widest uppercase flex items-center gap-2 hover:opacity-100 transition-opacity p-3"
                                aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
                            >
                                <span>{isMenuOpen ? 'إغلاق' : 'القائمة'}</span>
                            </button>
                        </Magnetic>
                    </div>
                </nav>
            </header>

            <FluidMenu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
        </>
    );
};
