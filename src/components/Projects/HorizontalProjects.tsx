"use client";

import Image from "next/image";
import { useRef } from "react";
import Reveal from "@/components/motion/Reveal";
import ActionButton from "@/components/ui/ActionButton";
import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";
import SectionHeading from "@/components/ui/SectionHeading";
import { gsap, useGSAP } from "@/lib/gsap";
import { projects, Project } from "@/data/projects";

const total = String(projects.length).padStart(2, "0");

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
            <ActionButton
                href="https://github.com/VictorRms03"
                external
                variant="outline"
                effect="shine"
            >
                Mais no GitHub
            </ActionButton>
        </div>
    );
}

function ProjectPanel({
    project: { title, description, imagePath, link, techStack },
    index,
}: {
    project: Project;
    index: number;
}) {
    return (
        <div className="flex h-full flex-col overflow-hidden rounded-xl glass transition-[border-color,box-shadow] duration-500 hover:border-accent/30 hover:shadow-glow">
            <div className="relative aspect-video w-full overflow-hidden bg-white/5">
                {/* -inset-x-10 dá folga para o parallax horizontal não abrir vão */}
                <div className="panel-media absolute inset-y-6 -inset-x-10 md:inset-y-8">
                    <Image
                        src={imagePath}
                        alt={`Imagem de projeto ${title}`}
                        fill
                        sizes="(min-width: 1024px) 45vw, 100vw"
                        className="object-contain"
                    />
                </div>
                <span className="absolute top-4 right-4 font-mono text-xs tracking-widest text-muted">
                    {String(index + 1).padStart(2, "0")} — {total}
                </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-extrabold xl:text-xl">{title}</h3>

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

                <p className="mt-4 flex-1 text-sm text-muted">{description}</p>

                <div className="mt-6">
                    <ActionButton
                        href={link}
                        external
                        variant="outline"
                        // efeitos diferentes por card, para comparar lado a lado
                        effect={index === 0 ? "fill" : "lift"}
                        className="px-5 py-2 text-sm"
                        icon={<ExternalLinkIcon className="h-4 w-4" />}
                    >
                        Ver projeto
                    </ActionButton>
                </div>
            </div>
        </div>
    );
}

export default function HorizontalProjects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLSpanElement>(null);

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

                    // quickSetter não aloca nada por frame, ao contrário de gsap.set
                    const setProgress = progressRef.current
                        ? gsap.quickSetter(progressRef.current, "scaleX")
                        : null;

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
                            onUpdate: (self) => setProgress?.(self.progress),
                            // promove a camada só enquanto o pin está ativo
                            onToggle: (self) =>
                                track.classList.toggle(
                                    "will-change-transform",
                                    self.isActive
                                ),
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

                    // imagem desliza mais devagar que o painel
                    gsap.utils
                        .toArray<HTMLElement>(".panel-media", track)
                        .forEach((media) => {
                            gsap.fromTo(
                                media,
                                { xPercent: -6 },
                                {
                                    xPercent: 6,
                                    ease: "none",
                                    scrollTrigger: {
                                        trigger: media,
                                        containerAnimation: horizontal,
                                        start: "left right",
                                        end: "right left",
                                        scrub: true,
                                    },
                                }
                            );
                        });

                    return () => {
                        track.classList.remove("will-change-transform");
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
                        <ProjectPanel project={project} index={index} />
                    </Reveal>
                ))}
                <CTAPanel />
            </div>

            {/* Desktop: trilho horizontal pinado */}
            <div
                ref={trackRef}
                className="hidden w-max gap-10 py-8 pr-[10vw] pl-[8vw] lg:flex"
            >
                <TitlePanel className="panel-inner w-[36vw] shrink-0" />
                {projects.map((project, index) => (
                    <div
                        key={project.title}
                        className="panel-inner w-[42vw] max-w-[620px] shrink-0"
                    >
                        <ProjectPanel project={project} index={index} />
                    </div>
                ))}
                <CTAPanel className="panel-inner w-[36vw] shrink-0" />
            </div>

            {/* barra de progresso do trilho */}
            <div className="absolute inset-x-[8vw] bottom-2 hidden h-px bg-line lg:block">
                <span
                    ref={progressRef}
                    className="block h-full origin-left scale-x-0 bg-accent"
                />
            </div>
        </div>
    );
}
