import { ReactNode } from "react";
import TimelineCard from "@/components/ui/TimelineCard";
import TimelineRail from "@/components/ui/TimelineRail";
import Reveal from "@/components/motion/Reveal";
import { TimelineEntry } from "@/data/experience";

interface TimelineProps {
    entries: TimelineEntry[];
    icon: ReactNode;
}

export default function Timeline({ entries, icon }: TimelineProps) {
    return (
        <div className="relative">
            <TimelineRail />
            <div className="flex flex-col gap-8">
                {entries.map((entry) => (
                    <div
                        key={entry.title}
                        className="relative flex items-start gap-4 sm:gap-6"
                    >
                        <Reveal
                            y={12}
                            start="top 80%"
                            className="relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-violet-400 bg-black text-violet-300"
                        >
                            {icon}
                        </Reveal>
                        <Reveal x={24} y={0} className="min-w-0 flex-1">
                            <TimelineCard
                                title={entry.title}
                                date={entry.date}
                                description={entry.description}
                            />
                        </Reveal>
                    </div>
                ))}
            </div>
        </div>
    );
}
