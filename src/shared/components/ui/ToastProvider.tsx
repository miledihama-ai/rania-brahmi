'use client';

import { Toaster } from 'react-hot-toast';

/**
 * Global Toast Provider — renders react-hot-toast Toaster with
 * RTL-friendly positioning and brand-consistent styling.
 */
export const ToastProvider = () => (
    <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
            duration: 4000,
            style: {
                direction: 'rtl',
                fontFamily: 'var(--font-ibm-arabic), sans-serif',
                background: 'var(--color-bg)',
                color: 'var(--color-text)',
                border: '1px solid var(--color-border-light)',
                borderRadius: '1rem',
                boxShadow: 'var(--shadow-warm)',
                padding: '12px 16px',
                fontSize: '0.875rem',
            },
            success: {
                iconTheme: {
                    primary: 'var(--color-secondary)',
                    secondary: 'white',
                },
            },
            error: {
                iconTheme: {
                    primary: '#e74c3c',
                    secondary: 'white',
                },
                duration: 5000,
            },
        }}
    />
);
