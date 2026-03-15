import Image from 'next/image';
import { ScrollReveal } from '@/shared/components/ui/ScrollReveal';

/**
 * AboutSection — "من أنا؟" section.
 * Extracted from the homepage for modularity and reusability.
 */
export const AboutSection = () => (
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
