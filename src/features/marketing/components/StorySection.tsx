import { ScrollReveal } from '@/shared/components/ui/ScrollReveal';

/**
 * StorySection — "قصتي" section.
 * Extracted from the homepage for modularity and reusability.
 */
export const StorySection = () => (
    <ScrollReveal>
        <section className="section bg-[var(--color-bg)] relative overflow-hidden">
            <div className="watercolor-blob" style={{ width: '400px', height: '400px', bottom: '0%', right: '-8%', background: 'radial-gradient(circle, rgba(220,174,150,0.1) 0%, transparent 70%)' }} />

            <div className="fluid-container relative z-10 max-w-3xl">
                <div className="text-center mb-10 md:mb-12">
                    <span className="inline-block bg-[var(--color-primary)] text-black px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                        قصتي
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
                        أريد أن أكون صادقة معكِ…
                    </h2>
                </div>

                <div className="space-y-6 text-[var(--color-text-light)] text-sm md:text-base leading-relaxed">
                    <ScrollReveal delay={0.05}><p>أريد أن أكون صادقة معكِ… وصادقة مع نفسي.</p></ScrollReveal>
                    <ScrollReveal delay={0.1}><p>مررتُ بفترة من التخبّط. كنت فيها متلخبطة، قلقة، ومش عارفة الطريق الصحيح. كنت نحاول نلقى نفسي.</p></ScrollReveal>
                    <ScrollReveal delay={0.15}><p>كنت أبذل جهداً كبيراً في عملي اليومي — أسهر، أتعب، أحاول أن أثبت نفسي… ورغم كل هذا المجهود، النتائج لا تظهر، وكأن كل شيء متوقف في مكانه.</p></ScrollReveal>
                    <ScrollReveal delay={0.2}><p>العلاقات الاجتماعية التي كنت أعتقدها داعمة، كانت تثقلني وتستنزف طاقتي. كنت أشعر أنني لا أعرف نفسي، وأنني لا أعيش النسخة الحقيقية مني، وكأن بوصلة حياتي قد ضاعت وسط كل الضغوط والمسؤوليات.</p></ScrollReveal>

                    {/* Turning point */}
                    <ScrollReveal delay={0.25}>
                        <div className="glass-card p-5 md:p-6 my-4 border-r-4 !border-r-[var(--color-accent)] !rounded-r-none">
                            <p className="text-[var(--color-primary-light)] font-semibold mb-2">إلى أن جاء يوم توقفت فيه.</p>
                            <p className="text-[#C0C0C0]">توقفت عن الجري وراء كل جديد. وتوقفت عن محاولة إصلاح نفسي بسرعة. وسألت نفسي سؤالًا صادقًا:</p>
                            <p className="text-[var(--color-accent)] font-bold text-base md:text-lg mt-3">&ldquo;ماذا لو كان التحول الحقيقي يبدأ من الداخل… لا من الخارج؟&rdquo;</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}><p>هنا بدأت رحلتي الحقيقية. لم يكن طريقًا سريعًا. لكنه كان عميقًا… وصادقًا. وهكذا تشكلت هذه النسخة مني.</p></ScrollReveal>
                    <ScrollReveal delay={0.15}><p>نسخة لا تبحث عن الإبهار، بل عن التأثير الحقيقي. لا تتبع الصرعات، بل تعتمد تقنيات واضحة، عملية، ومجربة.</p></ScrollReveal>
                    <ScrollReveal delay={0.2}><p className="font-semibold text-[var(--color-text)]">اليوم، ما أقدمه لكِ ليس كلامًا محفزًا فقط. بل خلاصة رحلة طويلة من البحث، التجربة، السقوط، والوعي.</p></ScrollReveal>
                    <ScrollReveal delay={0.25}><p>تقنيات أعادت تشكيل حياتي من الداخل… وسأنقلها لكِ خطوة بخطوة، لتختصري سنوات من التخبط.</p></ScrollReveal>

                    {/* Closing */}
                    <ScrollReveal delay={0.3}>
                        <div className="glass-card border border-[var(--color-border-light)] text-white rounded-2xl p-6 md:p-8 text-center mt-6 relative overflow-hidden">
                            {/* Subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--color-secondary-dark)] opacity-30 pointer-events-none" />

                            <div className="relative z-10">
                                <p className="text-base md:text-lg mb-3 opacity-90">إذا كنتِ مستعدة أن تختاري نفسك بصدق…</p>
                                <p className="text-sm opacity-70 mb-2">لأنني كنت هناك. وأعرف كيف يبدو الشعور عندما لا تعرفين من أنتِ حقًا.</p>
                                <p className="text-[var(--color-primary)] font-bold text-base md:text-lg mt-4">وأعرف أيضًا… كيف يبدو الشعور عندما تعودين إلى نفسك. ✦</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    </ScrollReveal>
);
