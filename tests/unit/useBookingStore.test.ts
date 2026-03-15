import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useBookingStore, SESSION_OPTIONS } from '@/features/booking/store/useBookingStore';

/**
 * Unit tests for the booking store (which useBookingLogic wraps).
 * We test the store directly because useBookingLogic is a thin adapter.
 */
describe('useBookingStore', () => {
    beforeEach(() => {
        // Reset store to initial state before each test
        useBookingStore.getState().reset();
    });

    it('defaults to VIDEO session type', () => {
        const { selectedType } = useBookingStore.getState();
        expect(selectedType).toBe('VIDEO');
    });

    it('getSelectedSession returns the VIDEO option by default', () => {
        const session = useBookingStore.getState().getSelectedSession();
        expect(session.key).toBe('VIDEO');
        expect(session.price).toBe(150);
    });

    it('selectSessionType changes the selected session', () => {
        const { selectSessionType, getSelectedSession } = useBookingStore.getState();
        act(() => {
            selectSessionType('AUDIO');
        });
        expect(getSelectedSession().key).toBe('AUDIO');
        expect(getSelectedSession().price).toBe(100);
    });

    it('selectSessionType clears any booking error', () => {
        const store = useBookingStore.getState();
        act(() => {
            store.setBookingError('خطأ في الدفع');
            store.selectSessionType('WHATSAPP');
        });
        expect(useBookingStore.getState().bookingError).toBeNull();
    });

    it('isSubmitting starts as false', () => {
        expect(useBookingStore.getState().isSubmitting).toBe(false);
    });

    it('setSubmitting toggles isSubmitting correctly', () => {
        const { setSubmitting } = useBookingStore.getState();
        act(() => setSubmitting(true));
        expect(useBookingStore.getState().isSubmitting).toBe(true);
        act(() => setSubmitting(false));
        expect(useBookingStore.getState().isSubmitting).toBe(false);
    });

    it('reset returns to initial state', () => {
        const store = useBookingStore.getState();
        act(() => {
            store.selectSessionType('WHATSAPP');
            store.setSubmitting(true);
            store.setBookingError('some error');
        });
        act(() => store.reset());
        const s = useBookingStore.getState();
        expect(s.selectedType).toBe('VIDEO');
        expect(s.isSubmitting).toBe(false);
        expect(s.bookingError).toBeNull();
    });

    it('SESSION_OPTIONS has exactly 3 items', () => {
        expect(SESSION_OPTIONS).toHaveLength(3);
    });

    it('all session options have required fields', () => {
        SESSION_OPTIONS.forEach((s) => {
            expect(s).toHaveProperty('key');
            expect(s).toHaveProperty('label');
            expect(s).toHaveProperty('icon');
            expect(s).toHaveProperty('price');
            expect(s).toHaveProperty('desc');
            expect(s.price).toBeGreaterThan(0);
        });
    });
});
