import 'server-only';
import { z } from 'zod';

/**
 * Environment Variable Validation — Rania Platform
 *
 * Uses Zod to validate all env vars at import time.
 * The `server-only` import guarantees this module can never
 * be imported from a client component — the build will fail.
 *
 * Import from '@/shared/lib/env' in server-only code.
 * For client env, use '@/shared/lib/client-env' instead.
 */

// ─────────────────────────────────────────────
// Server-side (never exposed to the client)
// ─────────────────────────────────────────────

const serverSchema = z.object({
    DATABASE_URL: z.string().url('DATABASE_URL must be a valid PostgreSQL URL'),
    ENCRYPTION_KEY: z.string().length(64, 'ENCRYPTION_KEY must be a 64-char hex string (32 bytes)'),
    NEXTAUTH_SECRET: z.string().min(16, 'NEXTAUTH_SECRET must be at least 16 characters'),
    NEXTAUTH_URL: z.string().url('NEXTAUTH_URL must be a valid URL'),
    MUX_TOKEN_ID: z.string().optional(),
    MUX_TOKEN_SECRET: z.string().optional(),
    HYPERPAY_ACCESS_TOKEN: z.string().optional(),
    HYPERPAY_ENTITY_ID: z.string().optional(),
    HYPERPAY_BASE_URL: z.string().url().optional(),
});

// ─────────────────────────────────────────────
// Validated export (lazy — parsed on first access)
// ─────────────────────────────────────────────

let _serverEnv: z.infer<typeof serverSchema> | null = null;

/**
 * Validated server-side environment variables.
 * Lazily parsed on first access to avoid module-scope crashes.
 * Only import this in server-only code (API routes, server actions, server components).
 */
export function getServerEnv() {
    if (!_serverEnv) _serverEnv = serverSchema.parse(process.env);
    return _serverEnv;
}

/** @deprecated Use getServerEnv() instead — direct access kept for backward compat */
export const serverEnv = new Proxy({} as z.infer<typeof serverSchema>, {
    get(_, prop: string) {
        return getServerEnv()[prop as keyof z.infer<typeof serverSchema>];
    },
});
