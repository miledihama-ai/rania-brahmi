'use client';

import Link from 'next/link';
import { m, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
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
                    className="fixed z-40 md:hidden bottom-[6.5rem] right-4"
                >
                    <m.div whileTap={{ scale: 0.95 }}>
                        <Link
                            href="/booking"
                            id="sticky-cta"
                            className="flex items-center gap-2.5 bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)] text-[#030303] px-6 py-3.5 rounded-full shadow-[0_8px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.6)] font-bold text-[15px] border border-[var(--color-primary-light)]"
                        >
                            <Calendar strokeWidth={1} size={20} />
                            <span>احجزي الآن — ${session.price}</span>
                        </Link>
                    </m.div>
                </m.div>
            )}
        </AnimatePresence>
    );
};
