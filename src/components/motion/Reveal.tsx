"use client";

import { ElementType, ReactNode, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface RevealProps {
    children: ReactNode;
    as?: ElementType;
    className?: string;
    y?: number;
    x?: number;
    delay?: number;
    stagger?: number;
    start?: string;
    /** anima os filhos diretos em vez do próprio wrapper (usar com [data-reveal-child] no CSS) */
    childrenSelector?: string;
}

export default function Reveal({
    children,
    as: Tag = "div",
    className,
    y = 32,
    x = 0,
    delay = 0,
    stagger = 0,
    start = "top 85%",
    childrenSelector,
}: RevealProps) {
    const scope = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const el = scope.current;
            if (!el) return;

            const targets = childrenSelector
                ? gsap.utils.toArray<HTMLElement>(childrenSelector, el)
                : [el];

            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: reduce)", () => {
                gsap.set(targets, { opacity: 1, x: 0, y: 0 });
            });

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                gsap.fromTo(
                    targets,
                    { opacity: 0, y, x },
                    {
                        opacity: 1,
                        y: 0,
                        x: 0,
                        duration: 1,
                        delay,
                        stagger,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start,
                            once: true,
                        },
                    }
                );
            });
        },
        { scope, dependencies: [y, x, delay, stagger, start, childrenSelector] }
    );

    return (
        <Tag
            ref={scope}
            className={className}
            data-reveal={childrenSelector ? undefined : ""}
            data-reveal-child={childrenSelector ? "" : undefined}
        >
            {children}
        </Tag>
    );
}
