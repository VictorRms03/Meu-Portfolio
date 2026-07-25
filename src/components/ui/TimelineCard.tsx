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
    const hasDescription = Boolean(description);

    return (
        <div
            className={`mb-12 border-1 border-white bg-black hover:bg-neutral-800 p-7 ${
                hasDescription ? "rounded-xl" : "rounded-lg"
            }`}
        >
            <div
                className={`flex flex-col justify-between text-center gap-5 ${
                    hasDescription
                        ? "xl:flex-row xl:gap-0"
                        : "lg:flex-row lg:gap-0"
                }`}
            >
                <h3 className="text-xl">{title}</h3>
                <span className="text-gray-400">{date}</span>
            </div>
            {description && (
                <div className="mt-4 xl:max-w-8/12 text-center xl:text-left">
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
