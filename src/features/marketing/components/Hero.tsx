import Link from 'next/link';
import Image from 'next/image';
import { RevealText } from '@/shared/components/ui/RevealText';
import { Magnetic } from '@/shared/components/ui/Magnetic';

export const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[var(--color-bg)] pt-20">
            {/* Very subtle noise texture is handled by body::after globally, but we can add a subtle vignette here */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)] opacity-80 pointer-events-none z-10" />

            {/* Faint gold bloom from top corner */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-[var(--color-primary-dark)] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none" />

            <div className="fluid-container relative z-20 w-full">
                <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Text content */}
                    <div className="space-y-10 order-2 lg:order-1 flex flex-col justify-center max-w-2xl">

                        {/* Elite Badge */}
                        <div className="inline-flex items-center gap-3 backdrop-blur-md bg-white/5 border border-white/10 px-5 py-2 rounded-full text-xs font-medium tracking-widest text-[var(--color-primary-light)] animate-fade-in-up stagger-1 w-max">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse shadow-[0_0_10px_var(--color-primary)]" />
                            رحلة التحرر والتحوّل
                        </div>

                        {/* High-Impact Heading */}
                        <div className="flex flex-col gap-6" style={{ fontFamily: "var(--font-amiri), serif" }}>
                            <h1 className="font-bold tracking-tight text-[#EAE6E1] text-balance leading-[1.2] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                                أساعدكِ على كسر الهوية القديمة
                                <span className="block text-[var(--color-text-light)] mt-2 font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                                    التي قَبِلت بالقليل،
                                </span>
                                <span className="text-[var(--color-primary-light)] leading-normal inline-block mt-4 font-bold">
                                    وبناء أفضل نسخة من نفسك.
                                </span>
                            </h1>

                            {/* Staggered Reveal Paragraphs */}
                            <div className="space-y-4 max-w-xl">
                                <RevealText
                                    text="هذا ليس كلامًا محفزًا يرفعك لحظة… بل تحوّل جذري يعيد برمجة اختياراتك، معاييرك، وعلاقاتك."
                                    className="text-[#C0C0C0] text-lg md:text-xl lg:text-2xl font-light leading-relaxed"
                                    delay={0.4}
                                />
                                <RevealText
                                    text="أرافقكِ في رحلة عميقة للتحرر من أنماط الألم، ومن البرمجة التي جعلتك تشككين في استحقاقك."
                                    className="text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed"
                                    delay={0.8}
                                />
                            </div>
                        </div>

                        {/* CTA Group */}
                        <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up stagger-5 pt-4">
                            <Link href="/booking" id="hero-cta-primary" className="btn-cta w-full sm:w-auto text-center group">
                                ابدأي رحلتك الآن
                                <span className="inline-block transition-transform group-hover:-translate-x-2 mr-3 font-semibold">←</span>
                            </Link>

                            <Link href="/#programs" className="btn-outline w-full sm:w-auto text-center backdrop-blur-sm bg-black/20">
                                استكشفي البرامج
                            </Link>
                        </div>
                    </div>

                    {/* Minimalist Premium Image Presentation */}
                    <div className="relative order-1 lg:order-2 w-full max-w-sm mx-auto lg:max-w-none group animate-scale-in stagger-3 pb-8 lg:pb-0">
                        <div
                            className="relative rounded-t-full rounded-b-[3rem] overflow-hidden shadow-[var(--shadow-card)] glass-luxury p-2 transition-transform duration-700 hover:scale-[1.02]"
                            style={{ aspectRatio: '3/4' }}
                        >
                            <div className="relative w-full h-full rounded-t-full rounded-b-[2.5rem] overflow-hidden border border-white/5 grayscale saturate-50 contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:saturate-100">
                                <Image
                                    src="/images/coach.jpg"
                                    alt="Rania Brahmi"
                                    fill
                                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 50vw"
                                    className="object-cover object-top scale-105 transition-transform duration-1000 group-hover:scale-110"
                                    priority
                                />
                                {/* Sophisticated Inner Shadow / Vignette */}
                                <div className="absolute inset-0 shadow-[inset_0_-100px_100px_-20px_#030303]" />
                            </div>
                        </div>

                        {/* Elegant floating stats */}
                        <div className="absolute -bottom-6 lg:bottom-10 left-1/2 lg:-left-12 -translate-x-1/2 lg:translate-x-0 glass-luxury rounded-2xl p-6 shadow-2xl animate-float min-w-[200px] text-center border-white/20">
                            <p className="text-[var(--color-primary-light)] text-3xl font-light mb-1 font-serif">+500</p>
                            <p className="text-[var(--color-text-muted)] text-xs tracking-widest uppercase font-semibold">عميلة مُتحوِّلة</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
