import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BookingEngine } from '@/features/booking/components/BookingEngine';
import { useBookingStore } from '@/features/booking/store/useBookingStore';

// Mock Next.js App Router
vi.mock('next/navigation', () => ({
    useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
    usePathname: () => '/',
    useSearchParams: () => new URLSearchParams(),
}));

describe('BookingEngine Component (Zustand)', () => {
    beforeEach(() => {
        // Reset store before each test
        useBookingStore.getState().reset();
    });

    it('renders all three session types', () => {
        render(<BookingEngine />);

        expect(screen.getByText('فيديو')).toBeInTheDocument();
        expect(screen.getByText('صوت')).toBeInTheDocument();
        expect(screen.getByText('واتساب')).toBeInTheDocument();
    });

    it('displays video session as default (150 د.ت)', () => {
        render(<BookingEngine />);

        expect(screen.getByText('150')).toBeInTheDocument();
        expect(screen.getByText('جلسة وجهاً لوجه عبر الفيديو — الأعمق.')).toBeInTheDocument();
    });

    it('switches to whatsapp pricing on click', () => {
        render(<BookingEngine />);

        const whatsappBtn = screen.getByText('واتساب').closest('button');
        if (whatsappBtn) fireEvent.click(whatsappBtn);

        expect(screen.getByText('60')).toBeInTheDocument();
        expect(screen.getByText('نصي أو صوتي — مرن ومريح.')).toBeInTheDocument();
    });

    it('updates Zustand store when selecting session', () => {
        render(<BookingEngine />);

        const audioBtn = screen.getByText('صوت').closest('button');
        if (audioBtn) fireEvent.click(audioBtn);

        expect(useBookingStore.getState().selectedType).toBe('AUDIO');
    });

    it('shows booking CTA button', () => {
        render(<BookingEngine />);

        const ctaBtn = screen.getByRole('button', { name: /تأكيد الحجز/i });
        expect(ctaBtn).toBeInTheDocument();
    });

    it('displays session features list', () => {
        render(<BookingEngine />);

        expect(screen.getByText('60 دقيقة جلسة خاصة ومكثفة')).toBeInTheDocument();
        expect(screen.getByText('تسجيل ملاحظات مشفر وآمن')).toBeInTheDocument();
        expect(screen.getByText('خطة عمل مخصصة بعد الجلسة')).toBeInTheDocument();
    });
});
