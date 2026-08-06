"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Reveal from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";
import SectionHeading from "@/components/ui/SectionHeading";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { projects, Project } from "@/data/projects";

function TitlePanel({ className }: { className?: string }) {
    return (
        <div className={`flex flex-col justify-center ${className ?? ""}`}>
            <SectionHeading
                prefix="Meus"
                highlight="Projetos"
                className="text-4xl sm:text-5xl"
                highlightClassName="font-bold"
            />
            <p className="mt-4 max-w-sm text-muted">
                Alguns dos projetos que venho desenvolvendo, aplicando
                metodologias ágeis do início ao fim.
            </p>
            <p className="mt-8 hidden items-center gap-2 text-sm text-muted lg:flex">
                <span className="inline-block animate-bounce">←</span>
                Arraste ou role para o lado
            </p>
        </div>
    );
}

function CTAPanel({ className }: { className?: string }) {
    return (
        <div
            className={`flex flex-col items-start justify-center gap-4 ${className ?? ""}`}
        >
            <p className="max-w-xs text-muted">
                Quer ver mais? O código de todos os meus projetos está
                disponível no GitHub.
            </p>
            <Magnetic>
                <Link
                    href="https://github.com/VictorRms03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-accent px-6 py-2.5 text-sm font-medium text-accent transition-all duration-300 hover:shadow-glow"
                >
                    <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-background">
                        Mais no GitHub
                    </span>
                </Link>
            </Magnetic>
        </div>
    );
}

function ProjectPanel({
    title,
    description,
    imagePath,
    link,
    techStack,
}: Project) {
    return (
        <div className="flex h-full flex-col overflow-hidden rounded-xl glass transition-all duration-500 hover:border-accent/30 hover:shadow-glow">
            <div className="relative aspect-video w-full overflow-hidden bg-white/5">
                <div className="absolute inset-6 md:inset-8">
                    <Image
                        src={imagePath}
                        alt={`Imagem de projeto ${title}`}
                        fill
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-extrabold xl:text-2xl">
                    {title}
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <p className="mt-4 flex-1 text-sm text-muted">
                    {description}
                </p>

                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative mt-6 inline-flex w-fit items-center gap-2 overflow-hidden rounded-full border-2 border-line px-5 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-accent"
                >
                    <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-background">
                        Ver projeto
                    </span>
                    <Image
                        src="/icons/redirect.svg"
                        alt=""
                        aria-hidden="true"
                        width={14}
                        height={14}
                        className="relative z-10 invert transition-all duration-300 group-hover:invert-0"
                    />
                </a>
            </div>
        </div>
    );
}

export default function HorizontalProjects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add(
                "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
                () => {
                    const track = trackRef.current;
                    const section = sectionRef.current;
                    if (!track || !section) return;

                    const getDistance = () =>
                        track.scrollWidth - window.innerWidth;

                    const horizontal = gsap.to(track, {
                        x: () => -getDistance(),
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            pin: true,
                            scrub: 1,
                            start: "top top",
                            end: () => "+=" + getDistance(),
                            invalidateOnRefresh: true,
                            anticipatePin: 1,
                        },
                    });

                    gsap.utils
                        .toArray<HTMLElement>(".panel-inner", track)
                        .forEach((el) => {
                            gsap.from(el, {
                                y: 60,
                                opacity: 0,
                                duration: 0.7,
                                scrollTrigger: {
                                    trigger: el,
                                    containerAnimation: horizontal,
                                    start: "left 85%",
                                    toggleActions: "play none none reverse",
                                },
                            });
                        });

                    return () => {
                        horizontal.scrollTrigger?.kill();
                        horizontal.kill();
                    };
                }
            );
        },
        { scope: sectionRef }
    );

    return (
        <div ref={sectionRef} className="relative overflow-hidden">
            {/* Mobile/tablet: pilha vertical, sem pin */}
            <div className="flex flex-col gap-8 px-6 lg:hidden">
                <TitlePanel />
                {projects.map((project, index) => (
                    <Reveal key={project.title} y={24} delay={index * 0.1}>
                        <ProjectPanel {...project} />
                    </Reveal>
                ))}
                <CTAPanel />
            </div>

            {/* Desktop: trilho horizontal pinado */}
            <div
                ref={trackRef}
                className="hidden w-max gap-10 py-8 pr-[10vw] pl-[8vw] will-change-transform lg:flex"
            >
                <TitlePanel className="panel-inner w-[32vw] shrink-0" />
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="panel-inner w-[60vw] shrink-0"
                    >
                        <ProjectPanel {...project} />
                    </div>
                ))}
                <CTAPanel className="panel-inner w-[32vw] shrink-0" />
            </div>
        </div>
    );
}
