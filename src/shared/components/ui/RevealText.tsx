'use client';

import { m, Variants } from 'framer-motion';

interface RevealTextProps {
    text: string;
    delay?: number;
    className?: string;
}

/**
 * Animates text line-by-line or word-by-word, sliding up from a clipped overflow box.
 * Crucial for the Luxury Mobile Hero entrance.
 */
export const RevealText = ({ text, delay = 0, className = '' }: RevealTextProps) => {
    // Split text by spaces for word-level animation, while preserving whitespace
    const words = text.split(' ');

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: delay * i },
        }),
    };

    const child: Variants = {
        hidden: { opacity: 0, y: 40, rotateX: -20 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { type: 'spring', damping: 20, stiffness: 100 },
        },
    };

    return (
        <m.div
            style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className={className}
        >
            {words.map((word, index) => (
                <m.span
                    variants={child}
                    style={{ marginRight: '0.25em', display: 'inline-block' }}
                    key={index}
                >
                    {word}
                </m.span>
            ))}
        </m.div>
    );
};
