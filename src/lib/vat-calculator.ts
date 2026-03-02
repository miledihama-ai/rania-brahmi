/**
 * Pricing Utility — Session Pricing for Rania Brahmi Platform
 * Currency: Tunisian Dinar (TND / د.ت)
 */

export const SESSION_PRICES = {
    VIDEO: 150,
    AUDIO: 100,
    WHATSAPP: 60,
} as const;

export type SessionType = keyof typeof SESSION_PRICES;

export interface PricingResult {
    price: number;
    currency: 'TND';
    currencyLabel: string;
}

/**
 * Get the price for a session type.
 */
export function getSessionPrice(type: SessionType): PricingResult {
    return {
        price: SESSION_PRICES[type],
        currency: 'TND',
        currencyLabel: 'د.ت',
    };
}

/**
 * Format price in TND with Arabic locale.
 */
export function formatPrice(amount: number): string {
    return `${amount} د.ت`;
}

/**
 * Apply an optional discount.
 */
export function applyDiscount(
    base: number,
    discountPercent: number
): PricingResult {
    const discounted = Math.round(base * (1 - discountPercent / 100));
    return {
        price: discounted,
        currency: 'TND',
        currencyLabel: 'د.ت',
    };
}
