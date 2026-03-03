'use client';

import { LazyMotion, domAnimation } from 'framer-motion';
import { ReactNode } from 'react';

/**
 * Wraps the app with LazyMotion + domAnimation.
 * This dramatically reduces the framer-motion bundle size (~80% smaller)
 * by only loading the DOM animation features (no SVG, layout, or drag).
 */
export const MotionProvider = ({ children }: { children: ReactNode }) => {
    return (
        <LazyMotion features={domAnimation} strict>
            {children}
        </LazyMotion>
    );
};
