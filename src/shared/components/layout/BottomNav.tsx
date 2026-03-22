'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Home, Layers, Calendar, UserRound } from 'lucide-react';

interface NavItem {
    icon: React.ReactNode;
    label: string;
    href: string;
    /** pathname to match — for hash-only links, stays '/' */
    pathMatch: string;
    /** optional hash to match e.g. 'programs' */
    hashMatch?: string;
}

const navItems: NavItem[] = [
    {
        icon: <Home strokeWidth={1.5} size={22} />,
        label: 'الرئيسية',
        href: '/',
        pathMatch: '/',
    },
    {
        icon: <Layers strokeWidth={1.5} size={22} />,
        label: 'البرامج',
        href: '/#programs',
        pathMatch: '/',
        hashMatch: 'programs',
    },
    {
        icon: <Calendar strokeWidth={1.5} size={22} />,
        label: 'الاستشارات',
        href: '/booking',
        pathMatch: '/booking',
    },
    {
        icon: <UserRound strokeWidth={1.5} size={22} />,
        label: 'عن رانيا',
        href: '/#about',
        pathMatch: '/',
        hashMatch: 'about',
    },
];

export const BottomNav = () => {
    const pathname = usePathname();
    const [activeHash, setActiveHash] = useState('');

    // Track hash changes (anchor navigation within '/')
    useEffect(() => {
        const syncHash = () => setActiveHash(window.location.hash.replace('#', ''));
        syncHash();
        window.addEventListener('hashchange', syncHash);
        return () => window.removeEventListener('hashchange', syncHash);
    }, [pathname]);

    const isActive = (item: NavItem) => {
        // On a non-home page (e.g. /booking) — match by pathname only
        if (pathname !== '/') {
            return pathname.startsWith(item.pathMatch) && item.pathMatch !== '/';
        }
        // On home page: if item has a hash, it must match activeHash
        if (item.hashMatch) {
            return activeHash === item.hashMatch;
        }
        // Home item active only when no hash is set
        return !activeHash;
    };

    return (
        <nav className="fixed bottom-0 inset-x-0 z-50 md:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
            {/* Glass bar */}
            <div
                className="relative mx-3 mb-3 rounded-2xl overflow-hidden"
                style={{
                    background: 'rgba(8, 8, 8, 0.88)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(212, 175, 55, 0.15)',
                    boxShadow: '0 -2px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
            >
                {/* Subtle gold shimmer line at top */}
                <div
                    className="absolute top-0 inset-x-0 h-px"
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)',
                    }}
                />

                <div className="grid grid-cols-4 h-16">
                    {navItems.map((item) => {
                        const active = isActive(item);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative flex flex-col items-center justify-center gap-1 outline-none select-none"
                                style={{ WebkitTapHighlightColor: 'transparent' }}
                            >
                                <m.div
                                    whileTap={{ scale: 0.85 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                    className="flex flex-col items-center justify-center gap-1 w-full h-full relative"
                                >
                                    {/* Active pill glow behind icon */}
                                    <AnimatePresence>
                                        {active && (
                                            <m.div
                                                layoutId="bottomNavPill"
                                                className="absolute inset-x-2 top-1.5 h-9 rounded-xl"
                                                style={{
                                                    background: 'rgba(212, 175, 55, 0.12)',
                                                    border: '1px solid rgba(212, 175, 55, 0.25)',
                                                }}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                            />
                                        )}
                                    </AnimatePresence>

                                    {/* Icon */}
                                    <span
                                        className="relative z-10 transition-all duration-300"
                                        style={{
                                            color: active ? 'var(--color-primary)' : 'var(--color-text-muted)',
                                            filter: active ? 'drop-shadow(0 0 6px rgba(212,175,55,0.6))' : 'none',
                                            transform: active ? 'translateY(-1px)' : 'translateY(0)',
                                        }}
                                    >
                                        {item.icon}
                                    </span>

                                    {/* Label */}
                                    <span
                                        className="relative z-10 text-[10px] font-bold tracking-wide transition-colors duration-300"
                                        style={{
                                            color: active ? 'var(--color-primary-light)' : 'var(--color-text-muted)',
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                </m.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};
