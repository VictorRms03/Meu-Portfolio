import Link from "next/link";
import { MouseEvent, ReactNode } from "react";
import AnchorLink from "@/components/motion/AnchorLink";

type Variant = "solid" | "outline";

/**
 * Cada botão da página usa um efeito diferente, de propósito, para comparação.
 * Todos são CSS puro — nenhum listener, nenhum contexto GSAP.
 *
 *  fill      fundo varre da esquerda para a direita
 *  expand    círculo cresce a partir do centro
 *  shine     faixa de brilho atravessa na diagonal
 *  arrow     seta desliza para a direita e a borda acende
 *  underline sublinhado cresce do centro sob o texto
 *  lift      o botão sobe e ganha halo violeta
 *  invert    fundo e texto trocam de cor
 */
export type ButtonEffect =
    | "fill"
    | "expand"
    | "shine"
    | "arrow"
    | "underline"
    | "lift"
    | "invert";

interface ActionButtonProps {
    href: string;
    children: string;
    variant?: Variant;
    effect?: ButtonEffect;
    icon?: ReactNode;
    /** abre em nova aba (links externos, PDF do currículo) */
    external?: boolean;
    className?: string;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const BASE =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 px-6 py-2.5 text-sm font-medium sm:text-base";

/** casca por variante, antes de qualquer efeito */
const SHELL: Record<Variant, string> = {
    solid: "border-accent bg-accent",
    outline: "border-line",
};

/** cor do rótulo em repouso */
const LABEL: Record<Variant, string> = {
    solid: "text-background",
    outline: "text-accent",
};

/** cor do preenchimento usado por fill e expand */
const FILL_BG: Record<Variant, string> = {
    solid: "bg-accent-strong",
    outline: "bg-accent",
};

interface EffectStyles {
    shell: string;
    label: string;
    overlay?: ReactNode;
}

function buildEffect(effect: ButtonEffect, variant: Variant): EffectStyles {
    switch (effect) {
        case "fill":
            return {
                shell: "transition-[border-color,box-shadow] duration-300 hover:border-accent hover:shadow-glow",
                label:
                    variant === "outline"
                        ? "transition-colors duration-300 group-hover:text-background"
                        : "",
                overlay: (
                    <span
                        aria-hidden="true"
                        className={`absolute inset-0 z-0 origin-left scale-x-0 transition-transform duration-[400ms] ease-out group-hover:scale-x-100 ${FILL_BG[variant]}`}
                    />
                ),
            };

        case "expand":
            return {
                shell: "transition-[border-color,box-shadow] duration-300 hover:border-accent hover:shadow-glow",
                label:
                    variant === "outline"
                        ? "transition-colors duration-300 delay-100 group-hover:text-background"
                        : "",
                overlay: (
                    <span
                        aria-hidden="true"
                        className={`absolute top-1/2 left-1/2 z-0 aspect-square w-[150%] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full transition-transform duration-500 ease-out group-hover:scale-100 ${FILL_BG[variant]}`}
                    />
                ),
            };

        case "shine":
            return {
                shell: "transition-[border-color,box-shadow] duration-300 hover:border-accent hover:shadow-glow",
                label: "",
                overlay: (
                    <span
                        aria-hidden="true"
                        className="absolute inset-y-0 -left-1/3 z-0 w-1/4 -skew-x-12 bg-white/30 transition-[left] duration-700 ease-out group-hover:left-[115%]"
                    />
                ),
            };

        case "arrow":
            return {
                shell: "transition-[border-color,box-shadow] duration-300 hover:border-accent hover:shadow-glow",
                label:
                    variant === "outline"
                        ? "transition-colors duration-300 group-hover:text-foreground"
                        : "",
            };

        case "underline":
            return {
                shell: "transition-[border-color] duration-300 hover:border-accent",
                label: "",
                overlay: (
                    <span
                        aria-hidden="true"
                        className="absolute bottom-1.5 left-1/2 z-10 h-0.5 w-0 -translate-x-1/2 rounded bg-current transition-[width] duration-300 ease-out group-hover:w-1/2"
                    />
                ),
            };

        case "lift":
            return {
                shell: "transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-glow",
                label: "",
            };

        case "invert":
            return {
                shell:
                    variant === "solid"
                        ? "transition-[background-color,box-shadow] duration-300 hover:bg-transparent hover:shadow-glow"
                        : "transition-[background-color,border-color,box-shadow] duration-300 hover:border-accent hover:bg-accent hover:shadow-glow",
                label:
                    variant === "solid"
                        ? "transition-colors duration-300 group-hover:text-accent"
                        : "transition-colors duration-300 group-hover:text-background",
            };
    }
}

/** seta exclusiva do efeito arrow */
function ArrowGlyph() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="relative z-10 h-4 w-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 12h15m0 0l-5.5-5.5M19 12l-5.5 5.5"
            />
        </svg>
    );
}

export default function ActionButton({
    href,
    children,
    variant = "solid",
    effect = "fill",
    icon,
    external,
    className,
    onClick,
}: ActionButtonProps) {
    const { shell, label, overlay } = buildEffect(effect, variant);
    const classes = `${BASE} ${SHELL[variant]} ${shell} ${className ?? ""}`;

    const content = (
        <>
            {overlay}
            <span className={`relative z-10 ${LABEL[variant]} ${label}`}>
                {children}
            </span>
            {effect === "arrow" && <ArrowGlyph />}
            {icon && (
                <span
                    className={`relative z-10 flex shrink-0 ${LABEL[variant]} ${label}`}
                >
                    {icon}
                </span>
            )}
        </>
    );

    if (href.startsWith("#")) {
        return (
            <AnchorLink href={href} onClick={onClick} className={classes}>
                {content}
            </AnchorLink>
        );
    }

    return (
        <Link
            href={href}
            onClick={onClick}
            className={classes}
            {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
        >
            {content}
        </Link>
    );
}
