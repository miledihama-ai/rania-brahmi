'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Magnetic } from '@/shared/components/ui/Magnetic';
import { Logo } from '@/shared/components/ui/Logo';
import { FluidMenu } from '@/shared/components/layout/FluidMenu';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 w-full z-50 mix-blend-difference pb-4 pt-6 md:pt-8 transition-transform duration-500">
                <nav className="fluid-container flex items-center justify-between">
                    {/* Brand */}
                    <Magnetic strength={0.3}>
                        <Link href="/" className="hover:opacity-80 transition-opacity block py-2">
                            <Logo variant="horizontal" className="scale-50 sm:scale-[0.65] origin-left" />
                        </Link>
                    </Magnetic>

                    {/* Menu Toggle */}
                    <Magnetic strength={0.3}>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#EAE6E1] text-sm font-semibold tracking-widest uppercase flex items-center gap-2 hover:opacity-100 transition-opacity p-3 -m-3"
                            aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
                        >
                            <span>{isMenuOpen ? 'إغلاق' : 'القائمة'}</span>
                        </button>
                    </Magnetic>
                </nav>
            </header>

            {/* The Full screen staggered fluid menu */}
            <FluidMenu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
        </>
    );
};
