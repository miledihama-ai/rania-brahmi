import React from 'react';

type LogoVariant = 'icon' | 'horizontal' | 'centered';

interface LogoProps {
    variant?: LogoVariant;
    className?: string;
    iconClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({
    variant = 'horizontal',
    className = '',
    iconClassName = ''
}) => {
    // The beautiful line-art lotus SVG
    const LotusIcon = (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-[var(--color-primary)] ${iconClassName}`}
            style={{ filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))' }}
        >
            {/* Base curved leaf/cup */}
            <path d="M 15 75 Q 50 90 85 75" />

            {/* Center petal */}
            <path d="M 50 25 Q 65 50 50 78 Q 35 50 50 25 Z" />

            {/* Inner Left Petal */}
            <path d="M 50 75 Q 35 65 32 45 Q 40 45 47 55" />

            {/* Inner Right Petal */}
            <path d="M 50 75 Q 65 65 68 45 Q 60 45 53 55" />

            {/* Outer Left Petal */}
            <path d="M 45 80 Q 25 75 18 55 Q 28 60 35 68" />

            {/* Outer Right Petal */}
            <path d="M 55 80 Q 75 75 82 55 Q 72 60 65 68" />

            {/* Top Outer Left Petal */}
            <path d="M 28 35 Q 25 50 35 60" />

            {/* Top Outer Right Petal */}
            <path d="M 72 35 Q 75 50 65 60" />
        </svg>
    );

    if (variant === 'icon') {
        return <div className={`aspect-square ${className}`}>{LotusIcon}</div>;
    }

    if (variant === 'centered') {
        return (
            <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
                <div className="w-24 h-24 sm:w-28 sm:h-28">
                    {LotusIcon}
                </div>
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#EAE6E1] tracking-widest font-serif leading-none" style={{ fontFamily: 'var(--font-amiri)' }}>
                        RANIA BRAHMI
                    </h2>
                    <div className="flex items-center w-full gap-2 my-2 opacity-60">
                        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-[var(--color-primary-light)]"></div>
                        <div className="w-1.5 h-1.5 rotate-45 bg-[var(--color-primary-light)]"></div>
                        <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-[var(--color-primary-light)]"></div>
                    </div>
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[var(--color-text-muted)] font-medium">
                        Consulting <span className="mx-1">•</span> Development <span className="mx-1">•</span> Healing
                    </p>
                </div>
            </div>
        );
    }

    // Default horizontal
    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                {LotusIcon}
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl text-[#EAE6E1] tracking-[0.15em] font-serif leading-tight" style={{ fontFamily: 'var(--font-amiri)' }}>
                    RANIA BRAHMI
                </h2>
                <div className="flex items-center w-full gap-2 my-1 opacity-50">
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-[var(--color-primary-light)]"></div>
                    <div className="w-1 h-1 rotate-45 bg-[var(--color-primary-light)]"></div>
                    <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-[var(--color-primary-light)]"></div>
                </div>
                <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-[var(--color-text-muted)] font-medium">
                    Consulting <span className="mx-1">•</span> Development <span className="mx-1">•</span> Healing
                </p>
            </div>
        </div>
    );
};
