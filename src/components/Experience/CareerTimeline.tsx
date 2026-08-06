"use client";

import { useRef } from "react";
import TimelineItem from "./TimelineItem";
import TimelineRail from "@/components/ui/TimelineRail";
import { gsap, useGSAP, onMotion } from "@/lib/gsap";
import { timeline } from "@/data/experience";

/** no desktop o card entra pelo próprio lado; no mobile, um deslocamento único */
const entryOffset = (_: number, target: Element) =>
    window.matchMedia("(min-width: 768px)").matches
        ? (target as HTMLElement).dataset.side === "left"
            ? -56
            : 56
        : 28;

export default function CareerTimeline() {
    const scope = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            onMotion(mm, (reduced) => {
                if (reduced) {
                    gsap.set(".entry-card", { opacity: 1 });
                    gsap.set(".entry-dot", { opacity: 1, scale: 1 });
                    return;
                }

                gsap.utils
                    .toArray<HTMLElement>(".entry-dot", scope.current)
                    .forEach((dot) => {
                        gsap.fromTo(
                            dot,
                            { opacity: 0, scale: 0 },
                            {
                                opacity: 1,
                                scale: 1,
                                duration: 0.6,
                                ease: "back.out(2)",
                                scrollTrigger: {
                                    trigger: dot,
                                    start: "top 80%",
                                    once: true,
                                },
                            }
                        );
                    });

                gsap.utils
                    .toArray<HTMLElement>(".entry-card", scope.current)
                    .forEach((card) => {
                        gsap.fromTo(
                            card,
                            { opacity: 0, x: entryOffset },
                            {
                                opacity: 1,
                                x: 0,
                                duration: 0.9,
                                ease: "power3.out",
                                scrollTrigger: {
                                    trigger: card,
                                    start: "top 85%",
                                    once: true,
                                },
                            }
                        );
                    });
            });
        },
        { scope }
    );

    return (
        <div ref={scope} className="relative flex flex-col gap-8">
            <TimelineRail className="top-2 bottom-2 left-6 -translate-x-1/2 md:left-1/2" />

            {timeline.map((entry, index) => (
                <TimelineItem
                    key={entry.title}
                    entry={entry}
                    isLeft={index % 2 === 0}
                    showYear={
                        index === 0 || timeline[index - 1].year !== entry.year
                    }
                />
            ))}
        </div>
    );
}
