"use client";

import { MouseEvent, ReactNode, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface MagneticProps {
    children: ReactNode;
    strength?: number;
    className?: string;
}

export default function Magnetic({
    children,
    strength = 0.4,
    className,
}: MagneticProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    const { contextSafe } = useGSAP({ scope: ref });

    // contextSafe() is the documented @gsap/react pattern for event-handler-created
    // tweens; the handler only ever runs from onMouseMove, never during render.
    // eslint-disable-next-line react-hooks/refs
    const onMove = contextSafe((event: MouseEvent<HTMLSpanElement>) => {
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
            return;

        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const mx = event.clientX - (rect.left + rect.width / 2);
        const my = event.clientY - (rect.top + rect.height / 2);

        gsap.to(el, {
            x: mx * strength,
            y: my * strength,
            duration: 0.4,
            ease: "power3.out",
        });
        gsap.to(textRef.current, {
            x: mx * strength * 0.4,
            y: my * strength * 0.4,
            duration: 0.4,
            ease: "power3.out",
        });
    });

    // eslint-disable-next-line react-hooks/refs
    const onLeave = contextSafe(() => {
        gsap.to([ref.current, textRef.current], {
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.35)",
        });
    });

    return (
        <span
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className={`inline-block ${className ?? ""}`}
        >
            <span ref={textRef} className="inline-block">
                {children}
            </span>
        </span>
    );
}
