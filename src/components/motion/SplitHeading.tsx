"use client";

import { ElementType, ReactNode, useRef } from "react";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";

interface SplitHeadingProps {
    as?: ElementType;
    className?: string;
    children: ReactNode;
    start?: string;
}

export default function SplitHeading({
    as: Tag = "div",
    className,
    children,
    start = "top 85%",
}: SplitHeadingProps) {
    const ref = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const el = ref.current;
            if (!el) return;

            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: reduce)", () => {
                gsap.set(el, { opacity: 1 });
            });

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                let split: ReturnType<typeof SplitText.create> | undefined;

                document.fonts.ready.then(() => {
                    if (!ref.current) return;
                    split = SplitText.create(el, {
                        type: "lines,words",
                        mask: "lines",
                        autoSplit: true,
                        aria: "auto",
                        onSplit(self) {
                            gsap.set(el, { opacity: 1 });
                            return gsap.from(self.lines, {
                                yPercent: 110,
                                duration: 1,
                                ease: "expo.out",
                                stagger: 0.08,
                                scrollTrigger: { trigger: el, start, once: true },
                            });
                        },
                    });
                });

                return () => split?.revert();
            });
        },
        { scope: ref }
    );

    return (
        <Tag ref={ref} className={`split-heading ${className ?? ""}`}>
            {children}
        </Tag>
    );
}
