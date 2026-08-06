"use client";

import { useRef } from "react";
import HeroSocials from "./HeroSocials";
import AnchorLink from "@/components/motion/AnchorLink";
import Magnetic from "@/components/motion/Magnetic";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import { useMotion } from "@/components/providers/MotionProvider";

export default function HeroIntro() {
    const scope = useRef<HTMLDivElement>(null);
    const { introDone } = useMotion();

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: reduce)", () => {
                gsap.set(".hero-line, .hero-fade", { opacity: 1 });
            });

            if (!introDone) return;

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                let split: ReturnType<typeof SplitText.create> | undefined;

                document.fonts.ready.then(() => {
                    if (!scope.current) return;
                    split = SplitText.create(".hero-line", {
                        type: "lines,words",
                        mask: "lines",
                        autoSplit: true,
                        aria: "auto",
                        onSplit(self) {
                            gsap.set(".hero-line", { opacity: 1 });
                            return gsap.from(self.lines, {
                                yPercent: 110,
                                duration: 1.1,
                                ease: "expo.out",
                                stagger: 0.1,
                            });
                        },
                    });
                });

                gsap.from(".hero-fade", {
                    opacity: 0,
                    y: 24,
                    duration: 0.9,
                    stagger: 0.09,
                    delay: 0.6,
                    ease: "power3.out",
                });

                gsap.to(scope.current, {
                    opacity: 0,
                    yPercent: -12,
                    scale: 0.96,
                    ease: "none",
                    scrollTrigger: {
                        trigger: document.getElementById("hero"),
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                });

                return () => split?.revert();
            });
        },
        { scope, dependencies: [introDone] }
    );

    return (
        <div
            ref={scope}
            className="relative z-10 mx-auto max-w-3xl px-6 text-center"
        >
            <p className="hero-fade mb-4 text-sm font-semibold tracking-[0.3em] text-muted uppercase">
                Olá, eu sou
            </p>
            <h1 className="hero-line text-[clamp(2.75rem,10vw,6.5rem)] leading-[0.95] font-extrabold tracking-tight">
                Victor Ramos
            </h1>
            <h2 className="hero-line mt-2 text-[clamp(1.5rem,5vw,3rem)] leading-tight font-light text-muted">
                Desenvolvedor{" "}
                <span className="font-semibold text-accent">Fullstack</span>
            </h2>

            <p className="hero-fade mx-auto mt-8 max-w-xl text-balance">
                Estudante da área de Computação desde 2019. Sempre apaixonado
                por programação e afins, busco agora oportunidades de colocar
                em prática meus conhecimentos obtidos nos últimos anos e
                acrescentar valor por onde passar, enquanto continuo a
                aprender mais e mais!
            </p>

            <div className="hero-fade mt-8 flex flex-wrap items-center justify-center gap-4">
                <Magnetic>
                    <AnchorLink
                        href="#projetos"
                        className="group relative overflow-hidden rounded-full border-2 border-accent bg-accent px-6 py-2.5 font-medium text-background transition-all duration-300 hover:shadow-glow"
                    >
                        <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                            Ver projetos
                        </span>
                    </AnchorLink>
                </Magnetic>
                <Magnetic>
                    <AnchorLink
                        href="#contato"
                        className="rounded-full border-2 border-line px-6 py-2.5 font-medium text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
                    >
                        Fale comigo
                    </AnchorLink>
                </Magnetic>
            </div>

            <div className="hero-fade">
                <HeroSocials />
            </div>

            <div className="hero-fade mt-10 flex justify-center">
                <AnchorLink
                    href="#skills"
                    aria-label="Rolar para a próxima seção"
                    className="animate-bounce text-muted transition-colors hover:text-accent"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </AnchorLink>
            </div>
        </div>
    );
}
