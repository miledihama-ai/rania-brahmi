'use client';

/** A client testimonial with name, location, rating, and review text. */
interface Testimonial {
    name: string;
    location: string;
    stars: number;
    text: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'أمينة بن سعيد',
        location: 'تونس العاصمة',
        stars: 5,
        text: 'رانيا ساعدتني نكتشف حاجات فيّا ما كنتش نتصور أنها موجودة. الجلسات كانت عميقة وآمنة ياسر.',
    },
    {
        name: 'ياسمين الجبالي',
        location: 'سوسة',
        stars: 5,
        text: 'برنامج الـ 9 أشهر غيّرلي حياتي كاملة. فهمت علاقاتي وصرت نتعامل مع روحي بطريقة مختلفة.',
    },
    {
        name: 'سلمى العيادي',
        location: 'صفاقس',
        stars: 5,
        text: 'أول مرة نحس إني في مساحة آمنة بالحق. رانيا عندها قدرة خارقة تخليك تحكي على كل شيء.',
    },
    {
        name: 'مريم بن عمر',
        location: 'نابل',
        stars: 5,
        text: 'الجلسات عبر واتساب كانت مرنة وعملية ياسر. ما حسيتش بفرق على الجلسات المباشرة.',
    },
];

/** A trust badge displaying a metric. */
interface TrustBadge {
    value: string;
    label: string;
}

const trustBadges: TrustBadge[] = [
    { value: '+500', label: 'عميلة' },
    { value: '4.9', label: 'تقييم عالمي' },
    { value: '100%', label: 'سرية' },
];

export const SocialProof = () => (
    <section id="testimonials" className="section bg-[var(--color-bg)] relative overflow-hidden">
        <div className="watercolor-blob" style={{ width: '300px', height: '300px', bottom: '5%', left: '-3%', background: 'radial-gradient(circle, rgba(255,127,80,0.12) 0%, transparent 70%)' }} />

        <div className="fluid-container relative z-10">
            <div className="text-center mb-10 md:mb-14">
                <span className="inline-block bg-[var(--color-primary-light)] text-[var(--color-secondary)] px-4 py-1.5 rounded-full text-sm font-medium mb-4 animate-fade-in-up">
                    شهادات العميلات
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-4 animate-fade-in-up stagger-1">
                    ماذا تقول عميلاتنا
                </h2>
                <p className="text-[var(--color-text-muted)] text-base md:text-lg max-w-xl mx-auto animate-fade-in-up stagger-2">
                    تجارب حقيقية من عميلات مررن برحلة التشافي مع رانيا.
                </p>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-10 md:mb-14 animate-fade-in-up stagger-3">
                {trustBadges.map(({ value, label }) => (
                    <div key={label} className="text-center bg-white rounded-2xl py-4 px-3 shadow-[var(--shadow-card)] border border-[var(--color-border-light)]">
                        <div className="text-xl md:text-2xl font-bold text-[var(--color-accent)]">{value}</div>
                        <div className="text-[10px] md:text-xs text-[var(--color-text-muted)] mt-1">{label}</div>
                    </div>
                ))}
            </div>

            {/* Testimonial grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                {testimonials.map((t, i) => (
                    <div
                        key={t.name}
                        className="glass-card p-6 md:p-8 hover:-translate-y-1 animate-fade-in-up group"
                        style={{ animationDelay: `${0.15 + i * 0.1}s` }}
                    >
                        {/* Quote icon watermark */}
                        <div className="absolute top-4 left-4 text-[var(--color-primary-light)] opacity-20 text-6xl font-serif pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 -scale-x-100">
                            &quot;
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-4 relative z-10">
                            {Array.from({ length: t.stars }).map((_, si) => (
                                <span key={si} className="text-[var(--color-accent)] text-lg w-5 h-5 flex items-center justify-center filter drop-shadow-sm">★</span>
                            ))}
                        </div>

                        <p className="text-[var(--color-text-light)] text-[15px] leading-[1.8] mb-6 relative z-10 flex-1 min-h-[80px]">&quot;{t.text}&quot;</p>

                        <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-[var(--color-border-light)]">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white font-bold text-lg shadow-sm">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-bold text-[var(--color-text)] text-[15px]">{t.name}</p>
                                <p className="text-[13px] text-[var(--color-text-muted)] font-medium mt-0.5">{t.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
