import Link from 'next/link';
import Image from 'next/image';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-bg)]">
            {/* Animated gradient background */}
            <div className="absolute inset-0 animated-gradient-bg" />

            {/* Watercolor blobs */}
            <div
                className="watercolor-blob"
                style={{
                    width: '500px', height: '500px',
                    top: '-15%', right: '-10%',
                    background: 'radial-gradient(circle, rgba(220,174,150,0.2) 0%, transparent 70%)',
                }}
            />
            <div
                className="watercolor-blob"
                style={{
                    width: '400px', height: '400px',
                    bottom: '-10%', left: '-5%',
                    background: 'radial-gradient(circle, rgba(184,142,75,0.15) 0%, transparent 70%)',
                    animationDelay: '4s',
                }}
            />

            <div className="fluid-container relative z-10 pt-24 pb-16 md:pt-28 md:pb-20">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Text content */}
                    <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-[var(--color-primary-light)] text-[var(--color-secondary)] px-4 py-1.5 rounded-full text-sm font-medium animate-fade-in-up stagger-1">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse-soft" />
                            رحلة التحرر والتحوّل
                        </div>

                        {/* Main heading */}
                        <div className="flex flex-col gap-5 md:gap-7" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>
                            <h1 className="font-extrabold text-[var(--color-text)] animate-fade-in-up stagger-2 text-balance" style={{ fontSize: 'clamp(32px, 5.5vw, 52px)', lineHeight: '1.4' }}>
                                أساعدكِ على كسر الهوية القديمة<br />
                                التي قَبِلت بالقليل،<br />
                                <span className="text-gradient-warm leading-normal inline-block mt-2">وبناء أفضل نسخة من نفسك</span>
                            </h1>
                            <p className="text-[var(--color-text-light)] max-w-xl animate-fade-in-up stagger-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                                هذا ليس كلامًا محفزًا يرفعك لحظة… بل تحوّل جذري يعيد برمجة اختياراتك، معاييرك، وعلاقاتك.
                            </p>
                            <p className="text-[var(--color-text-muted)] max-w-xl animate-fade-in-up stagger-4" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                                أرافقكِ في رحلة عميقة للتحرر من أنماط الألم، من العلاقات التي تستنزفك، ومن البرمجة التي جعلتك تشككين في استحقاقك.
                            </p>
                        </div>

                        {/* Empowerment line */}
                        <p className="text-[var(--color-accent)] font-bold text-base md:text-lg animate-fade-in-up stagger-4 mt-6">
                            لأنكِ تستحقين أكثر — ثقة. وفرة. حب ناضج. حياة تليق بكِ ✦
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-5 mt-2">
                            <Link href="/booking" id="hero-cta-primary" className="btn-cta w-full sm:w-auto text-center group">
                                ابدأي رحلتك الآن <span className="transition-transform group-hover:-translate-x-1">←</span>
                            </Link>
                            <Link href="/#programs" className="btn-outline w-full sm:w-auto text-center">
                                استكشفي البرامج
                            </Link>
                        </div>

                        <p className="text-xs text-[var(--color-text-muted)] animate-fade-in-up stagger-6">
                            ✦ مساحتك آمنة وخاصة ومحاطة بالسرية التامة
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 md:gap-6 pt-4 border-t border-[var(--color-border)] animate-fade-in stagger-7">
                            {[
                                { value: '+500', label: 'عميلة مُتحوِّلة' },
                                { value: '9', label: 'أشهر برامج ممتدة' },
                                { value: '100%', label: 'سرية تامة' },
                            ].map(({ value, label }) => (
                                <div key={label} className="text-center">
                                    <div className="text-xl md:text-2xl font-bold text-[var(--color-accent)]">{value}</div>
                                    <div className="text-[10px] md:text-xs text-[var(--color-text-muted)] mt-1">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Coach image card */}
                    <div className="relative animate-scale-in stagger-3 order-1 lg:order-2 w-full max-w-xs sm:max-w-sm mx-auto lg:max-w-none group">
                        {/* Decorative rings */}
                        <div className="absolute inset-0 rounded-[2rem] lg:rounded-[2.5rem] border-[1.5px] border-[var(--color-primary)] scale-105 opacity-50 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-30" />
                        <div className="absolute inset-0 rounded-[2rem] lg:rounded-[2.5rem] border-[1.5px] border-[var(--color-primary-light)] scale-[1.12] opacity-30 transition-transform duration-700 group-hover:scale-[1.18] group-hover:opacity-10" />

                        <div
                            className="relative rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-[var(--shadow-warm)] transition-transform duration-500 group-hover:-translate-y-2"
                            style={{ aspectRatio: '3/4' }}
                        >
                            <Image
                                src="/images/coach.jpg"
                                alt="Rania Brahmi"
                                fill
                                sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 50vw"
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            {/* Gradient overlay */}
                            <div
                                className="absolute inset-0 flex items-end transition-opacity duration-500"
                                style={{
                                    background: 'linear-gradient(to top, rgba(45, 58, 48, 0.95) 0%, rgba(45, 58, 48, 0.4) 30%, transparent 60%)',
                                }}
                            >
                                <div className="p-7 lg:p-10 text-white w-full">
                                    <p className="text-xs font-semibold tracking-wider opacity-80 mb-2 uppercase">المدربة</p>
                                    <p className="text-3xl lg:text-4xl font-bold mb-1">Rania Brahmi</p>
                                    <p className="text-sm font-medium opacity-90">مختصة في التطوير الشخصي والتشافي</p>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <div className="absolute top-5 left-5 lg:top-7 lg:left-7 glass rounded-2xl px-4 py-3 lg:px-5 lg:py-4 shadow-lg animate-float">
                                <p className="text-[10px] lg:text-xs text-[var(--color-accent)] font-bold tracking-wide mb-0.5">✦ مساحة آمنة</p>
                                <p className="text-sm lg:text-lg font-extrabold text-[var(--color-text)]">100% سرية</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator — hidden on mobile */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-float">
                <span className="text-xs text-[var(--color-text-muted)]">اكتشفي أكثر</span>
                <div className="w-0.5 h-8 bg-gradient-to-b from-[var(--color-primary)] to-transparent rounded-full" />
            </div>
        </section>
    );
};
