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
import PointerGlow from "@/components/motion/PointerGlow";

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
                        .stat-cell,
                        .stat-rule,
                        .entry-card,
                        .entry-dot,
                        .split-heading,
                        .hero-line,
                        .hero-fade,
                        .highlight-text {
                            opacity: 1 !important;
                            transform: none !important;
                        }
                        .portrait-clip {
                            clip-path: none !important;
                        }
                        #preloader {
                            display: none !important;
                        }
                    `}</style>
                </noscript>

                <MotionProvider>
                    {/* elementos position:fixed ficam FORA do #smooth-wrapper */}
                    <PageBackdrop />
                    <PointerGlow />
                    <Preloader />
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
