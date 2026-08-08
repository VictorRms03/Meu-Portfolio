"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(
    useGSAP,
    ScrollTrigger,
    ScrollSmoother,
    ScrollToPlugin,
    SplitText,
    DrawSVGPlugin
);

gsap.defaults({ ease: "power3.out", duration: 0.9 });

export const HEADER_OFFSET = 72;

/**
 * Ramifica animação x movimento reduzido dentro de um gsap.matchMedia().
 *
 * As duas queries são complementares de propósito: `add()` com objeto de
 * condições só chama o callback quando ALGUMA condição casa, então um objeto
 * contendo apenas a query de `reduce` nunca dispara em máquina normal — e todo
 * elemento que depende do GSAP para sair do `opacity: 0` do CSS fica invisível
 * para sempre. Com o par complementar, exatamente uma sempre casa.
 */
export function onMotion(
    mm: gsap.MatchMedia,
    run: (reduced: boolean) => (() => void) | void
) {
    mm.add(
        {
            reduced: "(prefers-reduced-motion: reduce)",
            full: "(prefers-reduced-motion: no-preference)",
        },
        (context) => run(Boolean(context.conditions?.reduced))
    );
}

export {
    gsap,
    useGSAP,
    ScrollTrigger,
    ScrollSmoother,
    ScrollToPlugin,
    SplitText,
    DrawSVGPlugin,
};
