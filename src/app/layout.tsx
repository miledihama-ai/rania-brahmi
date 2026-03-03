import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import { ToastProvider } from "@/shared/components/ui/ToastProvider";
import { MotionProvider } from "@/shared/components/providers/MotionProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
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
      <body className={`${inter.variable} ${ibmArabic.variable} antialiased`}>
        <MotionProvider>
          {children}
        </MotionProvider>
        <ToastProvider />
      </body>
    </html>
  );
}
