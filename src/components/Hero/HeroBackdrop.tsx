"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/** ruído estático em SVG: rasteriza uma vez e nunca mais custa nada */
const GRAIN =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const GRID_MASK =
    "radial-gradient(ellipse 75% 60% at 50% 45%, #000 15%, transparent 78%)";

export default function HeroBackdrop() {
    const scope = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add(
                "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
                () => {
                    // xPercent/yPercent/scale não colidem com o `y` que o
                    // ScrollSmoother escreve via data-speed
                    gsap.utils
                        .toArray<HTMLElement>(".hero-aurora", scope.current)
                        .forEach((el, index) => {
                            const dir = index === 0 ? 1 : -1;
                            gsap.to(el, {
                                xPercent: 14 * dir,
                                yPercent: -9 * dir,
                                scale: index === 0 ? 1.15 : 0.88,
                                duration: 16 + index * 5,
                                ease: "sine.inOut",
                                repeat: -1,
                                yoyo: true,
                            });
                        });
                }
            );
        },
        { scope }
    );

    return (
        <div
            ref={scope}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
            {/* grade técnica, dissolvida nas bordas por máscara radial */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
                    backgroundSize: "72px 72px",
                    maskImage: GRID_MASK,
                    WebkitMaskImage: GRID_MASK,
                }}
            />

            {/* aurora: radial-gradient em vez de filter: blur */}
            <div
                className="hero-aurora absolute top-[8%] left-[12%] h-[38rem] w-[38rem]"
                data-speed="0.85"
                style={{
                    background:
                        "radial-gradient(circle closest-side, color-mix(in oklab, var(--accent) 26%, transparent), transparent)",
                }}
            />
            <div
                className="hero-aurora absolute right-[6%] bottom-[4%] h-[32rem] w-[32rem]"
                data-speed="1.12"
                style={{
                    background:
                        "radial-gradient(circle closest-side, color-mix(in oklab, var(--accent-2) 20%, transparent), transparent)",
                }}
            />

            {/* grão */}
            <div
                className="absolute inset-0 opacity-[0.035]"
                style={{ backgroundImage: GRAIN }}
            />
        </div>
    );
}
