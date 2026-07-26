import { ReactNode } from "react";
import TimelineCard from "@/components/ui/TimelineCard";
import { TimelineEntry } from "@/data/experience";

interface TimelineProps {
    entries: TimelineEntry[];
    icon: ReactNode;
}

export default function Timeline({ entries, icon }: TimelineProps) {
    return (
        <div className="relative">
            <div className="absolute top-1 bottom-1 left-4 w-px bg-gradient-to-b from-violet-400/60 via-white/15 to-white/15" />
            <div className="flex flex-col gap-8">
                {entries.map((entry) => (
                    <div
                        key={entry.title}
                        className="relative flex items-start gap-4 sm:gap-6"
                    >
                        <div className="relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-violet-400 bg-black text-violet-300">
                            {icon}
                        </div>
                        <div className="min-w-0 flex-1">
                            <TimelineCard
                                title={entry.title}
                                date={entry.date}
                                description={entry.description}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
