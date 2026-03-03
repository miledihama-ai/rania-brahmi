/**
 * Loading skeleton for auth pages (login & register).
 * Shares the same layout for both routes.
 */
export default function Loading() {
    return (
        <div className="animate-pulse min-h-screen flex items-center justify-center bg-[var(--color-bg-light)] p-6" aria-hidden="true">
            <div className="w-full max-w-md flex flex-col gap-5">
                {/* Logo / header */}
                <div className="flex flex-col items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-full bg-[var(--color-primary-light)]" />
                    <div className="h-7 w-40 bg-[var(--color-primary-light)] rounded-xl" />
                    <div className="h-5 w-56 bg-[var(--color-border-light)] rounded-lg" />
                </div>

                {/* Form fields */}
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="h-14 bg-white rounded-2xl border border-[var(--color-border-light)]" />
                ))}

                {/* Submit button */}
                <div className="h-14 bg-[var(--color-accent)]/30 rounded-full mt-2" />
            </div>
        </div>
    );
}
