"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import { navLinks } from "@/data/navigation";

interface NavButtonProps {
    href: string;
    label: string;
    onClick: () => void;
    isActive: boolean;
}

function NavButton({ href, label, onClick, isActive }: NavButtonProps) {
    return (
        <Link
            href={href}
            scroll={true}
            onClick={onClick}
            className={`relative pb-1 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-black after:transition-all after:duration-300 ${
                isActive
                    ? "text-black after:w-full"
                    : "text-gray-600 hover:text-black after:w-0 hover:after:w-full"
            }`}
        >
            {label}
        </Link>
    );
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const sectionIds = useMemo(
        () => navLinks.map((navLink) => navLink.href.slice(1)),
        []
    );

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible[0]) {
                    setActiveSection(visible[0].target.id);
                }
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sectionIds]);

    return (
        <header
            className={`w-full px-6 py-4 sticky top-0 z-50 backdrop-blur-md bg-white/80 transition-shadow duration-300 ${
                scrolled ? "shadow-lg" : "shadow-none"
            }`}
        >
            <Container className="max-w-11/12 xl:max-w-9/12 flex items-center justify-between">
                {/* Logo Victor Ramos */}
                <Link href="#hero" scroll={true}>
                    <div className="group flex items-center gap-3 text-xl font-bold text-black">
                        <Image
                            src="/images/victorRamos1.jpg"
                            alt="Foto Victor Ramos"
                            width={40}
                            height={40}
                            className="rounded-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                        />
                        Victor Ramos
                    </div>
                </Link>

                {/* Botão hambúrguer (mobile) */}
                <button
                    className="relative w-6 h-5 lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    <span
                        className={`absolute left-0 h-0.5 w-6 rounded bg-black transition-all duration-300 ${
                            isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                        }`}
                    />
                    <span
                        className={`absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded bg-black transition-all duration-300 ${
                            isOpen ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <span
                        className={`absolute left-0 h-0.5 w-6 rounded bg-black transition-all duration-300 ${
                            isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                        }`}
                    />
                </button>

                {/* Botões (desktop) */}
                <nav className="hidden lg:flex gap-6 font-medium">
                    {navLinks.map((navLink) => (
                        <NavButton
                            key={navLink.href}
                            href={navLink.href}
                            label={navLink.label}
                            onClick={() => setIsOpen(false)}
                            isActive={activeSection === navLink.href.slice(1)}
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
            <div
                id="mobile-menu"
                aria-hidden={!isOpen}
                className={`lg:hidden grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    <div className="flex flex-col items-center gap-4 bg-white/95 px-6 pt-6 pb-4 font-medium backdrop-blur-md">
                        {navLinks.map((navLink) => (
                            <NavButton
                                key={navLink.href}
                                href={navLink.href}
                                label={navLink.label}
                                onClick={() => setIsOpen(false)}
                                isActive={activeSection === navLink.href.slice(1)}
                            />
                        ))}
                        <Link
                            href="/archives/curriculum.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 block rounded border-2 border-black bg-black px-4 py-2 text-center transition hover:bg-white hover:border-black"
                        >
                            <span className="text-white hover:text-black">
                                Currículo
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
