/**
 * Loading skeleton for the marketing homepage.
 * Shown by Next.js App Router while the page is streaming.
 */
export default function Loading() {
    return (
        <div className="animate-pulse min-h-screen bg-[var(--color-bg-light)]" aria-hidden="true">
            {/* Hero skeleton */}
            <div className="fluid-container py-24 flex flex-col items-center gap-6">
                <div className="h-6 w-32 bg-[var(--color-primary-light)] rounded-full" />
                <div className="h-12 w-3/4 bg-[var(--color-primary-light)] rounded-2xl" />
                <div className="h-8 w-1/2 bg-[var(--color-primary-light)] rounded-xl" />
                <div className="h-14 w-48 bg-[var(--color-accent)]/30 rounded-full mt-4" />
            </div>

            {/* Cards skeleton */}
            <div className="fluid-container pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="h-56 bg-white rounded-3xl shadow-sm border border-[var(--color-border-light)]" />
                ))}
            </div>
        </div>
    );
}
