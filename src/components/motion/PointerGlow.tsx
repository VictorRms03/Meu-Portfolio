"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Luz suave que acompanha o ponteiro, iluminando o fundo escuro.
 * Só transform (via quickTo, que reaproveita os tweens em vez de alocar um por
 * evento) e um radial-gradient — sem mix-blend e sem filter: blur, que são os
 * dois efeitos que forçam recomposição de tela cheia a cada frame.
 */
export default function PointerGlow() {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add(
            "(hover: hover) and (pointer: fine) and (min-width: 1024px) and (prefers-reduced-motion: no-preference)",
            () => {
                const el = ref.current;
                if (!el) return;

                // xPercent/yPercent centraliza o gradiente no ponteiro sem depender
                // de uma classe translate, que o GSAP sobrescreveria ao animar x/y
                gsap.set(el, { xPercent: -50, yPercent: -50 });

                const xTo = gsap.quickTo(el, "x", {
                    duration: 0.6,
                    ease: "power3",
                });
                const yTo = gsap.quickTo(el, "y", {
                    duration: 0.6,
                    ease: "power3",
                });

                let revealed = false;

                const onMove = (event: PointerEvent) => {
                    if (!revealed) {
                        revealed = true;
                        gsap.set(el, { x: event.clientX, y: event.clientY });
                        gsap.to(el, { autoAlpha: 1, duration: 0.8 });
                    }
                    xTo(event.clientX);
                    yTo(event.clientY);
                };

                window.addEventListener("pointermove", onMove, {
                    passive: true,
                });

                return () => {
                    window.removeEventListener("pointermove", onMove);
                    gsap.set(el, { autoAlpha: 0 });
                };
            }
        );
    }, []);

    return (
        <div
            ref={ref}
            aria-hidden="true"
            className="pointer-events-none fixed top-0 left-0 -z-40 h-[40rem] w-[40rem] opacity-0 will-change-transform"
            style={{
                background:
                    "radial-gradient(circle closest-side, color-mix(in oklab, var(--accent) 22%, transparent), transparent)",
            }}
        />
    );
}
