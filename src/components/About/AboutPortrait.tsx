"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP, onMotion } from "@/lib/gsap";

export default function AboutPortrait() {
    const scope = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            onMotion(mm, (reduced) => {
                if (reduced) {
                    gsap.set(".portrait-clip", { clipPath: "inset(0%)" });
                    return;
                }

                gsap.fromTo(
                    ".portrait-clip",
                    { clipPath: "inset(100% 0% 0% 0%)" },
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 1.3,
                        ease: "power4.inOut",
                        scrollTrigger: {
                            trigger: scope.current,
                            start: "top 82%",
                            once: true,
                        },
                    }
                );

                gsap.to(".portrait-ring", {
                    rotation: 360,
                    duration: 40,
                    ease: "none",
                    repeat: -1,
                });

                gsap.fromTo(
                    scope.current,
                    { y: 28 },
                    {
                        y: -28,
                        ease: "none",
                        scrollTrigger: {
                            trigger: scope.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        },
                    }
                );
            });
        },
        { scope }
    );

    return (
        <div ref={scope} className="relative shrink-0">
            {/* radial-gradient no lugar de filter: blur */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -bottom-12 h-80 w-80 md:h-[26rem] md:w-[26rem]"
                style={{
                    background:
                        "radial-gradient(circle closest-side, color-mix(in oklab, var(--accent) 32%, transparent), transparent)",
                }}
            />

            {/* anel tracejado girando devagar — só transform, custo desprezível */}
            <svg
                aria-hidden="true"
                className="portrait-ring pointer-events-none absolute -inset-5"
                viewBox="0 0 100 100"
            >
                <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="var(--accent)"
                    strokeOpacity="0.35"
                    strokeWidth="0.4"
                    strokeDasharray="3 5"
                />
            </svg>

            <div className="portrait-clip relative h-64 w-64 overflow-hidden rounded-full border-4 border-accent/30 shadow-xl md:h-80 md:w-80">
                <Image
                    src="/images/victorRamos2.jpg"
                    alt="Foto de Victor Ramos"
                    fill
                    quality={70}
                    sizes="(min-width: 768px) 320px, 256px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>
        </div>
    );
}
