"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { skills } from "@/data/skills";

const items = ["Desenvolvedor Fullstack", ...skills.map((skill) => skill.name)];

function MarqueeRow({ hidden }: { hidden?: boolean }) {
    return (
        <div
            className="marquee-row flex shrink-0 items-center gap-10 pr-10"
            aria-hidden={hidden}
        >
            {items.map((item, index) => (
                <span
                    key={index}
                    className="flex items-center gap-10 text-[clamp(2rem,6vw,4.5rem)] font-extrabold whitespace-nowrap"
                >
                    <span className="text-transparent [-webkit-text-stroke:1.5px_var(--accent)]">
                        {item}
                    </span>
                    <span className="text-accent">✦</span>
                </span>
            ))}
        </div>
    );
}

export default function Marquee() {
    const scope = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                const loop = gsap.to(".marquee-row", {
                    xPercent: -100,
                    repeat: -1,
                    duration: 30,
                    ease: "none",
                    modifiers: { xPercent: gsap.utils.wrap(-100, 0) },
                });

                const trigger = ScrollTrigger.create({
                    onUpdate: (self) => {
                        const v = gsap.utils.clamp(-6, 6, self.getVelocity() / 300);
                        gsap.to(loop, {
                            timeScale: v === 0 ? 1 : v,
                            duration: 0.5,
                            overwrite: true,
                        });
                    },
                });

                return () => {
                    loop.kill();
                    trigger.kill();
                };
            });
        },
        { scope }
    );

    return (
        <div ref={scope} className="overflow-hidden border-y border-line py-6">
            <div className="flex w-max">
                <MarqueeRow />
                <MarqueeRow hidden />
            </div>
        </div>
    );
}
