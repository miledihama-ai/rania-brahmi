import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FAQ } from '@/features/marketing/components/FAQ';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
    },
    AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}));

describe('FAQ Component', () => {
    it('renders all FAQ questions', () => {
        render(<FAQ />);

        expect(screen.getByText('ما الفرق بين Shadow Work والعلاج النفسي؟')).toBeInTheDocument();
        expect(screen.getByText('هل جلساتي سرية بالكامل؟')).toBeInTheDocument();
        expect(screen.getByText('كيف يعمل نظام الحجز مع المناطق الزمنية المختلفة؟')).toBeInTheDocument();
    });

    it('renders the section heading', () => {
        render(<FAQ />);

        expect(screen.getByText('لديك تساؤل؟')).toBeInTheDocument();
        expect(screen.getByText('الأسئلة الشائعة')).toBeInTheDocument();
    });

    it('renders FAQ toggle buttons', () => {
        render(<FAQ />);

        const buttons = screen.getAllByRole('button');
        expect(buttons.length).toBeGreaterThanOrEqual(6); // 6 FAQ items
    });
});
