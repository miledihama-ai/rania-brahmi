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
    return (
        <m.div
            whileTap={{ scale }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className={className}
            role={as === 'button' ? 'button' : undefined}
        >
            {children}
        </m.div>
    );
};
