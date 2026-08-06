"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { skills } from "@/data/skills";

interface SkillCardProps {
    iconPath: string;
    hoverIconPath?: string;
    name: string;
}

function SkillCard({ iconPath, hoverIconPath, name }: SkillCardProps) {
    const altSkill: string = "icone " + name.toLowerCase();
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(true);
        setTimeout(() => setActive(false), 500);
    };

    return (
        <div
            onClick={handleClick}
            className={`skill-card w-34 h-34 xl:w-44 xl:h-44 flex flex-col items-center
            justify-center rounded-2xl glass group hover:bg-accent
            hover:text-background transition-all duration-300 hover:-translate-y-2 hover:scale-105
            hover:shadow-glow ${
                active
                    ? "bg-accent text-background -translate-y-2 scale-105 shadow-glow"
                    : ""
            }`}
        >
            <div className="relative w-14 h-14 lg:w-15 lg:h-15">
                <Image
                    src={iconPath}
                    alt={altSkill}
                    width={60}
                    height={60}
                    className={`w-14 h-14 lg:w-15 lg:h-15 invert transition-opacity duration-300 ${
                        hoverIconPath
                            ? `group-hover:opacity-0 ${active ? "opacity-0" : ""}`
                            : `group-hover:invert-0 ${active ? "invert-0" : ""}`
                    }`}
                />
                {hoverIconPath && (
                    <Image
                        src={hoverIconPath}
                        alt=""
                        aria-hidden="true"
                        width={60}
                        height={60}
                        className={`absolute inset-0 w-14 h-14 lg:w-15 lg:h-15 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                            active ? "opacity-100" : ""
                        }`}
                    />
                )}
            </div>
            <h3 className="text-base mt-6 font-bold"> {name} </h3>
        </div>
    );
}

export default function SkillCards() {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: reduce)", () => {
                gsap.set(".skill-card", { opacity: 1 });
            });

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                ScrollTrigger.batch(".skill-card", {
                    start: "top 88%",
                    once: true,
                    onEnter: (batch) =>
                        gsap.fromTo(
                            batch,
                            { opacity: 0, y: 24, scale: 0.94 },
                            {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                duration: 0.8,
                                ease: "back.out(1.5)",
                                stagger: { each: 0.07, from: "start" },
                                overwrite: true,
                                clearProps: "transform",
                            }
                        ),
                });
            });
        },
        { scope: ref }
    );

    return (
        <div ref={ref} className="flex justify-center items-center mt-16">
            <div className="flex flex-wrap justify-center gap-5 sm:gap-6 md:gap-10 xl:gap-12 max-w-5xl">
                {skills.map((skill) => (
                    <SkillCard
                        key={skill.name}
                        iconPath={skill.iconPath}
                        hoverIconPath={skill.hoverIconPath}
                        name={skill.name}
                    />
                ))}
            </div>
        </div>
    );
}
