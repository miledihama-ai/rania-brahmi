import dynamic from 'next/dynamic';
import { Hero } from '@/features/marketing/components/Hero';
import { ScrollReveal } from '@/shared/components/ui/ScrollReveal';
import { ErrorBoundary } from '@/shared/components/ui/ErrorBoundary';
import { AboutSection } from '@/features/marketing/components/AboutSection';
import { StorySection } from '@/features/marketing/components/StorySection';

/* ──────────────────────────────────────────────
 * Dynamic imports for below-fold sections.
 * These components are lazy-loaded — they don't add
 * to the initial JS bundle, significantly speeding up
 * First Contentful Paint (FCP) and Time to Interactive (TTI).
 * ────────────────────────────────────────────── */
const ValueLadder = dynamic(
    () => import('@/features/marketing/components/ValueLadder').then((mod) => mod.ValueLadder),
    { loading: () => <div className="animate-pulse min-h-[50vh] bg-white/5 rounded-3xl" /> }
);

const Services = dynamic(
    () => import('@/features/marketing/components/Services').then((mod) => mod.Services),
    { loading: () => <div className="animate-pulse min-h-[50vh] bg-white/5 rounded-3xl" /> }
);

const SocialProof = dynamic(
    () => import('@/features/marketing/components/SocialProof').then((mod) => mod.SocialProof),
    { loading: () => <div className="animate-pulse min-h-[50vh] bg-white/5 rounded-3xl" /> }
);

const BookingEngine = dynamic(
    () => import('@/features/booking/components/BookingEngine').then((mod) => mod.BookingEngine),
    { loading: () => <div className="animate-pulse min-h-[40vh] bg-white/5 rounded-3xl" /> }
);

const FAQ = dynamic(
    () => import('@/features/marketing/components/FAQ').then((mod) => mod.FAQ),
    { loading: () => <div className="animate-pulse min-h-[40vh] bg-white/5 rounded-3xl" /> }
);

/** Enable static generation for the marketing homepage. */
export const revalidate = 3600; // ISR: revalidate every hour

export default function HomePage() {
    return (
        <>
            <ErrorBoundary sectionName="البطل">
                <Hero />
            </ErrorBoundary>

            <ErrorBoundary sectionName="السلم القيمي">
                <ScrollReveal>
                    <ValueLadder />
                </ScrollReveal>
            </ErrorBoundary>

            <ErrorBoundary sectionName="الخدمات">
                <ScrollReveal>
                    <Services />
                </ScrollReveal>
            </ErrorBoundary>

            <ErrorBoundary sectionName="شهادات العميلات">
                <ScrollReveal>
                    <SocialProof />
                </ScrollReveal>
            </ErrorBoundary>

            {/* Booking CTA section */}
            <ErrorBoundary sectionName="الحجز">
                <ScrollReveal>
                    <section id="booking-cta" className="section bg-[var(--color-bg-warm)] relative overflow-hidden">
                        <div className="watercolor-blob" style={{ width: '300px', height: '300px', top: '-10%', right: '-5%', background: 'radial-gradient(circle, rgba(220,174,150,0.12) 0%, transparent 70%)' }} />
                        <div className="fluid-container relative z-10">
                            <div className="text-center mb-10 md:mb-12">
                                <span className="inline-block bg-[var(--color-primary)] text-black px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                                    الخطوة التالية
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-4">
                                    احجزي جلستك الآن
                                </h2>
                                <p className="text-[var(--color-text-muted)] text-base md:text-lg max-w-lg mx-auto">
                                    الخطوة الأولى نحو التحول تبدأ بقرار واحد. خذي قرارك الآن.
                                </p>
                            </div>
                            <BookingEngine />
                        </div>
                    </section>
                </ScrollReveal>
            </ErrorBoundary>

            <ErrorBoundary sectionName="الأسئلة الشائعة">
                <ScrollReveal>
                    <FAQ />
                </ScrollReveal>
            </ErrorBoundary>

            <AboutSection />
            <StorySection />
        </>
    );
}
