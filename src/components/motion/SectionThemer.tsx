"use client";

import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { sectionThemes } from "@/data/sections";

export default function SectionThemer() {
    useGSAP(() => {
        const backdrop = document.getElementById("page-backdrop");
        if (!backdrop) return;

        sectionThemes.forEach((theme) => {
            const el = document.getElementById(theme.id);
            if (!el) return;

            const apply = () =>
                gsap.to(backdrop, {
                    backgroundColor: theme.bg,
                    duration: 0.8,
                    ease: "power2.out",
                    overwrite: "auto",
                });

            ScrollTrigger.create({
                trigger: el,
                start: "top 60%",
                end: "bottom 60%",
                onEnter: apply,
                onEnterBack: apply,
                refreshPriority: -1,
            });
        });
    }, []);

    return null;
}
