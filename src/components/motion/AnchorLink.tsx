"use client";

import { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { gsap, ScrollSmoother, ScrollToPlugin, HEADER_OFFSET } from "@/lib/gsap";

// referenciar o plugin evita que builds otimizados removam o import por "não uso"
void ScrollToPlugin;

export function scrollToSection(href: string) {
    const target = href === "#hero" ? 0 : document.querySelector(href);
    if (target === null) return;

    const smoother = ScrollSmoother.get();

    if (smoother) {
        smoother.scrollTo(target, true, `top ${HEADER_OFFSET}px`);
    } else {
        gsap.to(window, {
            duration: 0,
            scrollTo: { y: target, offsetY: HEADER_OFFSET },
        });
    }

    history.replaceState(null, "", href === "#hero" ? "/" : href);
}

interface AnchorLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: ReactNode;
}

export default function AnchorLink({
    href,
    children,
    onClick,
    ...rest
}: AnchorLinkProps) {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey) return;
        event.preventDefault();
        scrollToSection(href);
        onClick?.(event);
    };

    return (
        <a href={href} onClick={handleClick} {...rest}>
            {children}
        </a>
    );
}
