import { BookingEngine } from '@/components/blocks/BookingEngine';

export const metadata = {
    title: 'احجزي استشارتك | Rania Brahmi',
    description: 'احجزي جلستك مع المدربة رانيا — استشارة فردية عبر الفيديو أو الصوت أو واتساب.',
};

export default function BookingPage() {
    return (
        <div className="min-h-screen bg-[var(--color-bg)] pt-24 pb-16 md:pt-28 md:pb-20 relative overflow-hidden">
            <div className="animated-gradient-bg absolute inset-0" />
            <div className="fluid-container relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-14">
                    <span className="inline-block bg-[var(--color-primary-light)] text-[var(--color-secondary)] px-4 py-1.5 rounded-full text-sm font-medium mb-4 animate-fade-in-up">
                        احجزي جلستك
                    </span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-4 animate-fade-in-up stagger-1">
                        الخطوة الأولى نحو التحول
                    </h1>
                    <p className="text-[var(--color-text-muted)] text-base md:text-lg max-w-xl mx-auto animate-fade-in-up stagger-2">
                        اختاري مسار الاستشارة المناسب لك. الأسعار واضحة وبدون رسوم مخفية.
                    </p>
                </div>

                <BookingEngine />

                {/* Reassurance strip */}
                <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center">
                    {[
                        { icon: '🔒', title: 'سرية تامة', desc: 'بيانات مشفرة E2E' },
                        { icon: '🌍', title: 'أي منطقة زمنية', desc: 'نعمل مع جدولك' },
                        { icon: '💳', title: 'دفع آمن', desc: 'عدة طرق للدفع' },
                        { icon: '↩️', title: 'إعادة جدولة', desc: 'قبل 24 ساعة مجاناً' },
                    ].map((item, i) => (
                        <div
                            key={item.title}
                            className="bg-white rounded-2xl p-4 md:p-5 shadow-[var(--shadow-card)] border border-[var(--color-border-light)] animate-fade-in-up"
                            style={{ animationDelay: `${0.3 + i * 0.08}s` }}
                        >
                            <div className="text-xl md:text-2xl mb-2">{item.icon}</div>
                            <div className="font-semibold text-[var(--color-text)] text-xs md:text-sm">{item.title}</div>
                            <div className="text-[10px] md:text-xs text-[var(--color-text-muted)] mt-1">{item.desc}</div>
                        </div>
                    ))}
                </div>

                {/* Disclaimer */}
                <div className="mt-8 md:mt-10 bg-[var(--color-primary-light)] border border-[var(--color-primary)] rounded-2xl p-4 md:p-5 text-center animate-fade-in-up stagger-6">
                    <p className="text-[var(--color-text-light)] text-xs md:text-sm">
                        <strong>⚠️ تنبيه:</strong> الاستشارات المقدمة استشارية تطويرية وليست بديلاً عن العلاج الطبي النفسي السريري.
                    </p>
                </div>
            </div>
        </div>
    );
}
