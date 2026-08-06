"use client";

import { ReactNode, useRef } from "react";
import {
    gsap,
    useGSAP,
    ScrollSmoother,
    ScrollTrigger,
    HEADER_OFFSET,
} from "@/lib/gsap";

interface SmoothScrollProps {
    children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const wrapper = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(prefers-reduced-motion: no-preference)", () => {
            const smoother = ScrollSmoother.create({
                wrapper: wrapper.current,
                content: wrapper.current?.firstElementChild,
                smooth: 1.2,
                effects: true,
                smoothTouch: 0,
                normalizeScroll: false,
                ignoreMobileResize: true,
            });

            const hash = window.location.hash;
            if (hash.length > 1) {
                const target = document.querySelector(hash);
                if (target) {
                    smoother.scrollTo(target, false, `top ${HEADER_OFFSET}px`);
                }
            }

            return () => smoother.kill();
        });

        const onLoad = () => ScrollTrigger.refresh();
        window.addEventListener("load", onLoad);
        document.fonts?.ready.then(() => ScrollTrigger.refresh());

        return () => window.removeEventListener("load", onLoad);
    });

    return (
        <div id="smooth-wrapper" ref={wrapper}>
            <div id="smooth-content">{children}</div>
        </div>
    );
}
