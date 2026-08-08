"use client";

import { ElementType, ReactNode, useRef } from "react";
import { gsap, useGSAP, SplitText, onMotion } from "@/lib/gsap";

interface SplitHeadingProps {
    as?: ElementType;
    className?: string;
    children: ReactNode;
    start?: string;
    /** "lines" revela linha a linha com máscara; "chars" cascateia caractere a caractere */
    variant?: "lines" | "chars";
}

export default function SplitHeading({
    as: Tag = "div",
    className,
    children,
    start = "top 85%",
    variant = "lines",
}: SplitHeadingProps) {
    const ref = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const el = ref.current;
            if (!el) return;

            const mm = gsap.matchMedia();

            onMotion(mm, (reduced) => {
                if (reduced) {
                    gsap.set(el, { opacity: 1 });
                    return;
                }

                let split: ReturnType<typeof SplitText.create> | undefined;

                document.fonts.ready.then(() => {
                    if (!ref.current) return;

                    split = SplitText.create(el, {
                        type:
                            variant === "chars"
                                ? "chars,words,lines"
                                : "lines,words",
                        mask: "lines",
                        autoSplit: true,
                        aria: "auto",
                        onSplit(self) {
                            gsap.set(el, { opacity: 1 });

                            if (variant === "chars") {
                                return gsap.from(self.chars, {
                                    yPercent: 110,
                                    opacity: 0,
                                    duration: 0.8,
                                    ease: "power4.out",
                                    stagger: 0.022,
                                    scrollTrigger: {
                                        trigger: el,
                                        start,
                                        once: true,
                                    },
                                });
                            }

                            return gsap.from(self.lines, {
                                yPercent: 110,
                                duration: 1,
                                ease: "expo.out",
                                stagger: 0.08,
                                scrollTrigger: {
                                    trigger: el,
                                    start,
                                    once: true,
                                },
                            });
                        },
                    });
                });

                return () => split?.revert();
            });
        },
        { scope: ref, dependencies: [variant, start] }
    );

    return (
        <Tag ref={ref} className={`split-heading ${className ?? ""}`}>
            {children}
        </Tag>
    );
}
