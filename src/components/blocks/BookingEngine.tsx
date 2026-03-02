'use client';

import { useState } from 'react';

const sessions = [
    { type: 'فيديو', icon: '🎥', price: 150, desc: 'جلسة وجهاً لوجه عبر الفيديو — الأعمق.' },
    { type: 'صوت', icon: '🎧', price: 100, desc: 'جلسة صوتية — خصوصية مطلقة.' },
    { type: 'واتساب', icon: '💬', price: 60, desc: 'نصي أو صوتي — مرن ومريح.' },
];

export const BookingEngine = () => {
    const [selected, setSelected] = useState(0);
    const current = sessions[selected];

    return (
        <div className="max-w-2xl mx-auto animate-fade-in-up">
            {/* Session type selector */}
            <div className="grid grid-cols-3 gap-3 mb-8">
                {sessions.map((s, i) => (
                    <button
                        key={s.type}
                        id={`session-${s.type}`}
                        onClick={() => setSelected(i)}
                        className={`rounded-2xl p-4 md:p-5 text-center transition-all duration-300 min-h-[100px] flex flex-col items-center justify-center gap-2 ${selected === i
                                ? 'bg-[var(--color-accent)] text-white shadow-[var(--shadow-glow)] scale-[1.03]'
                                : 'bg-white border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-card)]'
                            }`}
                    >
                        <span className="text-2xl md:text-3xl">{s.icon}</span>
                        <span className="text-xs md:text-sm font-semibold">{s.type}</span>
                    </button>
                ))}
            </div>

            {/* Selected session details */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-[var(--shadow-card)] border border-[var(--color-border-light)] p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-[var(--color-text)]">
                            جلسة {current.type}
                        </h3>
                        <p className="text-sm text-[var(--color-text-muted)] mt-1">{current.desc}</p>
                    </div>
                    <div className="text-left">
                        <div className="text-2xl md:text-3xl font-bold text-[var(--color-accent)]">{current.price}</div>
                        <div className="text-xs text-[var(--color-text-muted)]">د.ت</div>
                    </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                    {[
                        '60 دقيقة جلسة خاصة',
                        'تسجيل ملاحظات مشفر',
                        'خطة عمل بعد الجلسة',
                        'منسجمة مع منطقتك الزمنية',
                    ].map((f) => (
                        <div key={f} className="flex items-center gap-3 text-sm">
                            <span className="w-5 h-5 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-xs text-[var(--color-secondary)]">✓</span>
                            <span className="text-[var(--color-text-light)]">{f}</span>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <button id="book-now-cta" className="btn-cta w-full text-center text-base">
                    احجزي جلستك الآن — {current.price} د.ت
                </button>

                <p className="text-center text-xs text-[var(--color-text-muted)] mt-4">
                    🔒 الدفع آمن ومشفر بالكامل
                </p>
            </div>
        </div>
    );
};
