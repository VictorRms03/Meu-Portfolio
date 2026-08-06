"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { stats } from "@/data/stats";

export default function StatCounters() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: reduce)", () => {
                stats.forEach((stat, i) => {
                    const el = numberRefs.current[i];
                    if (el) el.textContent = String(stat.value);
                });
            });

            mm.add(
                {
                    isDesktop:
                        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
                    isMobile:
                        "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
                },
                (context) => {
                    const isDesktop = Boolean(context.conditions?.isDesktop);

                    if (isDesktop) {
                        const tl = gsap.timeline({
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top top",
                                end: () => "+=" + window.innerHeight * 0.9,
                                pin: true,
                                scrub: 1,
                                anticipatePin: 1,
                                invalidateOnRefresh: true,
                            },
                        });

                        stats.forEach((stat, i) => {
                            const proxy = { v: 0 };
                            const el = numberRefs.current[i];
                            tl.to(
                                proxy,
                                {
                                    v: stat.value,
                                    duration: 1,
                                    snap: { v: 1 },
                                    onUpdate: () => {
                                        if (el)
                                            el.textContent = String(
                                                Math.round(proxy.v)
                                            );
                                    },
                                },
                                i * 0.15
                            );
                        });

                        return () => tl.kill();
                    }

                    const tweens = stats.map((stat, i) => {
                        const proxy = { v: 0 };
                        const el = numberRefs.current[i];
                        return gsap.to(proxy, {
                            v: stat.value,
                            duration: 1.4,
                            snap: { v: 1 },
                            onUpdate: () => {
                                if (el)
                                    el.textContent = String(
                                        Math.round(proxy.v)
                                    );
                            },
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top 80%",
                                once: true,
                            },
                        });
                    });

                    return () => tweens.forEach((t) => t.kill());
                }
            );
        },
        { scope: sectionRef }
    );

    return (
        <div
            ref={sectionRef}
            className="mx-auto grid w-full max-w-11/12 md:max-w-9/12 grid-cols-2 gap-y-10 gap-x-8 px-6 py-20 md:grid-cols-4 md:gap-6"
        >
            {stats.map((stat, i) => (
                <div
                    key={stat.label}
                    className="flex flex-col items-center gap-2 text-center"
                >
                    <span className="flex items-baseline gap-0.5 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-accent">
                        <span
                            ref={(el) => {
                                numberRefs.current[i] = el;
                            }}
                        >
                            0
                        </span>
                        {stat.suffix && <span>{stat.suffix}</span>}
                    </span>
                    <span className="text-sm text-muted">{stat.label}</span>
                </div>
            ))}
        </div>
    );
}
