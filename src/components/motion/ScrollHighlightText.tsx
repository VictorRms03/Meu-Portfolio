"use client";

import { ReactNode, useRef } from "react";
import { gsap, useGSAP, SplitText, onMotion } from "@/lib/gsap";

interface ScrollHighlightTextProps {
    children: ReactNode;
    className?: string;
}

/**
 * O texto acende palavra a palavra conforme você rola por ele.
 * Só opacity — barato de compor e não força reflow.
 */
export default function ScrollHighlightText({
    children,
    className,
}: ScrollHighlightTextProps) {
    const ref = useRef<HTMLParagraphElement>(null);

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
                    gsap.set(el, { opacity: 1 });

                    split = SplitText.create(el, {
                        type: "words",
                        autoSplit: true,
                        aria: "auto",
                        onSplit(self) {
                            return gsap.fromTo(
                                self.words,
                                { opacity: 0.22 },
                                {
                                    opacity: 1,
                                    duration: 1,
                                    stagger: 0.35,
                                    ease: "none",
                                    scrollTrigger: {
                                        trigger: el,
                                        start: "top 82%",
                                        end: "bottom 58%",
                                        scrub: true,
                                    },
                                }
                            );
                        },
                    });
                });

                return () => split?.revert();
            });
        },
        { scope: ref }
    );

    return (
        <p ref={ref} className={`highlight-text ${className ?? ""}`}>
            {children}
        </p>
    );
}
