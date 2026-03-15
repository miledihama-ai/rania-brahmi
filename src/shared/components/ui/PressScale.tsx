'use client';

import { ReactNode } from 'react';
import { m } from 'framer-motion';

interface PressScaleProps {
    children: ReactNode;
    className?: string;
    scale?: number;
    as?: 'div' | 'button' | 'a';
}

export const PressScale = ({
    children,
    className = '',
    scale = 0.95,
    as = 'div',
}: PressScaleProps) => {
    const Component = as === 'button' ? m.button : as === 'a' ? m.a : m.div;

    return (
        <Component
            whileTap={{ scale }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className={className}
        >
            {children}
        </Component>
    );
};
