import { z } from 'zod';

/**
 * Client-safe Environment Variables — Rania Platform
 *
 * Only NEXT_PUBLIC_* variables are validated here.
 * Safe to import from any component (server or client).
 */

const clientSchema = z.object({
    NEXT_PUBLIC_APP_URL: z.string().url('NEXT_PUBLIC_APP_URL must be a valid URL'),
    NEXT_PUBLIC_APP_NAME: z.string().min(1, 'NEXT_PUBLIC_APP_NAME must not be empty'),
});

/**
 * Validated client-side environment variables.
 * Safe to import anywhere.
 */
export const clientEnv = clientSchema.parse({
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
});
