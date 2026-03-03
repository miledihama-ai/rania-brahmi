import Link from 'next/link';

/** Price structure for paid tiers (null for free). */
interface TierPrice {
    from: number;
    currency: string;
    note: string;
}

/** Visual variant controlling card appearance. */
type TierVariant = 'outline' | 'primary' | 'accent';

/** A pricing tier in the value ladder. */
interface PricingTier {
    tag: string;
    icon: string;
    title: string;
    description: string;
    price: TierPrice | null;
    features: string[];
    cta: string;
    href: string;
    variant: TierVariant;
}

const tiers: PricingTier[] = [
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
                        className={`relative rounded-[1.5rem] md:rounded-[2rem] p-7 md:p-10 flex flex-col transition-all duration-500 hover:-translate-y-2 animate-fade-in-up group overflow-hidden ${tier.variant === 'primary'
                            ? 'bg-gradient-to-b from-[var(--color-text)] to-[#1a1a1a] text-white shadow-[var(--shadow-warm)] border border-white/10'
                            : 'glass-card'
                            }`}
                        style={{ animationDelay: `${0.1 + i * 0.12}s` }}
                    >
                        {/* Decorative glow for primary card */}
                        {tier.variant === 'primary' && (
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--color-accent)] rounded-full blur-[80px] opacity-30 pointer-events-none transition-opacity duration-500 group-hover:opacity-50" />
                        )}

                        {/* Tag */}
                        <span
                            className={`absolute top-6 left-6 text-xs font-bold px-4 py-1.5 rounded-full tracking-wide shadow-sm ${tier.variant === 'primary'
                                ? 'bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] text-white'
                                : 'bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-bg)] text-[var(--color-secondary-dark)] border border-white/60'
                                }`}
                        >
                            {tier.tag}
                        </span>

                        <div className="text-4xl md:text-5xl mb-5 mt-4 transition-transform duration-500 group-hover:scale-110 origin-right">{tier.icon}</div>
                        <h3 className={`text-2xl md:text-3xl font-extrabold mb-3 tracking-tight ${tier.variant === 'primary' ? 'text-white' : 'text-[var(--color-text)]'}`}>
                            {tier.title}
                        </h3>
                        <p className={`text-sm md:text-base leading-relaxed mb-8 ${tier.variant === 'primary' ? 'text-white/80' : 'text-[var(--color-text-light)]'}`}>
                            {tier.description}
                        </p>

                        {/* Price */}
                        {tier.price ? (
                            <div className="mb-8">
                                <span className={`text-xs font-medium uppercase tracking-wider ${tier.variant === 'primary' ? 'text-[var(--color-accent-light)]' : 'text-[var(--color-text-muted)]'}`}>يبدأ من</span>
                                <div className="flex items-baseline gap-2 mt-1">
                                    <span className={`text-4xl md:text-5xl font-black tracking-tighter ${tier.variant === 'primary' ? 'text-white' : 'text-[var(--color-secondary-dark)]'}`}>
                                        {tier.price.from}
                                    </span>
                                    <span className={`text-lg font-bold ${tier.variant === 'primary' ? 'text-[var(--color-accent-light)]' : 'text-[var(--color-accent-dark)]'}`}>
                                        {tier.price.currency}
                                    </span>
                                </div>
                                <p className={`text-xs mt-2 font-medium opacity-80 ${tier.variant === 'primary' ? 'text-white/60' : 'text-[var(--color-text-muted)]'}`}>
                                    {tier.price.note}
                                </p>
                            </div>
                        ) : (
                            <div className="mb-8 flex items-end h-[72px]">
                                <span className="text-4xl md:text-5xl font-black text-gradient-warm tracking-tighter">مجاني</span>
                            </div>
                        )}

                        {/* Divider */}
                        <div className={`w-full h-px mb-8 ${tier.variant === 'primary' ? 'bg-white/10' : 'bg-[var(--color-border)]'}`} />

                        {/* Features */}
                        <ul className="space-y-4 mb-10 flex-1">
                            {tier.features.map((f) => (
                                <li key={f} className="flex items-start gap-4 text-sm md:text-base group/item">
                                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5 transition-transform group-hover/item:scale-110 shadow-sm ${tier.variant === 'primary'
                                        ? 'bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] text-white'
                                        : 'bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-primary)] text-[var(--color-secondary-dark)]'
                                        }`}>
                                        ✓
                                    </span>
                                    <span className={`font-medium leading-tight pt-0.5 ${tier.variant === 'primary' ? 'text-white/90' : 'text-[var(--color-text)]'}`}>
                                        {f}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href={tier.href}
                            className={`w-full text-center py-4 rounded-full font-bold transition-all duration-400 text-[15px] min-h-[56px] flex items-center justify-center gap-2 group/btn ${tier.variant === 'primary'
                                ? 'bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] hover:from-[var(--color-accent-light)] hover:to-[var(--color-accent)] text-white shadow-[0_8px_20px_rgba(184,142,75,0.4)] hover:shadow-[0_12px_25px_rgba(184,142,75,0.6)] hover:-translate-y-1'
                                : tier.variant === 'accent'
                                    ? 'bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white shadow-[var(--shadow-soft)] hover:-translate-y-1'
                                    : 'bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-secondary-dark)] hover:bg-[var(--color-primary-light)] hover:border-transparent'
                                }`}
                        >
                            {tier.cta}
                            <span className="transition-transform duration-300 group-hover/btn:-translate-x-1">←</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
