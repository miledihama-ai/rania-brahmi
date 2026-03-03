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
        const onScroll = () => setVisible(window.scrollY > 600);
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
