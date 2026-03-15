'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { m } from 'framer-motion';
import { Home, Layers, Calendar, UserRound } from 'lucide-react';

/** A navigation item in the bottom bar. */
interface NavItem {
    icon: React.ReactNode;
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { icon: <Home strokeWidth={1} size={24} />, label: 'الرئيسية', href: '/' },
    { icon: <Layers strokeWidth={1} size={24} />, label: 'البرامج', href: '/#programs' },
    { icon: <Calendar strokeWidth={1} size={24} />, label: 'الاستشارات', href: '/booking' },
    { icon: <UserRound strokeWidth={1} size={24} />, label: 'عن رانيا', href: '/#about' },
];

export const BottomNav = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 inset-x-0 z-50 md:hidden pb-safe">
            {/* Extended Glass background for safe area */}
            <div className="absolute inset-0 glass border-t border-white/20 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]" />

            {/* Added extra padding for the safe area at the bottom of modern phones */}
            <div className="relative grid grid-cols-4 items-center pb-2" style={{ height: 'var(--bottom-nav-height, 72px)', ['--bottom-nav-height' as string]: '72px' }}>
                {navItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href.replace('/#', '/')));

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex flex-col items-center justify-center gap-1 h-full w-full outline-none"
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                            <m.div
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                className="flex flex-col items-center justify-center w-full h-full"
                            >
                                <span className={`text-[22px] transition-transform duration-300 ${isActive ? 'scale-110 -translate-y-0.5' : ''}`}>
                                    {item.icon}
                                </span>
                                <span className={`text-[11px] font-bold tracking-wide transition-colors duration-300 ${isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)]'
                                    }`}>
                                    {item.label}
                                </span>
                                {isActive && (
                                    <m.div
                                        layoutId="bottomNavIndicator"
                                        className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] shadow-[0_0_8px_rgba(184,142,75,0.6)]"
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </m.div>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};
