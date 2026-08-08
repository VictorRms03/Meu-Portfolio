"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollSmoother } from "@/lib/gsap";
import { useMotion } from "@/components/providers/MotionProvider";

const PANELS = 5;

export default function Preloader() {
    const numRef = useRef<HTMLSpanElement>(null);
    const { setIntroDone } = useMotion();

    useGSAP(() => {
        const preloaderEl = document.getElementById("preloader");

        const finish = () => {
            setIntroDone(true);
            gsap.set(preloaderEl, { display: "none" });
            gsap.delayedCall(0, () => ScrollSmoother.get()?.paused(false));
        };

        if (sessionStorage.getItem("intro-seen") === "1") {
            finish();
            return;
        }

        const mm = gsap.matchMedia();

        mm.add("(prefers-reduced-motion: reduce)", () => {
            sessionStorage.setItem("intro-seen", "1");
            finish();
        });

        mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.delayedCall(0, () => ScrollSmoother.get()?.paused(true));

            const safety = gsap.delayedCall(6, () => {
                sessionStorage.setItem("intro-seen", "1");
                finish();
            });

            const counter = { value: 0 };

            gsap
                .timeline({
                    onComplete: () => {
                        safety.kill();
                        sessionStorage.setItem("intro-seen", "1");
                        finish();
                    },
                })
                .to(counter, {
                    value: 100,
                    duration: 1.1,
                    ease: "power2.inOut",
                    snap: { value: 1 },
                    onUpdate: () => {
                        if (numRef.current) {
                            numRef.current.textContent = String(
                                counter.value
                            ).padStart(3, "0");
                        }
                    },
                })
                .to(".preloader-ui", { autoAlpha: 0, duration: 0.3 })
                .to(
                    ".curtain",
                    {
                        yPercent: -100,
                        duration: 0.9,
                        ease: "expo.inOut",
                        stagger: 0.06,
                    },
                    "<"
                );
        });
    }, []);

    return (
        <div
            id="preloader"
            className="fixed inset-0 z-[100]"
            style={{ backgroundColor: "var(--bg)" }}
        >
            <div className="preloader-ui absolute inset-0 flex items-end justify-between p-8">
                <span className="text-sm font-semibold tracking-[0.3em] text-muted uppercase">
                    Victor Ramos
                </span>
                <span
                    ref={numRef}
                    className="font-mono text-[clamp(2.5rem,8vw,5rem)] font-extrabold tracking-tight text-foreground tabular-nums"
                >
                    000
                </span>
            </div>
            <div className="absolute inset-0 flex">
                {Array.from({ length: PANELS }).map((_, index) => (
                    <div
                        key={index}
                        className="curtain h-full flex-1"
                        style={{
                            backgroundColor: "var(--bg)",
                            borderRight:
                                index < PANELS - 1
                                    ? "1px solid var(--line)"
                                    : undefined,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
