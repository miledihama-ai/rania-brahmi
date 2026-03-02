import Link from 'next/link';

const tiers = [
    {
        tag: 'مجاني',
        icon: '🌱',
        title: 'المحتوى المفتوح',
        description: 'محتوى تعليمي مجاني يساعدك على فهم رحلة الوعي الداخلي وأعمال الظل.',
        price: null,
        features: [
            'مقاطع فيديو تعليمية مجانية',
            'مقالات ونصوص عمق',
            'نشرة بريدية أسبوعية',
            'مجتمع المتعلمين',
        ],
        cta: 'استكشفي المحتوى',
        href: '/#lms',
        variant: 'outline' as const,
    },
    {
        tag: 'الأكثر طلباً',
        icon: '✦',
        title: 'استشارة فردية',
        description: 'جلسة مع رانيا مباشرة لمعالجة ما تمرين به الآن. مناسبة للحالات الطارئة.',
        price: { from: 60, currency: 'د.ت', note: 'للجلسة الواحدة' },
        features: [
            'جلسة فيديو / صوت / واتساب',
            'خطة عمل شخصية بعد الجلسة',
            'سرية تامة ومشفرة',
            'دعم للمناطق الزمنية المختلفة',
        ],
        cta: 'احجزي جلستك',
        href: '/booking',
        variant: 'primary' as const,
    },
    {
        tag: 'عميق ومستدام',
        icon: '🌿',
        title: 'رحلة 9 أشهر',
        description: 'دورة النزيف النفسي لتنظيف الصدمات ممتد لتحويل عميق ومستدام. محتوى فيديو + جلسات دورية + متابعة.',
        price: { from: 1200, currency: 'د.ت', note: 'للبرنامج كاملاً' },
        features: [
            '+40 وحدة تعليمية بالفيديو',
            'جلسات شهرية مع رانيا',
            'مجموعة دعم خاصة',
            'شهادة إتمام البرنامج',
        ],
        cta: 'انضمي لبرنامج الرحلة',
        href: '/booking',
        variant: 'accent' as const,
    },
];

export const ValueLadder = () => (
    <section id="programs" className="section bg-[var(--color-bg-light)] relative overflow-hidden">
        {/* Subtle watercolor bg */}
        <div className="watercolor-blob" style={{ width: '350px', height: '350px', top: '10%', right: '-5%', background: 'radial-gradient(circle, rgba(255,155,155,0.15) 0%, transparent 70%)' }} />

        <div className="fluid-container relative z-10">
            {/* Header */}
            <div className="text-center mb-10 md:mb-14">
                <span className="inline-block bg-[var(--color-primary-light)] text-[var(--color-secondary)] px-4 py-1.5 rounded-full text-sm font-medium mb-4 animate-fade-in-up">
                    السلم القيمي
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-4 animate-fade-in-up stagger-1">
                    رحلتك تبدأ من هنا
                </h2>
                <p className="text-[var(--color-text-muted)] text-base md:text-lg max-w-xl mx-auto animate-fade-in-up stagger-2">
                    اختاري المستوى المناسب لك. كل خطوة مصممة لتحتضنك وتدعم تحولك الداخلي.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {tiers.map((tier, i) => (
                    <div
                        key={tier.title}
                        className={`relative rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 animate-fade-in-up ${tier.variant === 'primary'
                                ? 'bg-[var(--color-text)] text-white shadow-[var(--shadow-warm)]'
                                : 'bg-white border border-[var(--color-border)] shadow-[var(--shadow-card)]'
                            }`}
                        style={{ animationDelay: `${0.1 + i * 0.12}s` }}
                    >
                        {/* Tag */}
                        <span
                            className={`absolute top-5 left-5 text-xs font-semibold px-3 py-1 rounded-full ${tier.variant === 'primary'
                                    ? 'bg-[var(--color-accent)] text-white'
                                    : 'bg-[var(--color-primary-light)] text-[var(--color-secondary)]'
                                }`}
                        >
                            {tier.tag}
                        </span>

                        <div className="text-3xl md:text-4xl mb-4 mt-4">{tier.icon}</div>
                        <h3 className={`text-xl md:text-2xl font-bold mb-3 ${tier.variant === 'primary' ? 'text-white' : 'text-[var(--color-text)]'}`}>
                            {tier.title}
                        </h3>
                        <p className={`text-sm leading-relaxed mb-6 ${tier.variant === 'primary' ? 'text-[var(--color-primary-light)]' : 'text-[var(--color-text-muted)]'}`}>
                            {tier.description}
                        </p>

                        {/* Price */}
                        {tier.price ? (
                            <div className="mb-6">
                                <span className={`text-xs ${tier.variant === 'primary' ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)]'}`}>يبدأ من</span>
                                <div className="flex items-baseline gap-2 mt-1">
                                    <span className={`text-3xl md:text-4xl font-bold ${tier.variant === 'primary' ? 'text-white' : 'text-[var(--color-text)]'}`}>
                                        {tier.price.from}
                                    </span>
                                    <span className={`text-lg ${tier.variant === 'primary' ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)]'}`}>
                                        {tier.price.currency}
                                    </span>
                                </div>
                                <p className={`text-xs mt-1 ${tier.variant === 'primary' ? 'text-[var(--color-text-muted)]' : 'text-[var(--color-text-muted)]'}`}>
                                    {tier.price.note}
                                </p>
                            </div>
                        ) : (
                            <div className="mb-6">
                                <span className="text-3xl md:text-4xl font-bold text-[var(--color-accent)]">مجاني</span>
                            </div>
                        )}

                        {/* Features */}
                        <ul className="space-y-3 mb-8 flex-1">
                            {tier.features.map((f) => (
                                <li key={f} className="flex items-center gap-3 text-sm">
                                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${tier.variant === 'primary'
                                            ? 'bg-[var(--color-accent)] text-white'
                                            : 'bg-[var(--color-primary-light)] text-[var(--color-secondary)]'
                                        }`}>
                                        ✓
                                    </span>
                                    <span className={tier.variant === 'primary' ? 'text-[var(--color-primary-light)]' : 'text-[var(--color-text-light)]'}>
                                        {f}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href={tier.href}
                            className={`w-full text-center py-3 md:py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] text-sm min-h-[48px] flex items-center justify-center ${tier.variant === 'primary'
                                    ? 'bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white shadow-[var(--shadow-glow)]'
                                    : tier.variant === 'accent'
                                        ? 'bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white shadow-[var(--shadow-soft)]'
                                        : 'btn-outline'
                                }`}
                        >
                            {tier.cta}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
