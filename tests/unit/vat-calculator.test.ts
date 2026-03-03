import { describe, it, expect } from 'vitest';
import {
    getSessionPrice,
    formatPrice,
    applyDiscount,
    SESSION_PRICES,
} from '@/features/booking/lib/vat-calculator';
import type { SessionType, PricingResult } from '@/features/booking/lib/vat-calculator';

describe('vat-calculator — getSessionPrice', () => {
    it('returns correct price for VIDEO session', () => {
        const result: PricingResult = getSessionPrice('VIDEO');
        expect(result.price).toBe(150);
        expect(result.currency).toBe('TND');
        expect(result.currencyLabel).toBe('د.ت');
    });

    it('returns correct price for AUDIO session', () => {
        const result: PricingResult = getSessionPrice('AUDIO');
        expect(result.price).toBe(100);
    });

    it('returns correct price for WHATSAPP session', () => {
        const result: PricingResult = getSessionPrice('WHATSAPP');
        expect(result.price).toBe(60);
    });

    it('SESSION_PRICES matches expected values', () => {
        expect(SESSION_PRICES.VIDEO).toBe(150);
        expect(SESSION_PRICES.AUDIO).toBe(100);
        expect(SESSION_PRICES.WHATSAPP).toBe(60);
    });
});

describe('vat-calculator — formatPrice', () => {
    it('formats price with TND symbol', () => {
        expect(formatPrice(150)).toBe('150 د.ت');
    });

    it('formats zero price', () => {
        expect(formatPrice(0)).toBe('0 د.ت');
    });
});

describe('vat-calculator — applyDiscount', () => {
    it('applies 10% discount correctly', () => {
        const result: PricingResult = applyDiscount(100, 10);
        expect(result.price).toBe(90);
        expect(result.currency).toBe('TND');
    });

    it('applies 50% discount correctly', () => {
        const result: PricingResult = applyDiscount(150, 50);
        expect(result.price).toBe(75);
    });

    it('applies 0% discount (no change)', () => {
        const result: PricingResult = applyDiscount(60, 0);
        expect(result.price).toBe(60);
    });

    it('applies 100% discount (free)', () => {
        const result: PricingResult = applyDiscount(150, 100);
        expect(result.price).toBe(0);
    });

    it('rounds to nearest integer', () => {
        const result: PricingResult = applyDiscount(100, 33);
        expect(result.price).toBe(67); // Math.round(100 * 0.67)
    });
});
