import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background blobs */}
            <div className="watercolor-blob" style={{ width: '400px', height: '400px', top: '-15%', right: '-10%', background: 'radial-gradient(circle, rgba(255,155,155,0.2) 0%, transparent 70%)' }} />
            <div className="watercolor-blob" style={{ width: '300px', height: '300px', bottom: '-10%', left: '-5%', background: 'radial-gradient(circle, rgba(255,127,80,0.15) 0%, transparent 70%)', animationDelay: '4s' }} />

            <div className="w-full max-w-md relative z-10">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 group">
                        <span className="w-11 h-11 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold text-xl shadow-[var(--shadow-soft)] group-hover:scale-105 transition-transform">
                            R
                        </span>
                        <span className="font-bold text-2xl text-[var(--color-text)]">Rania Brahmi</span>
                    </Link>
                </div>

                <div className="bg-white rounded-3xl shadow-[var(--shadow-warm)] p-6 md:p-8 border border-[var(--color-border-light)] animate-scale-in">
                    {children}
                </div>
            </div>
        </div>
    );
}
