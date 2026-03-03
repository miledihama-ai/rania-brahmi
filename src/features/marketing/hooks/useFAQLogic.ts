'use client';

import { useState } from 'react';

/** A frequently asked question and its answer. */
export interface FAQItem {
    q: string;
    a: string;
}

/** All FAQ data — single source of truth. */
const faqData: FAQItem[] = [
    {
        q: 'ما الفرق بين Shadow Work والعلاج النفسي؟',
        a: 'أعمال الظل هي ممارسة تطويرية وتأملية تهدف إلى الوعي الذاتي وتحويل الأنماط اللاواعية. هي ليست علاجاً نفسياً سريرياً ولا تُغني عنه.',
    },
    {
        q: 'هل جلساتي سرية بالكامل؟',
        a: 'نعم. جميع الجلسات والملاحظات مشفرة بتشفير من الطرف إلى الطرف (End-to-End Encryption). لا يمكن لأي طرف ثالث الوصول إلى محتوى جلساتك.',
    },
    {
        q: 'كيف يعمل نظام الحجز مع المناطق الزمنية المختلفة؟',
        a: 'يتعرف النظام تلقائياً على منطقتك الزمنية ويعرض المواعيد المتاحة بتوقيتك المحلي.',
    },
    {
        q: 'ما طرق الدفع المتاحة؟',
        a: 'ندعم عدة طرق للدفع تشمل التحويل البنكي والبطاقات البنكية. جميع الأسعار معروضة بالدينار التونسي (د.ت) بوضوح.',
    },
    {
        q: 'ما الفرق بين مسارات الاستشارة (فيديو، صوت، واتساب)؟',
        a: 'الفيديو: جلسة وجهاً لوجه، الأعمق. الصوت: مثالي لمن يفضلن الخصوصية. واتساب: نصي/صوتي مرن، مناسب للأجداول المزدحمة.',
    },
    {
        q: 'هل يمكنني إلغاء الحجز أو إعادة الجدولة؟',
        a: 'نعم. يمكن إلغاء الحجز وإعادة الجدولة قبل 24 ساعة من موعد الجلسة مجاناً.',
    },
];

/**
 * Custom hook that encapsulates FAQ accordion state and data.
 * The FAQ component calls this and renders purely from its return values.
 */
export const useFAQLogic = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    /** Toggle a question open or closed. */
    const toggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return {
        /** All FAQ items */
        faqs: faqData,
        /** Index of the currently open question, or null if all closed */
        openIndex,
        /** Call with an item index to open/close it */
        toggle,
    };
};
