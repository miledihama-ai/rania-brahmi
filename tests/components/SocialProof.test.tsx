import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SocialProof } from '@/features/marketing/components/SocialProof';

describe('SocialProof Component', () => {
    it('renders all testimonials', () => {
        render(<SocialProof />);

        expect(screen.getByText('أمينة بن سعيد')).toBeInTheDocument();
        expect(screen.getByText('ياسمين الجبالي')).toBeInTheDocument();
        expect(screen.getByText('سلمى العيادي')).toBeInTheDocument();
        expect(screen.getByText('مريم بن عمر')).toBeInTheDocument();
    });

    it('renders trust badges', () => {
        render(<SocialProof />);

        expect(screen.getByText('+500')).toBeInTheDocument();
        expect(screen.getByText('4.9')).toBeInTheDocument();
        expect(screen.getByText('100%')).toBeInTheDocument();
    });

    it('renders section heading', () => {
        render(<SocialProof />);

        expect(screen.getByText('ماذا تقول عميلاتنا')).toBeInTheDocument();
    });

    it('displays star ratings', () => {
        render(<SocialProof />);

        const stars = screen.getAllByText('★');
        expect(stars.length).toBeGreaterThanOrEqual(4); // At least 4 testimonials with stars
    });
});
