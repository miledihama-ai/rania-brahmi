'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ScrollReveal } from '@/shared/components/ui/ScrollReveal';

const bioText = `أريد أن أكون صادقة معكِ… وصادقة مع نفسي.

مررتُ بفترة من التخبّط.
كنت فيها متلخبطه، قلقة، ومش عارفة الطريق الصحيح.
كنت نحاول نلقى نفسي

كنت أبذل جهداً كبيراً في عملي اليومي،
أسهر، أتعب، أحاول أن أثبت نفسي…
ورغم كل هذا المجهود، النتائج لا تظهر، وكأن كل شيء متوقف في مكانه.

العلاقات الاجتماعية التي كنت أعتقدها داعمة، كانت تثقلني وتستنزف طاقتي.

كنت أشعر أنني لا أعرف نفسي،
وأنني لا أعيش النسخة الحقيقية مني،
وكأن بوصلة حياتي قد ضاعت وسط كل الضغوط والمسؤوليات.

إلى أن جاء يوم توقفت فيه.
توقفت عن الجري وراء كل جديد.
وتوقفت عن محاولة إصلاح نفسي بسرعة.
وسألت نفسي سؤالًا صادقًا:

ماذا لو كان التحول الحقيقي يبدأ من الداخل… لا من الخارج؟

هنا بدأت رحلتي الحقيقية.
لم يكن طريقًا سريعًا.
لكنه كان عميقًا… وصادقًا.

وهكذا تشكلت هذه النسخة مني.
نسخة لا تبحث عن الإبهار،
بل عن التأثير الحقيقي.
لا تتبع الصرعات،
بل تعتمد تقنيات واضحة، عملية، ومجربة.

اليوم، ما أقدمه لكِ ليس كلامًا محفزًا فقط.
بل خلاصة رحلة طويلة من البحث، التجربة، السقوط، والوعي.

تقنيات أعادت تشكيل حياتي من الداخل…
وسأنقلها لكِ خطوة بخطوة،
لتختصري سنوات من التخبط

إذا كنتِ مستعدة أن تختاري نفسك بصدق.
لأنني كنت هناك.
وأعرف كيف يبدو الشعور عندما لا تعرفين من أنتِ حقًا.
وأعرف أيضًا…
كيف يبدو الشعور عندما تعودين إلى نفسك.`;

/**
 * AboutSection — "من أنا؟" section with expandable trainer bio.
 */
export const AboutSection = () => {
    const [expanded, setExpanded] = useState(false);

    const paragraphs = bioText.split('\n\n');

    return (
        <ScrollReveal>
            <section id="about" className="section bg-[var(--color-bg-light)] relative overflow-hidden">
                <div className="watercolor-blob" style={{ width: '350px', height: '350px', top: '5%', left: '-5%', background: 'radial-gradient(circle, rgba(184,142,75,0.1) 0%, transparent 70%)' }} />

                <div className="fluid-container relative z-10">
                    <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 items-start">
                        {/* Image Column */}
                        <div className="flex flex-col gap-6">
                            <div className="relative h-72 md:h-[480px] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-[var(--shadow-warm)]">
                                <Image
                                    src="/images/coach.jpg"
                                    alt="رانيا براهمي"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    loading="lazy"
                                    className="object-cover object-top"
                                />
                                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(51,51,51,0.6) 0%, transparent 40%)' }} />
                                <div className="absolute bottom-6 right-6 text-white">
                                    <p className="text-sm opacity-80">المدربة</p>
                                    <p className="text-2xl font-bold">رانيا براهمي</p>
                                </div>
                            </div>

                            {/* Expandable Bio Below Image */}
                            <div className="relative">
                                {/* Bio card */}
                                <div
                                    className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-700 ease-in-out`}
                                    style={{
                                        maxHeight: expanded ? '2000px' : '0px',
                                        opacity: expanded ? 1 : 0,
                                        paddingTop: expanded ? '1.5rem' : '0',
                                        paddingBottom: expanded ? '1.5rem' : '0',
                                        paddingLeft: '1.5rem',
                                        paddingRight: '1.5rem',
                                    }}
                                >
                                    {/* Decorative gold line */}
                                    <div className="absolute top-0 right-0 w-1 h-full rounded-full" style={{ background: 'linear-gradient(to bottom, var(--color-primary), transparent)' }} />

                                    <div className="space-y-4 text-right" dir="rtl">
                                        {paragraphs.map((para, idx) => (
                                            <p
                                                key={idx}
                                                className="text-[var(--color-text-light)] leading-relaxed text-sm md:text-base whitespace-pre-line"
                                            >
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* Toggle Button */}
                                <button
                                    onClick={() => setExpanded((prev) => !prev)}
                                    className="group mt-4 flex items-center gap-3 text-sm font-bold transition-all duration-300 w-full justify-center"
                                    style={{ color: 'var(--color-primary-light)' }}
                                    id="about-bio-toggle"
                                    aria-expanded={expanded}
                                >
                                    <span className="relative">
                                        {expanded ? 'إخفاء التفاصيل' : 'المزيد عن المدربة'}
                                        <span
                                            className="absolute -bottom-0.5 right-0 h-px bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"
                                            style={{ width: expanded ? '100%' : '0%' }}
                                        />
                                    </span>
                                    <span
                                        className="flex items-center justify-center w-7 h-7 rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 transition-transform duration-500"
                                        style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Content Column */}
                        <ScrollReveal delay={0.15}>
                            <div className="space-y-5 md:space-y-6">
                                <span className="inline-block bg-[var(--color-primary)] text-black px-4 py-1.5 rounded-full text-sm font-bold">
                                    من أنا؟
                                </span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-text)] leading-tight">
                                    أنا رانيا براهمي
                                </h2>
                                <p className="text-[var(--color-text-light)] leading-relaxed text-sm md:text-base">
                                    مدربة وعي، تفعيل طاقة الأنوثة، وبناء الثقة بالنفس وتفعيل الوفرة. أساعدك على التحرر من البرمجة القديمة وبناء حياة تشعرين فيها بالقيمة والاستحقاق.
                                </p>
                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    {[
                                        'مدربة وعي',
                                        'تفعيل طاقة الأنوثة',
                                        'بناء الثقة بالنفس',
                                        'تفعيل الوفرة',
                                    ].map((badge) => (
                                        <span
                                            key={badge}
                                            className="bg-[var(--color-primary)] text-black px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-bold"
                                        >
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </ScrollReveal>
    );
};
