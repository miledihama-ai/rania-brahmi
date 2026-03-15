import type { Metadata } from "next";
import { Cairo, Inter, Amiri } from "next/font/google";
import { LenisProvider } from '@/shared/components/providers/LenisProvider';
import { MotionProvider } from "@/shared/components/providers/MotionProvider";
import { ToastProvider } from "@/shared/components/ui/ToastProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cairoFont = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rania Brahmi | رحلة التشافي والوعي الداخلي",
  description:
    "Rania Brahmi — برامج متخصصة في أعمال الظل Shadow Work والنمو الشخصي. احجزي استشارتك مع المدربة رانيا وابدئي رحلة التحول الداخلي.",
  keywords: ["Rania Brahmi", "Shadow Work", "تشافي", "استشارات", "تطوير ذاتي", "تونس"],
  openGraph: {
    title: "Rania Brahmi | رحلة التشافي",
    description: "برامج تطويرية متخصصة في الوعي الذاتي والتشافي النفسي.",
    type: "website",
    locale: "ar_TN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.variable} ${cairoFont.variable} ${amiri.variable} font-sans pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]`}>
        <LenisProvider>
          <MotionProvider>
            {children}
            <ToastProvider />
          </MotionProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
