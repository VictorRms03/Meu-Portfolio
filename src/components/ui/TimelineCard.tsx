interface TimelineCardProps {
    title: string;
    date: string;
    description?: string;
}

export default function TimelineCard({
    title,
    date,
    description,
}: TimelineCardProps) {
    return (
        <div className="rounded-xl border-l-4 border-violet-400/80 bg-white/[0.04] p-7 ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-violet-400/10 hover:ring-violet-400/30">
            <div className="flex flex-col justify-between gap-3 text-center sm:flex-row sm:items-start sm:text-left">
                <h3 className="text-xl font-medium">{title}</h3>
                <span className="mx-auto shrink-0 rounded-full border border-violet-400/40 bg-violet-400/10 px-4 py-1 text-sm whitespace-nowrap text-violet-300 sm:mx-0">
                    {date}
                </span>
            </div>
            {description && (
                <div className="mt-4 text-center sm:text-left">
                    <p className="font-extralight">
                        <span className="font-bold">
                            Principais atividades:{" "}
                        </span>
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
}
