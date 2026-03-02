'use client';

import { useState } from 'react';

const faqs = [
    {
        q: 'ما الفرق بين Shadow Work والعلاج النفسي؟',
        a: 'أعمال الظل هي ممارسة تطويرية وتأملية تهدف إلى الوعي الذاتي وتحويل الأنماط اللاواعية. هي ليست علاجاً نفسياً سريرياً ولا تُغني عنه.',
    },
    {
        q: 'هل جلساتي سرية بالكامل؟',
        a: 'نعم. جميع الجلسات والملاحظات مشفرة بتشفير من الطرف إلى الطرف (End-to-End Encryption). لا يمكن لأي طرف ثالث الوصول إلى محتوى جلساتك.',
    },
    {
        q: 'كيف يعمل نظام الحجز مع المناطق الزمنية المختلفة؟',
        a: 'يتعرف النظام تلقائياً على منطقتك الزمنية ويعرض المواعيد المتاحة بتوقيتك المحلي.',
    },
    {
        q: 'ما طرق الدفع المتاحة؟',
        a: 'ندعم عدة طرق للدفع تشمل التحويل البنكي والبطاقات البنكية. جميع الأسعار معروضة بالدينار التونسي (د.ت) بوضوح.',
    },
    {
        q: 'ما الفرق بين مسارات الاستشارة (فيديو، صوت، واتساب)؟',
        a: 'الفيديو: جلسة وجهاً لوجه، الأعمق. الصوت: مثالي لمن يفضلن الخصوصية. واتساب: نصي/صوتي مرن، مناسب للأجداول المزدحمة.',
    },
    {
        q: 'هل يمكنني إلغاء الحجز أو إعادة الجدولة؟',
        a: 'نعم. يمكن إلغاء الحجز وإعادة الجدولة قبل 24 ساعة من موعد الجلسة مجاناً.',
    },
];

export const FAQ = () => {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="section bg-[var(--color-bg-light)]">
            <div className="fluid-container max-w-3xl">
                <div className="text-center mb-10 md:mb-12">
                    <span className="inline-block bg-[var(--color-primary-light)] text-[var(--color-secondary)] px-4 py-1.5 rounded-full text-sm font-medium mb-4 animate-fade-in-up">
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
                            className={`border rounded-2xl overflow-hidden transition-all duration-300 animate-fade-in-up ${open === i
                                    ? 'border-[var(--color-primary)] bg-white shadow-[var(--shadow-card)]'
                                    : 'border-[var(--color-border-light)] bg-white hover:border-[var(--color-primary-light)]'
                                }`}
                            style={{ animationDelay: `${0.1 + i * 0.06}s` }}
                        >
                            <button
                                id={`faq-${i}`}
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-right min-h-[56px]"
                            >
                                <span className="font-semibold text-[var(--color-text)] text-sm md:text-[15px] leading-relaxed">
                                    {faq.q}
                                </span>
                                <span
                                    className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 text-sm ${open === i
                                            ? 'bg-[var(--color-accent)] text-white rotate-45'
                                            : 'bg-[var(--color-primary-light)] text-[var(--color-secondary)]'
                                        }`}
                                >
                                    +
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="px-5 pb-5 md:px-6 md:pb-6 text-[var(--color-text-light)] text-sm leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
