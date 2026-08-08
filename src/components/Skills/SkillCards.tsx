"use client";

import Image from "next/image";
import { CSSProperties, useRef, useState } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { skills, Skill } from "@/data/skills";

function SkillCard({ iconPath, hoverIconPath, name, color }: Skill) {
    const altSkill: string = "icone " + name.toLowerCase();
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(true);
        setTimeout(() => setActive(false), 500);
    };

    return (
        <div
            onClick={handleClick}
            style={{ "--brand": color } as CSSProperties}
            className={`skill-card group relative flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-2xl glass transition-[border-color,box-shadow] duration-300 hover:border-[var(--brand)] hover:shadow-[0_0_44px_-14px_var(--brand)] ${
                active ? "border-[var(--brand)]" : ""
            }`}
        >
            {/* brilho que acompanha o ponteiro dentro do card */}
            <span
                aria-hidden="true"
                className="skill-sheen pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background:
                        "radial-gradient(circle 8rem at var(--sx, 50%) var(--sy, 50%), color-mix(in oklab, var(--brand) 26%, transparent), transparent)",
                }}
            />

            <div className="relative h-12 w-12 lg:h-14 lg:w-14">
                <Image
                    src={iconPath}
                    alt={altSkill}
                    width={60}
                    height={60}
                    className={`h-12 w-12 invert transition-opacity duration-300 lg:h-14 lg:w-14 ${
                        hoverIconPath
                            ? `group-hover:opacity-0 ${active ? "opacity-0" : ""}`
                            : ""
                    }`}
                />
                {hoverIconPath && (
                    <Image
                        src={hoverIconPath}
                        alt=""
                        aria-hidden="true"
                        width={60}
                        height={60}
                        className={`absolute inset-0 h-12 w-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:h-14 lg:w-14 ${
                            active ? "opacity-100" : ""
                        }`}
                    />
                )}
            </div>

            <h3 className="relative mt-5 text-sm font-bold sm:text-base">
                {name}
            </h3>
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

            // tilt 3D: UM listener delegado na grade, não dois por card
            mm.add(
                "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
                () => {
                    const grid = ref.current;
                    if (!grid) return;

                    const cards = gsap.utils
                        .toArray<HTMLElement>(".skill-card", grid)
                        .map((card) => ({
                            el: card,
                            sheen: card.querySelector<HTMLElement>(
                                ".skill-sheen"
                            ),
                            // quickTo reaproveita o mesmo tween a cada movimento
                            rx: gsap.quickTo(card, "rotationX", {
                                duration: 0.5,
                                ease: "power3",
                            }),
                            ry: gsap.quickTo(card, "rotationY", {
                                duration: 0.5,
                                ease: "power3",
                            }),
                        }));

                    let current: (typeof cards)[number] | null = null;

                    const release = (card: (typeof cards)[number]) => {
                        card.rx(0);
                        card.ry(0);
                        gsap.to(card.el, {
                            y: 0,
                            scale: 1,
                            duration: 0.6,
                            ease: "power3.out",
                        });
                    };

                    const onMove = (event: PointerEvent) => {
                        const hovered = (event.target as HTMLElement | null)
                            ?.closest(".skill-card") as HTMLElement | null;
                        const entry =
                            cards.find((card) => card.el === hovered) ?? null;

                        if (current && current !== entry) release(current);

                        if (!entry) {
                            current = null;
                            return;
                        }

                        if (current !== entry) {
                            current = entry;
                            gsap.to(entry.el, {
                                y: -10,
                                scale: 1.05,
                                duration: 0.4,
                                ease: "power3.out",
                            });
                        }

                        const rect = entry.el.getBoundingClientRect();
                        const px = (event.clientX - rect.left) / rect.width;
                        const py = (event.clientY - rect.top) / rect.height;

                        entry.ry((px - 0.5) * 18);
                        entry.rx((0.5 - py) * 18);

                        // setProperty direto: mais barato que um gsap.set por frame
                        entry.sheen?.style.setProperty("--sx", `${px * 100}%`);
                        entry.sheen?.style.setProperty("--sy", `${py * 100}%`);
                    };

                    const onLeave = () => {
                        if (current) release(current);
                        current = null;
                    };

                    grid.addEventListener("pointermove", onMove, {
                        passive: true,
                    });
                    grid.addEventListener("pointerleave", onLeave);

                    return () => {
                        grid.removeEventListener("pointermove", onMove);
                        grid.removeEventListener("pointerleave", onLeave);
                    };
                }
            );

            // deriva leve no scroll, só no desktop. Um scrub próprio em vez de
            // data-speed: o ScrollSmoother varre os data-speed na criação dele,
            // que roda depois deste efeito (React monta os filhos primeiro)
            mm.add(
                "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
                () => {
                    const tweens = gsap.utils
                        .toArray<HTMLElement>(".skill-slot", ref.current)
                        .map((slot, index) => {
                            const drift = index % 2 === 0 ? 22 : -22;
                            return gsap.fromTo(
                                slot,
                                { y: drift },
                                {
                                    y: -drift,
                                    ease: "none",
                                    scrollTrigger: {
                                        trigger: ref.current,
                                        start: "top bottom",
                                        end: "bottom top",
                                        scrub: true,
                                    },
                                }
                            );
                        });

                    return () => tweens.forEach((tween) => tween.kill());
                }
            );
        },
        { scope: ref }
    );

    return (
        <div
            ref={ref}
            className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-5 px-6 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 lg:gap-8"
        >
            {skills.map((skill, index) => (
                <div
                    key={skill.name}
                    // margin (e não translate) para o escalonamento: transform
                    // aqui é território exclusivo do GSAP.
                    // perspective em CSS porque o clearProps do reveal apagaria
                    // um transformPerspective aplicado pelo GSAP
                    style={{ perspective: "800px" }}
                    className={`skill-slot ${index % 2 === 1 ? "lg:mt-12" : ""}`}
                >
                    <SkillCard {...skill} />
                </div>
            ))}
        </div>
    );
}
