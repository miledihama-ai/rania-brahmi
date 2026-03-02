'use client';

const testimonials = [
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

const trustBadges = [
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
                        className="bg-white rounded-2xl p-5 md:p-6 shadow-[var(--shadow-card)] border border-[var(--color-border-light)] hover:shadow-[var(--shadow-warm)] transition-shadow duration-300 animate-fade-in-up"
                        style={{ animationDelay: `${0.15 + i * 0.1}s` }}
                    >
                        {/* Stars */}
                        <div className="flex gap-1 mb-3">
                            {Array.from({ length: t.stars }).map((_, si) => (
                                <span key={si} className="text-[var(--color-accent)] text-sm">★</span>
                            ))}
                        </div>

                        <p className="text-[var(--color-text-light)] text-sm leading-relaxed mb-4">{t.text}</p>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white font-bold text-sm">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-semibold text-[var(--color-text)] text-sm">{t.name}</p>
                                <p className="text-xs text-[var(--color-text-muted)]">{t.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
