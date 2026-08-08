"use client";

import { useRef } from "react";
import { gsap, useGSAP, onMotion } from "@/lib/gsap";

const WORDS = ["Fullstack", "Front-end", "Back-end", "Mobile"];

interface RotatingWordProps {
    className?: string;
}

export default function RotatingWord({ className }: RotatingWordProps) {
    const scope = useRef<HTMLSpanElement>(null);

    useGSAP(
        () => {
            const words = gsap.utils.toArray<HTMLElement>(
                ".rotating-word",
                scope.current
            );
            if (words.length < 2) return;

            const mm = gsap.matchMedia();

            onMotion(mm, (reduced) => {
                if (reduced) {
                    gsap.set(words[0], { yPercent: 0, autoAlpha: 1 });
                    return;
                }

                gsap.set(words, { yPercent: 110, autoAlpha: 0 });
                gsap.set(words[0], { yPercent: 0, autoAlpha: 1 });

                const tl = gsap.timeline({ repeat: -1 });

                words.forEach((word, index) => {
                    const next = words[(index + 1) % words.length];
                    tl.to(
                        word,
                        {
                            yPercent: -110,
                            autoAlpha: 0,
                            duration: 0.45,
                            ease: "power3.in",
                        },
                        "+=2.2"
                    ).fromTo(
                        next,
                        { yPercent: 110, autoAlpha: 0 },
                        {
                            yPercent: 0,
                            autoAlpha: 1,
                            duration: 0.55,
                            ease: "power3.out",
                            // sem isto o fromTo renderiza o estado inicial no
                            // momento em que é CRIADO, não quando toca: os 4
                            // fromTo escondiam a primeira palavra logo depois
                            // do gsap.set acima e o Hero ficava sem palavra
                            immediateRender: false,
                        },
                        "<0.12"
                    );
                });

                return () => tl.kill();
            });
        },
        { scope }
    );

    return (
        // inline-grid com todas as palavras na mesma célula: a largura acompanha
        // a palavra mais longa, sem posicionamento absoluto nem largura fixa
        <span
            ref={scope}
            className={`relative inline-grid overflow-hidden align-bottom ${className ?? ""}`}
        >
            {WORDS.map((word, index) => (
                <span
                    key={word}
                    aria-hidden={index > 0 ? "true" : undefined}
                    className="rotating-word font-semibold whitespace-nowrap text-accent"
                    style={{ gridArea: "1 / 1" }}
                >
                    {word}
                </span>
            ))}
        </span>
    );
}
