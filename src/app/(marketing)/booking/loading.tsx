/**
 * Loading skeleton for the booking page.
 * Shown while session data or the booking engine component loads.
 */
export default function Loading() {
    return (
        <div className="animate-pulse fluid-container py-20 max-w-2xl mx-auto" aria-hidden="true">
            {/* Section header */}
            <div className="text-center mb-10 flex flex-col items-center gap-4">
                <div className="h-6 w-28 bg-[var(--color-primary-light)] rounded-full" />
                <div className="h-10 w-2/3 bg-[var(--color-primary-light)] rounded-2xl" />
            </div>

            {/* Session type cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="h-28 bg-white rounded-2xl border border-[var(--color-border-light)]" />
                ))}
            </div>

            {/* Details card */}
            <div className="h-72 bg-white rounded-3xl border border-[var(--color-border-light)]" />
        </div>
    );
}
