'use client';

import { m, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';

const links = [
    { title: 'الرئيسية', href: '/' },
    { title: 'استكشفي البرامج', href: '/#programs' },
    { title: 'احجزي جلستك', href: '/booking' },
    { title: 'تجارب العميلات', href: '/#testimonials' },
    { title: 'الأسئلة الشائعة', href: '/#faq' },
];

const menuParams: Variants = {
    initial: { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
    enter: {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        transition: { type: 'spring', bounce: 0, duration: 1.2 }
    },
    exit: {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        transition: { type: 'spring', bounce: 0, duration: 0.8 }
    }
};

const linkParams: Variants = {
    initial: { y: '50dvh', transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
    enter: (i: number) => ({
        y: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i }
    }),
    exit: (i: number) => ({
        y: '50dvh',
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.05 * (links.length - i) }
    })
};

export const FluidMenu = ({ isOpen, closeMenu }: { isOpen: boolean, closeMenu: () => void }) => {
    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <m.div
                    variants={menuParams}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    className="fixed inset-0 z-[100] bg-[var(--color-bg)] flex flex-col justify-center px-8 md:px-16"
                >
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl" />
                    <div className="flex flex-col gap-6 relative z-10 mt-20">
                        {links.map((link, i) => (
                            <div key={i} className="overflow-hidden">
                                <m.div custom={i} variants={linkParams} initial="initial" animate="enter" exit="exit">
                                    <Link
                                        href={link.href}
                                        onClick={closeMenu}
                                        className="text-4xl md:text-6xl font-extrabold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors block text-right leading-[1.8] w-full"
                                    >
                                        {link.title}
                                    </Link>
                                </m.div>
                            </div>
                        ))}
                    </div>
                </m.div>
            )}
        </AnimatePresence>
    );
};
