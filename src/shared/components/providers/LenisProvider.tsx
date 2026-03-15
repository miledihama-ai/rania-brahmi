'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

/**
 * Provides smooth, luxury scrolling utilizing Lenis.
 * Should wrap the main layout children.
 */
export const LenisProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
};
