import { typeColors } from "./TimelineItem";
import Reveal from "@/components/motion/Reveal";
import { ExperienceType, experienceLabels } from "@/data/experience";

const order: ExperienceType[] = ["work", "degree", "extension"];

export default function TimelineLegend() {
    return (
        <Reveal className="mb-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs tracking-wide text-muted uppercase">
            {order.map((type) => (
                <span key={type} className="inline-flex items-center gap-2">
                    <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: typeColors[type] }}
                    />
                    {experienceLabels[type]}
                </span>
            ))}
        </Reveal>
    );
}
