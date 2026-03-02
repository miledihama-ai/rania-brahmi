import Link from 'next/link';

const services = [
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
    <section id="services" className="section bg-[var(--color-text)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 animated-gradient-bg" />

        <div className="fluid-container relative z-10">
            <div className="text-center mb-10 md:mb-14">
                <span className="inline-block bg-[var(--color-secondary-dark)] text-[var(--color-primary-light)] px-4 py-1.5 rounded-full text-sm font-medium mb-4 animate-fade-in-up">
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
                        className="relative rounded-2xl md:rounded-3xl overflow-hidden group animate-fade-in-up"
                        style={{ animationDelay: `${0.1 + i * 0.12}s` }}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />

                        <div className="relative p-6 md:p-8 flex flex-col h-full min-h-[360px] md:min-h-[420px]">
                            <div className="text-4xl md:text-5xl mb-4">{service.icon}</div>
                            <p className="text-xs font-medium uppercase tracking-wider text-white/60 mb-1">{service.subtitle}</p>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-white/75 text-sm leading-relaxed mb-6 flex-1">{service.description}</p>

                            <ul className="space-y-2 mb-6 md:mb-8">
                                {service.highlights.map((h) => (
                                    <li key={h} className="flex items-center gap-2 text-sm text-white/80">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                                        {h}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={service.href}
                                className="inline-flex items-center gap-2 text-white font-medium text-sm group/link min-h-[44px]"
                            >
                                {service.cta}
                                <span className="transform group-hover/link:-translate-x-1 transition-transform duration-200">←</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
