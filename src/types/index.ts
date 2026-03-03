/**
 * Shared TypeScript types used across multiple features.
 * Import from '@/types' instead of defining types in individual components.
 */

// ─────────────────────────────────────────────
// Common Primitives
// ─────────────────────────────────────────────

/** ISO 8601 date string (e.g. `"2025-03-01T12:00:00Z"`) */
export type ISODateString = string;

/** Arabic locale content — ensures string fields contain Arabic text */
export type ArabicString = string;

// ─────────────────────────────────────────────
// User & Auth
// ─────────────────────────────────────────────

export type UserRole = 'STUDENT' | 'COACH' | 'ADMIN';

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    avatarUrl?: string;
    createdAt: ISODateString;
}

// ─────────────────────────────────────────────
// Booking
// ─────────────────────────────────────────────

export type BookingStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';

export interface BookingSummary {
    id: string;
    sessionType: 'VIDEO' | 'AUDIO' | 'WHATSAPP';
    price: number;
    status: BookingStatus;
    scheduledAt: ISODateString;
}

// ─────────────────────────────────────────────
// Payment
// ─────────────────────────────────────────────

export type PaymentStatus = 'PENDING' | 'SUCCESS' | 'FAILED' | 'REFUNDED';

export interface PaymentResult {
    transactionId: string;
    amount: number;
    currency: string;
    status: PaymentStatus;
    paidAt?: ISODateString;
}

// ─────────────────────────────────────────────
// API Responses
// ─────────────────────────────────────────────

export interface ApiSuccess<T> {
    ok: true;
    data: T;
}

export interface ApiError {
    ok: false;
    message: string;
    code?: string;
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

// ─────────────────────────────────────────────
// UI / Component Props Helpers
// ─────────────────────────────────────────────

/** Props that every page-level component accepts */
export interface PageProps {
    params?: Record<string, string>;
    searchParams?: Record<string, string | string[]>;
}
