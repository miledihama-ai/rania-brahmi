'use client';

import { useFAQLogic } from '@/features/marketing/hooks/useFAQLogic';

/**
 * FAQ — Presentational (Dumb) Component.
 * All data and accordion state is handled by `useFAQLogic`.
 * This component only renders.
 */
export const FAQ = () => {
    const { faqs, openIndex, toggle } = useFAQLogic();

    return (
        <section id="faq" className="section bg-[var(--color-bg)]">
            <div className="fluid-container max-w-3xl">
                <div className="text-center mb-10 md:mb-12">
                    <span className="inline-block bg-[var(--color-primary)] text-black px-4 py-1.5 rounded-full text-sm font-bold mb-4 animate-fade-in-up">
                        الأسئلة الشائعة
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-4 animate-fade-in-up stagger-1">
                        لديك تساؤل؟
                    </h2>
                    <p className="text-[var(--color-text-muted)] text-base md:text-lg animate-fade-in-up stagger-2">
                        إجابات لأكثر الأسئلة شيوعاً حول المنصة وخدماتها.
                    </p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`border rounded-2xl overflow-hidden transition-all duration-300 animate-fade-in-up ${openIndex === i
                                ? 'border-[var(--color-primary)] bg-[var(--color-secondary-dark)] shadow-[var(--shadow-card)]'
                                : 'border-[var(--color-border-light)] glass-card hover:border-[var(--color-primary-light)] text-white'
                                }`}
                            style={{ animationDelay: `${0.1 + i * 0.06}s` }}
                        >
                            <button
                                id={`faq-${i}`}
                                onClick={() => toggle(i)}
                                aria-expanded={openIndex === i}
                                aria-controls={`faq-answer-${i}`}
                                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-right min-h-[56px]"
                            >
                                <span className={`font-semibold  text-sm md:text-[15px] leading-relaxed ${openIndex === i ? 'text-[var(--color-primary-light)]' : 'text-[#EAE6E1]'}`}>
                                    {faq.q}
                                </span>
                                <span
                                    className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 text-sm ${openIndex === i
                                        ? 'bg-[var(--color-accent)] text-white rotate-45'
                                        : 'bg-[var(--color-primary-light)] text-[var(--color-secondary)]'
                                        }`}
                                >
                                    +
                                </span>
                            </button>
                            <div
                                id={`faq-answer-${i}`}
                                role="region"
                                aria-labelledby={`faq-${i}`}
                                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <p className="px-5 pb-5 md:px-6 md:pb-6 text-[var(--color-text-light)] text-sm leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
