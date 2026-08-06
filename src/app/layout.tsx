import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/providers/MotionProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import PageBackdrop from "@/components/motion/PageBackdrop";
import SectionThemer from "@/components/motion/SectionThemer";
import Preloader from "@/components/motion/Preloader";
import Cursor from "@/components/motion/Cursor";

export const metadata: Metadata = {
    title: "Victor Ramos - Portfólio",
    description: "Este é o portfólio de Victor Ramos",
};

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={sora.variable}>
            <body className={sora.className}>
                <noscript>
                    <style>{`
                        [data-reveal],
                        [data-reveal-child] > *,
                        .skill-card,
                        .split-heading,
                        .hero-line,
                        .hero-fade {
                            opacity: 1 !important;
                            transform: none !important;
                        }
                        #preloader {
                            display: none !important;
                        }
                    `}</style>
                </noscript>

                <MotionProvider>
                    {/* elementos position:fixed ficam FORA do #smooth-wrapper */}
                    <PageBackdrop />
                    <Preloader />
                    <Cursor />
                    <Header />
                    <SectionThemer />

                    <SmoothScroll>
                        <main className="pt-[var(--header-h)]">
                            {children}
                        </main>
                        <Footer />
                    </SmoothScroll>
                </MotionProvider>
            </body>
        </html>
    );
}
