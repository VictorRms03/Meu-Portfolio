import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Victor Ramos - Portfólio",
  description: "Este é o portfólio de Victor Ramos",
};

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={sora.className + " scroll-smooth"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
