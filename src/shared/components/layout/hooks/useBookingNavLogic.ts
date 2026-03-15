'use client';

import { useState, useEffect } from 'react';
import { useBookingStore } from '@/features/booking/store/useBookingStore';

/**
 * Custom hook encapsulating the visibility logic and booking session data
 * for the mobile StickyCTA button.
 */
export const useBookingNavLogic = () => {
    const [visible, setVisible] = useState(false);
    const { getSelectedSession } = useBookingStore();
    const session = getSelectedSession();

    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setVisible(window.scrollY > 600);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return {
        /** Whether the sticky CTA should be visible (user scrolled past hero) */
        visible,
        /** The currently selected booking session for price display */
        session,
    };
};
