'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const StickyCTA = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            // Show after scrolling 600px (past hero)
            setVisible(window.scrollY > 600);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="fixed z-50 md:hidden"
                    style={{ bottom: '76px', left: '16px' }}
                >
                    <motion.div whileTap={{ scale: 0.9 }}>
                        <Link
                            href="/booking"
                            id="sticky-cta"
                            className="flex items-center gap-2 bg-[var(--color-accent)] text-white px-5 py-3 rounded-full shadow-[var(--shadow-glow)] font-semibold text-sm"
                        >
                            <span>📅</span>
                            <span>احجزي الآن</span>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
