import 'server-only';

/**
 * Encryption Utility — AES-GCM for Shadow Work Notes
 * 
 * Uses Node.js built-in `crypto` module for End-to-End Encryption
 * of sensitive consultation and shadow work session data.
 * 
 * IMPORTANT: The encryption key must be a 32-byte (256-bit) hex string
 * stored securely in environment variables (ENCRYPTION_KEY).
 * 
 * Example: ENCRYPTION_KEY=000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f
 */

import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';
import { serverEnv } from '@/shared/lib/env';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 12; // 96 bits for GCM
const AUTH_TAG_LENGTH = 16; // 128 bits

function getKey(): Buffer {
    return Buffer.from(serverEnv.ENCRYPTION_KEY, 'hex');
}

export interface EncryptedData {
    ciphertext: string; // base64-encoded
    iv: string;         // base64-encoded initialization vector
    authTag: string;    // base64-encoded GCM auth tag
}

/**
 * Encrypt plaintext using AES-256-GCM.
 * Returns ciphertext, IV, and auth tag to store in DB.
 */
export function encrypt(plaintext: string): EncryptedData {
    const key = getKey();
    const iv = randomBytes(IV_LENGTH);
    const cipher = createCipheriv(ALGORITHM, key, iv, {
        authTagLength: AUTH_TAG_LENGTH,
    });

    const encrypted = Buffer.concat([
        cipher.update(plaintext, 'utf8'),
        cipher.final(),
    ]);

    return {
        ciphertext: encrypted.toString('base64'),
        iv: iv.toString('base64'),
        authTag: cipher.getAuthTag().toString('base64'),
    };
}

/**
 * Decrypt an encryptedData object back to plaintext.
 */
export function decrypt(data: EncryptedData): string {
    const key = getKey();
    const iv = Buffer.from(data.iv, 'base64');
    const authTag = Buffer.from(data.authTag, 'base64');
    const ciphertext = Buffer.from(data.ciphertext, 'base64');

    const decipher = createDecipheriv(ALGORITHM, key, iv, {
        authTagLength: AUTH_TAG_LENGTH,
    });
    decipher.setAuthTag(authTag);

    return Buffer.concat([
        decipher.update(ciphertext),
        decipher.final(),
    ]).toString('utf8');
}

/**
 * Helper: serialize encrypted data for Prisma storage.
 * Stores ciphertext and IV as separate DB fields.
 */
export function serializeForDb(data: EncryptedData): { contentData: string; iv: string } {
    // Store authTag inside contentData as prefix: `authTag:ciphertext`
    return {
        contentData: `${data.authTag}:${data.ciphertext}`,
        iv: data.iv,
    };
}

/**
 * Helper: deserialize from Prisma DB fields to EncryptedData.
 */
export function deserializeFromDb(contentData: string, iv: string): EncryptedData {
    const colonIdx = contentData.indexOf(':');
    if (colonIdx === -1) {
        throw new Error('Malformed encrypted data: missing authTag separator');
    }
    const authTag = contentData.slice(0, colonIdx);
    const ciphertext = contentData.slice(colonIdx + 1);
    if (!authTag || !ciphertext) {
        throw new Error('Malformed encrypted data: empty authTag or ciphertext');
    }
    return { ciphertext, iv, authTag };
}
