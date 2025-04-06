import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Victor Ramos - Portfolio",
  description: "Este é o portfolio de Victor Ramos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>

        <Header />

        {children}

      </body>
    </html>
  );
}
