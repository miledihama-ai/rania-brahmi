import Link from 'next/link';

/** A service offering with details, highlights, and gradient styling. */
interface ServiceItem {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    highlights: string[];
    cta: string;
    href: string;
    gradient: string;
}

const services: ServiceItem[] = [
    {
        icon: '🎯',
        title: 'جلسات كوتشينغ فردية',
        subtitle: 'تحول شخصي معمّق',
        description: 'جلسات خاصة بك وحدك. نعمل معاً على كسر الأنماط القديمة، تحرير المعتقدات المقيدة، وإعادة بناء علاقتك بنفسك وبالآخرين.',
        highlights: ['جلسة فيديو أو صوتية خاصة', 'خطة عمل مخصصة', 'متابعة مستمرة بين الجلسات'],
        cta: 'احجزي جلستك',
        href: '/booking',
        gradient: 'from-[var(--color-secondary-dark)] to-[var(--color-secondary)]',
    },
    {
        icon: '🎓',
        title: 'دورات أونلاين',
        subtitle: 'تعلّمي بإيقاعك الخاص',
        description: 'دورات مسجلة تأخذك خطوة بخطوة في رحلة الوعي والتحرر. تقنيات واضحة وعملية ومجرّبة تختصر عليك سنوات من التخبط.',
        highlights: ['محتوى فيديو عالي الجودة', 'تمارين عملية قابلة للتطبيق', 'دعم مجتمعي'],
        cta: 'استكشفي الدورات',
        href: '/#programs',
        gradient: 'from-[var(--color-accent-dark)] to-[var(--color-accent)]',
    },
    {
        icon: '📖',
        title: 'دفاتر وتمارين للشفاء والتحرر',
        subtitle: 'أدوات بين يديك',
        description: 'مواد مصممة لتساعدك على الغوص في الداخل بأمان. دفاتر عمل، تمارين كتابية، وتأملات موجّهة تفتح لك أبواب الشفاء.',
        highlights: ['تمارين كتابية للشفاء الداخلي', 'تأملات صوتية موجّهة', 'أدوات للاستخدام اليومي'],
        cta: 'تصفّحي الأدوات',
        href: '/#programs',
        gradient: 'from-[var(--color-primary-dark)] to-[var(--color-primary)]',
    },
];

export const Services = () => (
    <section id="services" className="section bg-[var(--color-bg)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 animated-gradient-bg" />

        <div className="fluid-container relative z-10">
            <div className="text-center mb-10 md:mb-14">
                <span className="inline-block bg-[var(--color-primary)] text-black px-4 py-1.5 rounded-full text-sm font-bold mb-4 animate-fade-in-up">
                    ماذا أقدّم لكِ
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in-up stagger-1">
                    مسارات مصممة لتحوّلك
                </h2>
                <p className="text-[var(--color-primary-light)] text-base md:text-lg max-w-lg mx-auto animate-fade-in-up stagger-2">
                    أنتِ أقوى مما تتوقعين… أنتِ فقط لم تُعاملي كما تستحقين.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {services.map((service, i) => (
                    <div
                        key={service.title}
                        className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group animate-fade-in-up shadow-[var(--shadow-card)] transition-transform duration-300 active:scale-[0.98] md:hover:-translate-y-2 md:hover:shadow-[var(--shadow-warm)]"
                        style={{ animationDelay: `${0.1 + i * 0.12}s` }}
                    >
                        {/* Background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90`} />

                        {/* Inner stroke effect for premium feel */}
                        <div className="absolute inset-0 border border-white/20 rounded-[1.5rem] md:rounded-[2rem] pointer-events-none" />

                        <div className="relative p-8 md:p-10 flex flex-col h-full min-h-[400px] md:min-h-[460px]">
                            <div className="text-5xl md:text-6xl mb-6 transition-transform duration-300 md:group-hover:scale-110 origin-right">{service.icon}</div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-white/70 mb-2">{service.subtitle}</p>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-5">{service.title}</h3>
                            <p className="text-white/80 text-[15px] leading-relaxed mb-8 flex-1">{service.description}</p>

                            <ul className="space-y-3 mb-8 md:mb-10">
                                {service.highlights.map((h) => (
                                    <li key={h} className="flex items-start gap-3 text-[14.5px] text-white/90 font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0 mt-2 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                                        {h}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={service.href}
                                className="inline-flex items-center gap-2 text-white font-bold text-[15px] group/link min-h-[48px] pt-4 border-t border-white/15"
                            >
                                {service.cta}
                                <span className="transform group-hover/link:-translate-x-2 transition-transform duration-300">←</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
