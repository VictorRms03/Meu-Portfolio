interface SectionHeadingProps {
    prefix: string;
    highlight: string;
    className?: string;
    highlightClassName?: string;
}

export default function SectionHeading({
    prefix,
    highlight,
    className = "text-5xl",
    highlightClassName = "font-extrabold",
}: SectionHeadingProps) {
    return (
        <h2 className={className}>
            {prefix} <span className={highlightClassName}>{highlight}</span>
        </h2>
    );
}
