import { CSSProperties, ReactNode } from "react";
import BriefcaseIcon from "@/components/icons/BriefcaseIcon";
import AcademicCapIcon from "@/components/icons/AcademicCapIcon";
import StarIcon from "@/components/icons/StarIcon";
import {
    ExperienceType,
    TimelineEntry,
    experienceLabels,
} from "@/data/experience";

export const typeColors: Record<ExperienceType, string> = {
    work: "var(--accent)",
    degree: "var(--accent-2)",
    extension: "var(--accent-3)",
};

const typeIcons: Record<ExperienceType, ReactNode> = {
    work: <BriefcaseIcon className="h-4 w-4" />,
    degree: <AcademicCapIcon className="h-4 w-4" />,
    extension: <StarIcon className="h-4 w-4" />,
};

interface TimelineItemProps {
    entry: TimelineEntry;
    /** no desktop, o card fica à esquerda do trilho central */
    isLeft: boolean;
    /** o ano só aparece quando muda em relação à entrada anterior */
    showYear: boolean;
}

export default function TimelineItem({
    entry,
    isLeft,
    showYear,
}: TimelineItemProps) {
    const brand = typeColors[entry.type];

    return (
        <article
            className={`relative pl-14 md:w-1/2 md:pl-0 ${
                isLeft ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14"
            }`}
            style={{ "--brand": brand } as CSSProperties}
        >
            {/* ano gigante em contorno, no lado vazio */}
            {showYear && (
                <span
                    aria-hidden="true"
                    className={`absolute top-0 hidden text-[clamp(3rem,6vw,5.5rem)] leading-none font-extrabold text-transparent md:block ${
                        isLeft ? "left-full ml-14" : "right-full mr-14"
                    }`}
                    style={{
                        WebkitTextStroke:
                            "1.5px color-mix(in oklab, var(--brand) 45%, transparent)",
                    }}
                >
                    {entry.year}
                </span>
            )}

            {/* ponto sobre o trilho — o wrapper posiciona, o filho é escalado
                pelo GSAP (transform de posicionamento e de animação separados) */}
            {/* `md:left-auto` só no ramo isLeft: emitir left-auto e left-0 no
                mesmo breakpoint deixa o vencedor por conta da ordem do CSS */}
            <span
                className={`absolute top-1.5 left-6 z-10 -translate-x-1/2 ${
                    isLeft
                        ? "md:left-auto md:right-0 md:translate-x-1/2"
                        : "md:left-0"
                }`}
            >
                <span
                    className="entry-dot flex h-8 w-8 items-center justify-center rounded-full border-2 bg-background"
                    style={{
                        borderColor: brand,
                        color: brand,
                        boxShadow: "0 0 22px -6px var(--brand)",
                    }}
                >
                    {typeIcons[entry.type]}
                </span>
            </span>

            <div
                className="entry-card rounded-xl glass p-5 transition-[border-color,box-shadow] duration-500 hover:border-[var(--brand)] hover:shadow-[0_0_44px_-16px_var(--brand)]"
                data-side={isLeft ? "left" : "right"}
            >
                <div
                    className={`flex flex-wrap items-center gap-2 ${
                        isLeft ? "md:justify-end" : ""
                    }`}
                >
                    <span
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                        style={{
                            color: brand,
                            backgroundColor:
                                "color-mix(in oklab, var(--brand) 12%, transparent)",
                        }}
                    >
                        {typeIcons[entry.type]}
                        {experienceLabels[entry.type]}
                    </span>
                    <span className="rounded-full border border-line px-3 py-1 text-xs whitespace-nowrap text-muted">
                        {entry.date}
                    </span>
                    <span className="rounded-full px-2 py-1 text-xs text-muted md:hidden">
                        {entry.year}
                    </span>
                </div>

                <h3 className="mt-4 text-lg leading-snug font-medium">
                    {entry.title}
                </h3>

                {entry.description && (
                    <p className="mt-3 text-sm font-light text-muted">
                        <span className="font-semibold text-foreground">
                            Principais atividades:{" "}
                        </span>
                        {entry.description}
                    </p>
                )}
            </div>
        </article>
    );
}
