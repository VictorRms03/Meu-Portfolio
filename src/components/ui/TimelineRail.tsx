"use client";

import { useRef } from "react";
import { gsap, useGSAP, onMotion } from "@/lib/gsap";

interface TimelineRailProps {
    /** posicionamento do trilho — o pai precisa ser relative */
    className?: string;
}

export default function TimelineRail({ className }: TimelineRailProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<SVGLineElement>(null);

    useGSAP(
        () => {
            if (!lineRef.current) return;
            const mm = gsap.matchMedia();

            onMotion(mm, (reduced) => {
                if (reduced) {
                    gsap.set(lineRef.current, { drawSVG: "100%" });
                    return;
                }

                gsap.fromTo(
                    lineRef.current,
                    { drawSVG: "0%" },
                    {
                        drawSVG: "100%",
                        ease: "none",
                        scrollTrigger: {
                            trigger: containerRef.current?.parentElement,
                            start: "top 78%",
                            end: "bottom 82%",
                            scrub: 0.6,
                        },
                    }
                );
            });
        },
        { scope: containerRef }
    );

    return (
        <div
            ref={containerRef}
            aria-hidden="true"
            className={`pointer-events-none absolute w-[3px] ${className ?? ""}`}
        >
            <svg
                className="h-full w-full overflow-visible"
                viewBox="0 0 2 100"
                preserveAspectRatio="none"
            >
                <defs>
                    {/*
                     * três paradas: uma cor por tipo de experiência.
                     * gradientUnits="userSpaceOnUse" é obrigatório aqui: uma
                     * <line> vertical tem bounding box de largura ZERO, e a
                     * spec manda não pintar gradiente objectBoundingBox (o
                     * padrão) sobre bbox degenerada — o trilho sumia inteiro.
                     */}
                    <linearGradient
                        id="railGrad"
                        gradientUnits="userSpaceOnUse"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="100"
                    >
                        <stop offset="0%" stopColor="var(--accent)" />
                        <stop
                            offset="50%"
                            stopColor="var(--accent-3)"
                            stopOpacity="0.85"
                        />
                        <stop
                            offset="100%"
                            stopColor="var(--accent-2)"
                            stopOpacity="0.6"
                        />
                    </linearGradient>
                </defs>
                <line
                    ref={lineRef}
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="100"
                    stroke="url(#railGrad)"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>
        </div>
    );
}
