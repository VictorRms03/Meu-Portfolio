const TOP_PATH =
    "M0,32 C240,80 480,0 720,24 C960,48 1200,8 1440,40 L1440,80 L0,80 Z";
const BOTTOM_PATH =
    "M0,48 C240,0 480,80 720,56 C960,32 1200,72 1440,40 L1440,0 L0,0 Z";

interface WaveDividerProps {
    position: "top" | "bottom";
    colorClassName?: string;
}

export default function WaveDivider({
    position,
    colorClassName = "text-black",
}: WaveDividerProps) {
    const isTop = position === "top";

    return (
        <svg
            className={`pointer-events-none absolute inset-x-0 w-full ${
                isTop ? "bottom-full" : "top-full"
            } ${colorClassName}`}
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            <path fill="currentColor" d={isTop ? TOP_PATH : BOTTOM_PATH} />
        </svg>
    );
}
