import Image from "next/image";
import { skills } from "@/data/skills";

interface SkillCardProps {
    iconPath: string;
    name: string;
}

function SkillCard({ iconPath, name }: SkillCardProps) {
    const altSkill: string = "icone " + name.toLowerCase();
    return (
        <div
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
            <h3 className="text-base mt-6 font-bold"> {name} </h3>
        </div>
    );
}

export default function SkillCards() {
    return (
        <div className="flex justify-center items-center mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-10 xl:gap-x-30 xl:gap-y-15">
                {skills.map((skill) => (
                    <SkillCard
                        key={skill.name}
                        iconPath={skill.iconPath}
                        name={skill.name}
                    />
                ))}
            </div>
        </div>
    );
}
