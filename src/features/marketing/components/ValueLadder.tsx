'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { m, useScroll, useTransform, MotionValue } from 'framer-motion';

/** Tier definition */
interface Tier {
    tag: string;
    icon: string;
    title: string;
    desc: string;
    price: string;
    features: string[];
    cta: string;
    href: string;
    target?: string;
}

const tiers: Tier[] = [
    {
        tag: 'الجذور',
        icon: '🌱',
        title: 'استكشاف الجذور',
        desc: 'جلسة استشارية فردية (60 دقيقة) لتفكيك التحديات الحالية، وتحديد العوائق الخفية.',
        price: '$150 / الجلسة',
        features: [
            'تشخيص دقيق للحالة',
            'خطة عمل مبدئية',
            'تسجيل صوتي للجلسة (اختياري)',
        ],
        cta: 'احجزي جلستك',
        href: '/booking',
    },
    {
        tag: 'التحوّل',
        icon: '🦋',
        title: 'برنامج التحوّل العميق',
        desc: 'مرافقة شخصية مكثفة لمدة 3 أشهر، مصممة خصيصًا لكسر الأنماط المعيقة وإحداث نقلة نوعية في جودة حياتك.',
        price: 'باقة 12 جلسة',
        features: [
            'جلسة أسبوعية مباشرة (90 دقيقة)',
            'دعم مستمر عبر التليجرام بين الجلسات',
            'التدريب على أدوات التشافي الذاتي',
            'مراجعة شاملة نهاية كل شهر',
        ],
        cta: 'قدمي طلب انضمام',
        href: '/#contact',
    },
    {
        tag: 'تعلّم ذاتي',
        icon: '✨',
        title: 'ورش العمل والدورات',
        desc: 'محتوى مسجل ومكثف لتعلم أدوات التشافي، وفهم الديناميكيات النفسية في العلاقات وبناء الاستحقاق.',
        price: 'الأسعار متفاوتة',
        features: [
            'وصول مدى الحياة للمحتوى',
            'ملفات وتطبيقات عملية',
            'مجتمع داعم للمشتركات',
        ],
        cta: 'تصفحي الكنز',
        href: '/courses',
        target: '_blank',
    },
];

const StackCard = ({ tier, i, progress, range, targetScale }: { tier: Tier, i: number, progress: MotionValue<number>, range: [number, number], targetScale: number }) => {
    const containerRef = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);

    // Cards get progressively darker with deeper frosted glass
    const bgClass = i === 0 ? "bg-white/[0.02]" : i === 1 ? "bg-white/[0.04]" : "bg-white/[0.06]";
    const borderClass = i === 1 ? "border-[var(--color-primary-dark)]" : "border-white/10";

    return (
        <div ref={containerRef} className="min-h-[100dvh] flex items-center justify-center sticky top-0" style={{ perspective: 1000 }}>
            <m.div
                style={{ scale, top: `calc(-10dvh + ${i * 40}px)` }}
                className={`relative flex flex-col w-full max-w-[1000px] min-h-[min(500px,80dvh)] h-auto rounded-[2rem] p-8 md:p-12 border shadow-[0_-10px_50px_-10px_rgba(0,0,0,0.8)] origin-top backdrop-blur-3xl ${bgClass} ${borderClass}`}
            >
                <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">{tier.icon}</span>
                        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--color-text)]">
                            {tier.title}
                        </h3>
                    </div>
                    <span className="text-[var(--color-primary-light)] text-sm md:text-base font-medium tracking-widest px-4 py-1.5 rounded-full border border-[var(--color-primary-dark)] bg-[var(--color-primary-dark)]/20">
                        {tier.tag}
                    </span>
                </div>

                <div className="grid md:grid-cols-2 gap-10 h-full">
                    {/* Left: Info */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="text-[var(--color-text-light)] text-lg leading-relaxed mb-6">
                                {tier.desc}
                            </p>
                            <div className="text-[var(--color-accent)] font-bold text-xl md:text-2xl font-serif">
                                {tier.price}
                            </div>
                        </div>

                        <div className="mt-8">
                            <Link
                                href={tier.href}
                                target={tier.target}
                                className={i === 1 ? 'btn-cta w-full' : 'btn-cta bg-[var(--color-primary)] text-black w-full'}
                            >
                                {tier.cta}
                            </Link>
                        </div>
                    </div>

                    {/* Right: Features */}
                    <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
                        <h4 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-6">ماذا يتضمن؟</h4>
                        <ul className="space-y-4">
                            {tier.features.map((feature, idx) => (
                                <li key={idx} className="flex flex-start gap-4 text-[var(--color-text-light)]">
                                    <span className="text-[var(--color-primary)] mt-0.5">✦</span>
                                    <span className="leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </m.div>
        </div>
    );
};

export const ValueLadder = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section id="programs" ref={container} className="relative w-full bg-[var(--color-bg)] pb-32">
            <div className="fluid-container text-center pt-32 pb-16">
                <h2 className="text-4xl md:text-6xl font-extrabold text-[var(--color-text)] mb-6">
                    مستويات <span className="text-gradient-warm">التحوّل</span>
                </h2>
                <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg">
                    اختر المرحلة التي تناسب جاهزيتك للقفزة القادمة
                </p>
            </div>

            <div className="fluid-container">
                {tiers.map((tier, i) => {
                    const targetScale = 1 - ((tiers.length - i) * 0.05);
                    return (
                        <StackCard
                            key={i}
                            i={i}
                            tier={tier}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
};
