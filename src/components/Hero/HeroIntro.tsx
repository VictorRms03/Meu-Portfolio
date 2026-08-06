"use client";

import { useRef } from "react";
import HeroMeta from "./HeroMeta";
import RotatingWord from "./RotatingWord";
import ActionButton from "@/components/ui/ActionButton";
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

                // fromTo (e não from): `.hero-fade` começa em opacity:0 pelo CSS,
                // então um gsap.from leria 0 como estado final e nada apareceria
                gsap.fromTo(
                    ".hero-fade",
                    { opacity: 0, y: 24 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.9,
                        stagger: 0.09,
                        delay: 0.5,
                        ease: "power3.out",
                    }
                );

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
        <div ref={scope} className="relative z-10 flex w-full flex-1 flex-col">
            <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-12 text-center">
                <span className="hero-fade inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-wide text-muted">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Disponível para novas oportunidades
                </span>

                <p className="hero-fade mt-6 mb-3 text-sm font-semibold tracking-[0.3em] text-muted uppercase">
                    Olá, eu sou
                </p>

                <h1 className="hero-line text-[clamp(2.75rem,10vw,6.5rem)] leading-[0.95] font-extrabold tracking-tight">
                    Victor Ramos
                </h1>

                <h2 className="mt-3 flex flex-wrap items-baseline justify-center gap-x-3 text-[clamp(1.5rem,5vw,3rem)] leading-tight font-light text-muted">
                    <span className="hero-line">Desenvolvedor</span>
                    <RotatingWord className="hero-fade" />
                </h2>

                <p className="hero-fade mx-auto mt-8 max-w-lg text-balance text-muted">
                    Na área de Computação desde 2019. Busco oportunidades para
                    colocar em prática o que aprendi e acrescentar valor por
                    onde passar.
                </p>

                <div className="hero-fade mt-10 flex flex-wrap items-center justify-center gap-4">
                    <ActionButton href="#projetos">Ver projetos</ActionButton>
                    <ActionButton href="#contato" variant="outline">
                        Fale comigo
                    </ActionButton>
                </div>
            </div>

            <HeroMeta />
        </div>
    );
}
