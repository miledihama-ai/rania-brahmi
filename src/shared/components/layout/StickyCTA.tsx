'use client';

import Link from 'next/link';
import { m, AnimatePresence } from 'framer-motion';
import { useBookingNavLogic } from '@/shared/components/layout/hooks/useBookingNavLogic';

/**
 * StickyCTA — Presentational (Dumb) Component.
 * All scroll-visibility logic and session data handled by `useBookingNavLogic`.
 * This component only renders.
 */
export const StickyCTA = () => {
    const { visible, session } = useBookingNavLogic();

    return (
        <AnimatePresence>
            {visible && (
                <m.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="fixed z-50 md:hidden"
                    style={{ bottom: '76px', left: '16px' }}
                >
                    <m.div whileTap={{ scale: 0.95 }}>
                        <Link
                            href="/booking"
                            id="sticky-cta"
                            className="flex items-center gap-2.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] text-white px-6 py-3.5 rounded-full shadow-[0_8px_25px_rgba(184,142,75,0.4)] hover:shadow-[0_12px_30px_rgba(184,142,75,0.6)] font-bold text-[15px] border border-white/20"
                        >
                            <span className="text-lg">📅</span>
                            <span>احجزي الآن — {session.price} د.ت</span>
                        </Link>
                    </m.div>
                </m.div>
            )}
        </AnimatePresence>
    );
};
