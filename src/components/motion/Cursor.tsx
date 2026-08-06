"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Cursor() {
    const ringRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add(
            "(hover: hover) and (pointer: fine) and (min-width: 1024px)",
            () => {
                const ring = ringRef.current;
                const dot = dotRef.current;
                if (!ring || !dot) return;

                document.documentElement.classList.add("has-cursor");

                const ringX = gsap.quickTo(ring, "x", {
                    duration: 0.55,
                    ease: "power3",
                });
                const ringY = gsap.quickTo(ring, "y", {
                    duration: 0.55,
                    ease: "power3",
                });
                const dotX = gsap.quickTo(dot, "x", {
                    duration: 0.12,
                    ease: "power3",
                });
                const dotY = gsap.quickTo(dot, "y", {
                    duration: 0.12,
                    ease: "power3",
                });

                const onMove = (event: PointerEvent) => {
                    ringX(event.clientX);
                    ringY(event.clientY);
                    dotX(event.clientX);
                    dotY(event.clientY);
                };

                const onOver = (event: PointerEvent) => {
                    const target = event.target as HTMLElement;
                    const interactive = target.closest(
                        "a, button, [data-cursor]"
                    );
                    gsap.to(ring, {
                        scale: interactive ? 2.5 : 1,
                        duration: 0.3,
                        ease: "power3.out",
                    });
                    gsap.to(dot, {
                        opacity: interactive ? 0 : 1,
                        duration: 0.2,
                    });
                };

                window.addEventListener("pointermove", onMove);
                window.addEventListener("pointerover", onOver);

                return () => {
                    document.documentElement.classList.remove("has-cursor");
                    window.removeEventListener("pointermove", onMove);
                    window.removeEventListener("pointerover", onOver);
                };
            }
        );
    }, []);

    return (
        <>
            <div
                ref={ringRef}
                aria-hidden="true"
                className="pointer-events-none fixed top-0 left-0 z-[90] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent opacity-0 mix-blend-difference [.has-cursor_&]:opacity-100"
            />
            <div
                ref={dotRef}
                aria-hidden="true"
                className="pointer-events-none fixed top-0 left-0 z-[90] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent opacity-0 [.has-cursor_&]:opacity-100"
            />
        </>
    );
}
