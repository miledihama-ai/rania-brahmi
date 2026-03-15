'use client';

import { useBookingLogic } from '@/features/booking/hooks/useBookingLogic';

/**
 * BookingEngine — Presentational (Dumb) Component.
 * All logic is handled by `useBookingLogic`. This component only renders.
 */
export const BookingEngine = () => {
    const { sessions, selectedType, currentSession, isSubmitting, onSelectType, onSubmit } = useBookingLogic();

    return (
        <div className="max-w-2xl mx-auto animate-fade-in-up">
            {/* Session type selector */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
                {sessions.map((s) => {
                    const isSelected = selectedType === s.key;
                    return (
                        <button
                            key={s.key}
                            id={`session-${s.label}`}
                            onClick={() => onSelectType(s.key)}
                            className={`relative rounded-[1.25rem] md:rounded-[1.5rem] p-4 md:p-6 text-center transition-all duration-400 min-h-[110px] md:min-h-[130px] flex flex-col items-center justify-center gap-2 overflow-hidden outline-none ${isSelected
                                ? 'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-black shadow-[0_10px_30px_-10px_rgba(212,175,55,0.4)] scale-[1.02] border border-[var(--color-primary-light)]/30'
                                : 'bg-white/5 backdrop-blur-md border border-white/10 text-[var(--color-text)] hover:border-[var(--color-primary)] hover:bg-white/10 hover:shadow-[var(--shadow-card)] hover:-translate-y-1'
                                }`}
                        >
                            {/* Selected glow effect */}
                            {isSelected && (
                                <span className="absolute inset-0 bg-white/20 blur-2xl rounded-full" />
                            )}
                            <span className="text-3xl md:text-4xl relative z-10 transition-transform duration-300 group-hover:scale-110">{s.icon}</span>
                            <span className="text-sm md:text-base font-bold relative z-10">{s.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Selected session details */}
            <div className="glass-card p-6 md:p-10 relative overflow-hidden">
                {/* Decorative background glow inside card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-light)] opacity-20 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8 relative z-10">
                    <div>
                        <h3 className="text-xl md:text-2xl font-extrabold text-[var(--color-text)] mb-2 flex items-center gap-2">
                            جلسة {currentSession.label}
                        </h3>
                        <p className="text-sm md:text-base text-[var(--color-text-light)] leading-relaxed max-w-sm">{currentSession.desc}</p>
                    </div>
                    <div className="text-right sm:text-left bg-[var(--color-bg-warm)] px-4 py-3 rounded-2xl border border-[var(--color-border-light)] inline-block">
                        <div className="text-3xl md:text-4xl font-extrabold text-gradient-warm leading-none mb-1">{currentSession.price}</div>
                        <div className="text-xs md:text-sm text-[var(--color-text-muted)] font-medium">الدينار التونسي (TND)</div>
                    </div>
                </div>

                {/* Features list */}
                <div className="grid sm:grid-cols-2 gap-4 mb-10 relative z-10">
                    {[
                        '60 دقيقة جلسة خاصة ومكثفة',
                        'تسجيل ملاحظات مشفر وآمن',
                        'خطة عمل مخصصة بعد الجلسة',
                        'مواعيد مرنة حسب منطقتك',
                    ].map((f) => (
                        <div key={f} className="flex items-center gap-3 text-sm md:text-base p-2 rounded-lg hover:bg-white/40 transition-colors">
                            <span className="w-6 h-6 shrink-0 rounded-full bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-primary)] flex items-center justify-center text-xs text-[var(--color-secondary)] shadow-sm">✓</span>
                            <span className="text-[var(--color-text)] font-medium">{f}</span>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="relative z-10">
                    <button
                        id="book-now-cta"
                        onClick={onSubmit}
                        disabled={isSubmitting}
                        className="btn-cta w-full text-center text-lg shadow-[var(--shadow-warm)] disabled:opacity-70 disabled:hover:transform-none"
                    >
                        {isSubmitting ? 'جاري تجهيز الحجز…' : `تأكيد الحجز — ${currentSession.price} د.ت`}
                    </button>

                    <div className="flex items-center justify-center gap-2 mt-5 text-[13px] text-[var(--color-text-muted)] font-medium">
                        <svg className="w-4 h-4 text-[var(--color-secondary-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>الدفع آمن ومشفر ومحمي بالكامل 100%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
