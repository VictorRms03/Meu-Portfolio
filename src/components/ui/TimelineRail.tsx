"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function TimelineRail() {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<SVGLineElement>(null);

    useGSAP(
        () => {
            if (!lineRef.current) return;
            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: reduce)", () => {
                gsap.set(lineRef.current, { drawSVG: "100%" });
            });

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                gsap.fromTo(
                    lineRef.current,
                    { drawSVG: "0%" },
                    {
                        drawSVG: "100%",
                        ease: "none",
                        scrollTrigger: {
                            trigger: containerRef.current?.parentElement,
                            start: "top 75%",
                            end: "bottom 85%",
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
            className="pointer-events-none absolute top-1 bottom-1 left-4 w-px -translate-x-1/2"
        >
            <svg
                className="h-full w-full overflow-visible"
                viewBox="0 0 2 100"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="railGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
                        <stop
                            offset="100%"
                            stopColor="var(--accent)"
                            stopOpacity="0.15"
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
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>
        </div>
    );
}
