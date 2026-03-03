import { Navbar } from '@/shared/components/layout/Navbar';
import { Footer } from '@/shared/components/layout/Footer';
import { BottomNav } from '@/shared/components/layout/BottomNav';
import { StickyCTA } from '@/shared/components/layout/StickyCTA';

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <BottomNav />
            <StickyCTA />
        </>
    );
}
