import { create } from 'zustand';
import { SESSION_PRICES, type SessionType } from '@/features/booking/lib/vat-calculator';

/** Re-export SessionType for consumers. */
export type { SessionType };

/** A bookable session option with type, pricing, and description. */
export interface SessionOption {
    key: SessionType;
    label: string;
    icon: string;
    price: number;
    desc: string;
}

/** All available session options — prices derived from SESSION_PRICES (single source of truth). */
export const SESSION_OPTIONS: SessionOption[] = [
    { key: 'VIDEO', label: 'فيديو', icon: '🎥', price: SESSION_PRICES.VIDEO, desc: 'جلسة وجهاً لوجه عبر الفيديو — الأعمق.' },
    { key: 'AUDIO', label: 'صوت', icon: '🎧', price: SESSION_PRICES.AUDIO, desc: 'جلسة صوتية — خصوصية مطلقة.' },
    { key: 'WHATSAPP', label: 'واتساب', icon: '💬', price: SESSION_PRICES.WHATSAPP, desc: 'نصي أو صوتي — مرن ومريح.' },
];

/** Booking store state. */
interface BookingState {
    selectedType: SessionType;
    isSubmitting: boolean;
    bookingError: string | null;
}

/** Booking store actions. */
interface BookingActions {
    selectSessionType: (type: SessionType) => void;
    getSelectedSession: () => SessionOption;
    setSubmitting: (val: boolean) => void;
    setBookingError: (error: string | null) => void;
    reset: () => void;
}

const initialState: BookingState = {
    selectedType: 'VIDEO',
    isSubmitting: false,
    bookingError: null,
};

/**
 * Zustand store for booking flow state.
 * Shared between BookingEngine component and booking page.
 */
export const useBookingStore = create<BookingState & BookingActions>((set, get) => ({
    ...initialState,

    selectSessionType: (type: SessionType) => set({ selectedType: type, bookingError: null }),

    getSelectedSession: (): SessionOption => {
        const { selectedType } = get();
        return SESSION_OPTIONS.find((s) => s.key === selectedType) ?? SESSION_OPTIONS[0];
    },

    setSubmitting: (val: boolean) => set({ isSubmitting: val }),

    setBookingError: (error: string | null) => set({ bookingError: error }),

    reset: () => set(initialState),
}));
