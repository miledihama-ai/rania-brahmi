import { Hero } from '@/components/blocks/Hero';
import { ValueLadder } from '@/components/blocks/ValueLadder';
import { SocialProof } from '@/components/blocks/SocialProof';
import { Services } from '@/components/blocks/Services';
import { FAQ } from '@/components/blocks/FAQ';
import { BookingEngine } from '@/components/blocks/BookingEngine';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import Image from 'next/image';

export default function HomePage() {
    return (
        <>
            <Hero />

            <ScrollReveal>
                <ValueLadder />
            </ScrollReveal>

            <ScrollReveal>
                <Services />
            </ScrollReveal>

            <ScrollReveal>
                <SocialProof />
            </ScrollReveal>

            {/* Booking CTA section */}
            <ScrollReveal>
                <section id="booking-cta" className="section bg-[var(--color-bg-warm)] relative overflow-hidden">
                    <div className="watercolor-blob" style={{ width: '300px', height: '300px', top: '-10%', right: '-5%', background: 'radial-gradient(circle, rgba(220,174,150,0.12) 0%, transparent 70%)' }} />
                    <div className="fluid-container relative z-10">
                        <div className="text-center mb-10 md:mb-12">
                            <span className="inline-block bg-[var(--color-primary-light)] text-[var(--color-secondary)] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                                الخطوة التالية
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-4">
                                احجزي جلستك الآن
                            </h2>
                            <p className="text-[var(--color-text-muted)] text-base md:text-lg max-w-lg mx-auto">
                                الخطوة الأولى نحو التحول تبدأ بقرار واحد. خذي قرارك الآن.
                            </p>
                        </div>
                        <BookingEngine />
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <FAQ />
            </ScrollReveal>

            {/* ─── من أنا؟ ─── */}
            <ScrollReveal>
                <section id="about" className="section bg-[var(--color-bg-light)] relative overflow-hidden">
                    <div className="watercolor-blob" style={{ width: '350px', height: '350px', top: '5%', left: '-5%', background: 'radial-gradient(circle, rgba(184,142,75,0.1) 0%, transparent 70%)' }} />

                    <div className="fluid-container relative z-10">
                        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                            {/* Image */}
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

                            {/* Content */}
                            <ScrollReveal delay={0.15}>
                                <div className="space-y-5 md:space-y-6">
                                    <span className="inline-block bg-[var(--color-primary-light)] text-[var(--color-secondary)] px-4 py-1.5 rounded-full text-sm font-medium">
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
                                                className="bg-[var(--color-primary-light)] text-[var(--color-secondary)] px-3 md:px-4 py-2 rounded-full text-xs md:text-sm border border-[var(--color-primary)]"
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

            {/* ─── قصتي ─── */}
            <ScrollReveal>
                <section className="section bg-[var(--color-bg)] relative overflow-hidden">
                    <div className="watercolor-blob" style={{ width: '400px', height: '400px', bottom: '0%', right: '-8%', background: 'radial-gradient(circle, rgba(220,174,150,0.1) 0%, transparent 70%)' }} />

                    <div className="fluid-container relative z-10 max-w-3xl">
                        <div className="text-center mb-10 md:mb-12">
                            <span className="inline-block bg-[var(--color-primary-light)] text-[var(--color-secondary)] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                                قصتي
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
                                أريد أن أكون صادقة معكِ…
                            </h2>
                        </div>

                        <div className="space-y-6 text-[var(--color-text-light)] text-sm md:text-base leading-relaxed md:leading-loose">
                            <ScrollReveal delay={0.05}><p>أريد أن أكون صادقة معكِ… وصادقة مع نفسي.</p></ScrollReveal>
                            <ScrollReveal delay={0.1}><p>مررتُ بفترة من التخبّط. كنت فيها متلخبطة، قلقة، ومش عارفة الطريق الصحيح. كنت نحاول نلقى نفسي.</p></ScrollReveal>
                            <ScrollReveal delay={0.15}><p>كنت أبذل جهداً كبيراً في عملي اليومي — أسهر، أتعب، أحاول أن أثبت نفسي… ورغم كل هذا المجهود، النتائج لا تظهر، وكأن كل شيء متوقف في مكانه.</p></ScrollReveal>
                            <ScrollReveal delay={0.2}><p>العلاقات الاجتماعية التي كنت أعتقدها داعمة، كانت تثقلني وتستنزف طاقتي. كنت أشعر أنني لا أعرف نفسي، وأنني لا أعيش النسخة الحقيقية مني، وكأن بوصلة حياتي قد ضاعت وسط كل الضغوط والمسؤوليات.</p></ScrollReveal>

                            {/* Turning point */}
                            <ScrollReveal delay={0.25}>
                                <div className="glass-card p-5 md:p-6 my-4 border-r-4 !border-r-[var(--color-accent)] !rounded-r-none">
                                    <p className="text-[var(--color-text)] font-semibold mb-2">إلى أن جاء يوم توقفت فيه.</p>
                                    <p className="text-[var(--color-text-light)]">توقفت عن الجري وراء كل جديد. وتوقفت عن محاولة إصلاح نفسي بسرعة. وسألت نفسي سؤالًا صادقًا:</p>
                                    <p className="text-[var(--color-accent)] font-bold text-base md:text-lg mt-3">&ldquo;ماذا لو كان التحول الحقيقي يبدأ من الداخل… لا من الخارج؟&rdquo;</p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.1}><p>هنا بدأت رحلتي الحقيقية. لم يكن طريقًا سريعًا. لكنه كان عميقًا… وصادقًا. وهكذا تشكلت هذه النسخة مني.</p></ScrollReveal>
                            <ScrollReveal delay={0.15}><p>نسخة لا تبحث عن الإبهار، بل عن التأثير الحقيقي. لا تتبع الصرعات، بل تعتمد تقنيات واضحة، عملية، ومجربة.</p></ScrollReveal>
                            <ScrollReveal delay={0.2}><p className="font-semibold text-[var(--color-text)]">اليوم، ما أقدمه لكِ ليس كلامًا محفزًا فقط. بل خلاصة رحلة طويلة من البحث، التجربة، السقوط، والوعي.</p></ScrollReveal>
                            <ScrollReveal delay={0.25}><p>تقنيات أعادت تشكيل حياتي من الداخل… وسأنقلها لكِ خطوة بخطوة، لتختصري سنوات من التخبط.</p></ScrollReveal>

                            {/* Closing */}
                            <ScrollReveal delay={0.3}>
                                <div className="bg-[var(--color-secondary)] text-white rounded-2xl p-6 md:p-8 text-center mt-6">
                                    <p className="text-base md:text-lg mb-3 opacity-90">إذا كنتِ مستعدة أن تختاري نفسك بصدق…</p>
                                    <p className="text-sm opacity-70 mb-2">لأنني كنت هناك. وأعرف كيف يبدو الشعور عندما لا تعرفين من أنتِ حقًا.</p>
                                    <p className="text-[var(--color-accent-light)] font-bold text-base md:text-lg">وأعرف أيضًا… كيف يبدو الشعور عندما تعودين إلى نفسك. ✦</p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </>
    );
}
