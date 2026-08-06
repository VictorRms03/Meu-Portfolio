import Link from "next/link";
import { MouseEvent, ReactNode } from "react";
import AnchorLink from "@/components/motion/AnchorLink";

type Variant = "solid" | "outline";

interface ActionButtonProps {
    href: string;
    children: string;
    variant?: Variant;
    icon?: ReactNode;
    /** abre em nova aba (links externos, PDF do currículo) */
    external?: boolean;
    className?: string;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const BASE =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 px-6 py-2.5 text-sm font-medium transition-[border-color,box-shadow] duration-300 hover:shadow-glow sm:text-base";

const SHELL: Record<Variant, string> = {
    solid: "border-accent bg-accent",
    outline: "border-line hover:border-accent",
};

/** o preenchimento varre da esquerda; só a cor do texto acompanha */
const FILL: Record<Variant, string> = {
    solid: "bg-accent-strong",
    outline: "bg-accent",
};

const LABEL: Record<Variant, string> = {
    solid: "text-background",
    outline: "text-accent group-hover:text-background",
};

export default function ActionButton({
    href,
    children,
    variant = "solid",
    icon,
    external,
    className,
    onClick,
}: ActionButtonProps) {
    const classes = `${BASE} ${SHELL[variant]} ${className ?? ""}`;

    const content = (
        <>
            <span
                aria-hidden="true"
                className={`absolute inset-0 z-0 origin-left scale-x-0 transition-transform duration-[400ms] ease-out group-hover:scale-x-100 ${FILL[variant]}`}
            />
            <span
                className={`relative z-10 transition-colors duration-300 ${LABEL[variant]}`}
            >
                {children}
            </span>
            {icon && <span className="relative z-10 flex shrink-0">{icon}</span>}
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
