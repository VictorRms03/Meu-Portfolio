"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface GerarBotaoNavProps {
    href: string;
    texto: string;
    onClick: () => void;
}

function GerarBotaoNav({ href, texto, onClick }: GerarBotaoNavProps) {
    return (
        <Link
            href={href}
            scroll={true}
            className="block hover:text-gray-800 transition"
            onClick={onClick}
        >
            {texto}
        </Link>
    );
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navButtons = [
        { href: "#skills", texto: "Habilidades" },
        { href: "#experience", texto: "Experiências" },
        { href: "#sobre", texto: "Sobre mim" },
        { href: "#projetos", texto: "Projetos" },
        { href: "#contato", texto: "Contato" },
    ];

    return (
        <header className="w-full px-6 py-4 bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-11/12 xl:max-w-9/12 mx-auto flex items-center justify-between">
                {/* Logo Victor Ramos */}
                <Link href="#hero scroll={true}">
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
                    aria-label="Abrir menu"
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
                    {navButtons.map((navButton, index) => (
                        <GerarBotaoNav
                            key={index}
                            href={navButton.href}
                            texto={navButton.texto}
                            onClick={() => setIsOpen(false)}
                        />
                    ))}
                </nav>

                {/* Botão currículo (desktop) */}
                <div className="hidden lg:flex">
                    <Link
                        href="/archives/curriculum.pdf"
                        target="_blank"
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
            </div>

            {/* Menu hamburguer (dropdown) */}
            {isOpen && (
                <div className="lg:hidden px-6 pt-6 pb-2 space-y-4 flex flex-col items-center text-black font-medium bg-white">
                    {navButtons.map((navButton, index) => (
                        <GerarBotaoNav
                            key={index}
                            href={navButton.href}
                            texto={navButton.texto}
                            onClick={() => setIsOpen(!isOpen)}
                        />
                    ))}
                    <Link
                        href="/archives/curriculum.pdf"
                        target="_blank"
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
