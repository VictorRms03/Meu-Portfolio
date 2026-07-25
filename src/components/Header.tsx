"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "@/components/ui/Container";
import { navLinks } from "@/data/navigation";

interface NavButtonProps {
    href: string;
    label: string;
    onClick: () => void;
}

function NavButton({ href, label, onClick }: NavButtonProps) {
    return (
        <Link
            href={href}
            scroll={true}
            className="block hover:text-gray-800 transition"
            onClick={onClick}
        >
            {label}
        </Link>
    );
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full px-6 py-4 bg-white shadow-lg sticky top-0 z-50">
            <Container className="max-w-11/12 xl:max-w-9/12 flex items-center justify-between">
                {/* Logo Victor Ramos */}
                <Link href="#hero" scroll={true}>
                    <div className="flex items-center gap-3 text-xl font-bold text-black">
                        <Image
                            src="/images/victorRamos1.jpg"
                            alt="Foto Victor Ramos"
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                        />
                        Victor Ramos
                    </div>
                </Link>

                {/* Botão hambúrguer (mobile) */}
                <button
                    className="lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Botões (desktop) */}
                <nav className="hidden lg:flex gap-6 text-black font-medium">
                    {navLinks.map((navLink) => (
                        <NavButton
                            key={navLink.href}
                            href={navLink.href}
                            label={navLink.label}
                            onClick={() => setIsOpen(false)}
                        />
                    ))}
                </nav>

                {/* Botão currículo (desktop) */}
                <div className="hidden lg:flex">
                    <Link
                        href="/archives/curriculum.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-black px-4 py-2
                     rounded hover:bg-white border-2 border-black hover:border-black transition flex items-center gap-2"
                    >
                        <span className="text-white group-hover:text-black">
                            Currículo
                        </span>{" "}
                        <Image
                            src="/icons/download.svg"
                            alt="icone download"
                            width={15}
                            height={15}
                            className="group-hover:invert"
                        />
                    </Link>
                </div>
            </Container>

            {/* Menu hamburguer (dropdown) */}
            {isOpen && (
                <div
                    id="mobile-menu"
                    className="lg:hidden px-6 pt-6 pb-2 space-y-4 flex flex-col items-center text-black font-medium bg-white"
                >
                    {navLinks.map((navLink) => (
                        <NavButton
                            key={navLink.href}
                            href={navLink.href}
                            label={navLink.label}
                            onClick={() => setIsOpen(!isOpen)}
                        />
                    ))}
                    <Link
                        href="/archives/curriculum.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(!isOpen)}
                        className="block mt-2 bg-black px-4 py-2 rounded hover:bg-white border-2 border-black hover:border-black transition text-center"
                    >
                        <span className="text-white hover:text-black">
                            Currículo
                        </span>
                    </Link>
                </div>
            )}
        </header>
    );
}
