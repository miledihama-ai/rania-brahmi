/**
 * Loading skeleton for the marketing homepage.
 * Shown by Next.js App Router while the page is streaming.
 * Uses the dark luxury theme to prevent a white flash.
 */
export default function Loading() {
    return (
        <div className="animate-pulse min-h-screen bg-[var(--color-bg)]" aria-hidden="true">
            {/* Hero skeleton */}
            <div className="fluid-container py-24 flex flex-col items-center gap-6">
                <div className="h-6 w-32 bg-white/10 rounded-full" />
                <div className="h-12 w-3/4 bg-white/10 rounded-2xl" />
                <div className="h-8 w-1/2 bg-white/10 rounded-xl" />
                <div className="h-14 w-48 bg-white/5 rounded-full mt-4" />
            </div>

            {/* Cards skeleton */}
            <div className="fluid-container pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="h-56 bg-white/5 rounded-3xl border border-white/10" />
                ))}
            </div>
        </div>
    );
}
