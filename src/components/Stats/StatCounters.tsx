"use client";

import { useRef } from "react";
import Odometer from "./Odometer";
import { gsap, useGSAP, onMotion } from "@/lib/gsap";
import { Stat } from "@/data/stats";

/**
 * A fita tem 20 dígitos (dois ciclos de 0-9) e cada dígito ocupa 5% da altura
 * total, então parar no dígito `d` da segunda volta é yPercent -(10 + d) * 5.
 */
const restingY = (_: number, target: Element) =>
    -(10 + Number((target as HTMLElement).dataset.digit ?? 0)) * 5;

interface StatCountersProps {
    stats: Stat[];
}

export default function StatCounters({ stats }: StatCountersProps) {
    const scope = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            onMotion(mm, (reduced) => {
                if (reduced) {
                    gsap.set(".stat-cell", { opacity: 1 });
                    gsap.set(".odometer-strip", { y: 0, yPercent: restingY });
                    gsap.set(".stat-rule", { scaleX: 1 });
                    return;
                }

                const trigger = {
                    trigger: scope.current,
                    start: "top 78%",
                    once: true,
                };

                gsap.fromTo(
                    ".stat-cell",
                    { opacity: 0, y: 28 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.09,
                        ease: "power3.out",
                        scrollTrigger: trigger,
                    }
                );

                gsap.fromTo(
                    ".odometer-strip",
                    // y: 0 é obrigatório aqui. A fita carrega um transform
                    // inline (a posição de repouso para quem está sem JS) que o
                    // GSAP absorve como deslocamento base e SOMA ao yPercent —
                    // o resultado era o dobro do deslocamento e a fita parava
                    // depois do último dígito, mostrando vazio.
                    { y: 0, yPercent: 0 },
                    {
                        y: 0,
                        yPercent: restingY,
                        duration: 1.8,
                        stagger: 0.12,
                        ease: "power4.out",
                        scrollTrigger: trigger,
                    }
                );

                gsap.fromTo(
                    ".stat-rule",
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        duration: 1.4,
                        stagger: 0.12,
                        ease: "power3.out",
                        scrollTrigger: trigger,
                    }
                );
            });
        },
        { scope }
    );

    return (
        <div
            ref={scope}
            className="mx-auto grid w-full max-w-11/12 grid-cols-2 gap-y-4 px-6 py-16 md:max-w-9/12 md:grid-cols-4 md:gap-y-0"
        >
            {stats.map((stat, index) => (
                <div
                    key={stat.label}
                    className={`stat-cell relative flex flex-col items-center gap-3 px-2 pt-6 pb-8 text-center md:px-6 ${
                        index > 0 ? "md:border-l md:border-line" : ""
                    }`}
                >
                    <span className="flex items-baseline text-[clamp(2.75rem,7vw,5rem)] leading-none font-extrabold text-accent">
                        <Odometer value={stat.value} />
                        {stat.suffix && <span>{stat.suffix}</span>}
                    </span>
                    <span className="max-w-[18ch] text-sm text-muted">
                        {stat.label}
                    </span>
                    <span
                        aria-hidden="true"
                        className="stat-rule absolute inset-x-4 bottom-0 h-px origin-left bg-accent/40 md:inset-x-6"
                    />
                </div>
            ))}
        </div>
    );
}
