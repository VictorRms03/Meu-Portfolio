interface WorkExperienceCardProps {
    name: string;
    date: string;
}

function WorkExperienceCard({ name, date }: WorkExperienceCardProps) {
    return (
        <div className="mb-12 border-1 border-white rounded-lg bg-black hover:bg-neutral-800 p-7">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between text-center">
                <h3 className="text-x1">{name}</h3>
                <span className="text-gray-400">{date}</span>
            </div>
        </div>
    );
}

export default function WorkExperiences() {
    const works = [
        {
            name: "Desenvolvedor Full-Stack Junior - DevCore",
            date: "Ago 2025 - Presente",
        },
    ];

    return (
        <div className="max-w-9/12 mx-auto gap-6 py-12 ">
            {works.map((work, index) => (
                <WorkExperienceCard
                    key={index}
                    name={work.name}
                    date={work.date}
                />
            ))}
        </div>
    );
}
