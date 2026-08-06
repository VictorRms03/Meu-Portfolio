"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import AnchorLink from "@/components/motion/AnchorLink";
import Magnetic from "@/components/motion/Magnetic";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { navLinks } from "@/data/navigation";

interface NavButtonProps {
    href: string;
    label: string;
    onClick: () => void;
    isActive: boolean;
}

interface CurriculumButtonProps {
    onClick?: () => void;
    className?: string;
}

function CurriculumButton({ onClick, className = "" }: CurriculumButtonProps) {
    return (
        <Link
            href="/archives/curriculum.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClick}
            className={`group relative flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-accent bg-accent px-5 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow ${className}`}
        >
            <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
            <span className="relative z-10 flex items-center gap-2">
                <span className="text-background">Currículo</span>
                <Image
                    src="/icons/download.svg"
                    alt="icone download"
                    width={15}
                    height={15}
                    className="invert"
                />
            </span>
        </Link>
    );
}

function NavButton({ href, label, onClick, isActive }: NavButtonProps) {
    return (
        <AnchorLink
            href={href}
            onClick={onClick}
            className={`relative pb-1 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-accent after:transition-all after:duration-300 ${
                isActive
                    ? "text-accent after:w-full"
                    : "text-muted hover:text-foreground after:w-0 hover:after:w-full"
            }`}
        >
            {label}
        </AnchorLink>
    );
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const headerRef = useRef<HTMLElement>(null);
    const isOpenRef = useRef(isOpen);

    const sectionIds = useMemo(
        () => navLinks.map((navLink) => navLink.href.slice(1)),
        []
    );

    useEffect(() => {
        isOpenRef.current = isOpen;
        if (isOpen) gsap.to(headerRef.current, { yPercent: 0, duration: 0.3 });
    }, [isOpen]);

    useGSAP(
        () => {
            ScrollTrigger.create({
                start: "top -10",
                end: 99999,
                toggleClass: { targets: headerRef.current!, className: "is-scrolled" },
            });

            ScrollTrigger.create({
                start: "top -200",
                end: 99999,
                onUpdate: (self) => {
                    if (isOpenRef.current) return;
                    gsap.to(headerRef.current, {
                        yPercent: self.direction === 1 ? -100 : 0,
                        duration: 0.45,
                        ease: "power3.out",
                        overwrite: true,
                    });
                },
            });

            sectionIds.forEach((id) => {
                const el = document.getElementById(id);
                if (!el) return;

                ScrollTrigger.create({
                    trigger: el,
                    start: "top 45%",
                    end: "bottom 45%",
                    onToggle: (self) => self.isActive && setActiveSection(id),
                    refreshPriority: -1,
                });
            });
        },
        { scope: headerRef, dependencies: [sectionIds] }
    );

    return (
        <header
            ref={headerRef}
            className="w-full px-6 py-4 fixed inset-x-0 top-0 z-[60] glass-blur transition-shadow duration-300"
        >
            <Container className="max-w-11/12 xl:max-w-9/12 flex items-center justify-between">
                {/* Logo Victor Ramos */}
                <AnchorLink href="#hero">
                    <div className="group flex items-center gap-3 text-xl font-bold text-foreground">
                        <Image
                            src="/images/victorRamos1.jpg"
                            alt="Foto Victor Ramos"
                            width={40}
                            height={40}
                            className="rounded-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                        />
                        Victor Ramos
                    </div>
                </AnchorLink>

                {/* Botão hambúrguer (mobile) */}
                <button
                    className="relative w-6 h-5 lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    <span
                        className={`absolute left-0 h-0.5 w-6 rounded bg-foreground transition-all duration-300 ${
                            isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                        }`}
                    />
                    <span
                        className={`absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded bg-foreground transition-all duration-300 ${
                            isOpen ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <span
                        className={`absolute left-0 h-0.5 w-6 rounded bg-foreground transition-all duration-300 ${
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
                    <Magnetic>
                        <CurriculumButton />
                    </Magnetic>
                </div>
            </Container>

            {/* Menu hamburguer (dropdown) */}
            <div
                id="mobile-menu"
                aria-hidden={!isOpen}
                inert={!isOpen}
                className={`lg:hidden grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    <div className="max-h-[calc(100svh-var(--header-h))] overflow-y-auto">
                        <div className="flex flex-col items-center gap-4 px-6 pt-6 pb-4 font-medium">
                            {navLinks.map((navLink) => (
                                <NavButton
                                    key={navLink.href}
                                    href={navLink.href}
                                    label={navLink.label}
                                    onClick={() => setIsOpen(false)}
                                    isActive={
                                        activeSection === navLink.href.slice(1)
                                    }
                                />
                            ))}
                            <CurriculumButton
                                onClick={() => setIsOpen(false)}
                                className="mt-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
