'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
    { icon: '🏠', label: 'الرئيسية', href: '/' },
    { icon: '📚', label: 'البرامج', href: '/#programs' },
    { icon: '📅', label: 'الاستشارات', href: '/booking' },
    { icon: '👩‍💼', label: 'عن رانيا', href: '/#about' },
];

export const BottomNav = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 inset-x-0 z-50 md:hidden">
            {/* Glass background */}
            <div className="absolute inset-0 glass border-t border-[var(--color-border-light)]" />

            <div className="relative grid grid-cols-4 h-16 items-center">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href.replace('/#', '/')));

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex flex-col items-center justify-center gap-0.5 h-full"
                        >
                            <motion.div
                                whileTap={{ scale: 0.85 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                className="flex flex-col items-center"
                            >
                                <span className={`text-lg transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}>
                                    {item.icon}
                                </span>
                                <span className={`text-[10px] font-medium transition-colors duration-200 ${isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)]'
                                    }`}>
                                    {item.label}
                                </span>
                                {isActive && (
                                    <motion.div
                                        layoutId="bottomNavIndicator"
                                        className="w-1 h-1 rounded-full bg-[var(--color-accent)] mt-0.5"
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </motion.div>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};
