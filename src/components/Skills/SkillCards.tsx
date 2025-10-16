import Image from "next/image";

interface SkillCardProps {
    iconPath: string;
    name: string;
}

function SkillCard({ iconPath, name }: SkillCardProps) {
    const altSkill: string = "icone " + name.toLowerCase();
    return (
        <button
            rel="noopener noreferrer"
            className="w-34 h-34 xl:w-44 xl:h-44 flex flex-col items-center 
            justify-center bg-white rounded shadow border-3 border-black group hover:bg-black 
            hover:text-white hover: transition duration-300"
        >
            <Image
                src={iconPath}
                alt={altSkill}
                width={0}
                height={0}
                className="w-14 h-14 lg:w-15 lg:h-15 transition group-hover:invert"
            />
            <h3 className="text-3x1 mt-6 font-bold"> {name} </h3>
        </button>
    );
}

export default function SkillCards() {
    const skills = [
        { name: "Laravel", iconPath: "/icons/skills/laravel.svg" },
        { name: "React.js", iconPath: "/icons/skills/reactjs.svg" },
        { name: "MySQL", iconPath: "/icons/skills/mysql.svg" },
        { name: "Git", iconPath: "/icons/skills/git.svg" },
        { name: "Next.js", iconPath: "/icons/skills/nextjs.svg" },
        { name: "Node.js", iconPath: "/icons/skills/nodejs.svg" },
        { name: "Java", iconPath: "/icons/skills/java.svg" },
        { name: "MariaDB", iconPath: "/icons/skills/mariadb.svg" },
        { name: "Metodologias Agile", iconPath: "/icons/skills/agile.svg" },
        { name: "PHP", iconPath: "/icons/skills/php.svg" },
        { name: "Python", iconPath: "/icons/skills/python.svg" },
        { name: "Cypress", iconPath: "/icons/skills/cypress.svg" },
        { name: "n8n", iconPath: "/icons/skills/n8n.svg" },
        { name: "TailwindCSS", iconPath: "/icons/skills/tailwindcss.svg" },
        { name: "Pandas", iconPath: "/icons/skills/pandas.svg" },
    ];

    return (
        <div className="flex justify-center items-center mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-10 xl:gap-x-30 xl:gap-y-15">
                {skills.map((skill, index) => (
                    <SkillCard
                        key={index}
                        iconPath={skill.iconPath}
                        name={skill.name}
                    />
                ))}
            </div>
        </div>
    );
}
