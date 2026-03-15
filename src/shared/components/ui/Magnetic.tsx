'use client';

import { useRef, useState, ReactNode } from 'react';
import { m } from 'framer-motion';

interface MagneticProps {
    children: ReactNode;
    /** How strong the magnetic pull is. Default 0.5 */
    strength?: number;
    className?: string;
}

/**
 * Wraps any element to give it a "magnetic" pull towards the mouse/touch point.
 * Provides a high-end, tactile feel for buttons and interactive elements.
 */
export const Magnetic = ({ children, strength = 0.5, className = '' }: MagneticProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const { clientX, clientY } = 'touches' in e ? e.touches[0] : e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        setPosition({ x: middleX * strength, y: middleY * strength });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <m.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            className={`inline-block ${className}`}
        >
            {children}
        </m.div>
    );
};
