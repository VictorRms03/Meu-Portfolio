import Image from "next/image";
import { skills } from "@/data/skills";

interface SkillCardProps {
    iconPath: string;
    hoverIconPath?: string;
    name: string;
    delay: number;
}

function SkillCard({ iconPath, hoverIconPath, name, delay }: SkillCardProps) {
    const altSkill: string = "icone " + name.toLowerCase();
    return (
        <div
            style={{ animationDelay: `${delay}s` }}
            className="w-34 h-34 xl:w-44 xl:h-44 flex flex-col items-center
            justify-center bg-white rounded-2xl shadow-lg shadow-black/10 border-2 border-black group hover:bg-black
            hover:text-white transition-all duration-300 hover:-translate-y-2 hover:scale-105
            hover:shadow-xl hover:shadow-black/20 animate-[fade-in-up_0.6s_ease-out_both]"
        >
            <div className="relative w-14 h-14 lg:w-15 lg:h-15">
                <Image
                    src={iconPath}
                    alt={altSkill}
                    width={0}
                    height={0}
                    className={`w-14 h-14 lg:w-15 lg:h-15 transition-opacity duration-300 ${
                        hoverIconPath
                            ? "group-hover:opacity-0"
                            : "group-hover:invert"
                    }`}
                />
                {hoverIconPath && (
                    <Image
                        src={hoverIconPath}
                        alt=""
                        aria-hidden="true"
                        width={0}
                        height={0}
                        className="absolute inset-0 w-14 h-14 lg:w-15 lg:h-15 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                )}
            </div>
            <h3 className="text-base mt-6 font-bold"> {name} </h3>
        </div>
    );
}

export default function SkillCards() {
    return (
        <div className="flex justify-center items-center mt-16">
            <div className="flex flex-wrap justify-center gap-5 md:gap-10 xl:gap-12 max-w-5xl">
                {skills.map((skill, index) => (
                    <SkillCard
                        key={skill.name}
                        iconPath={skill.iconPath}
                        hoverIconPath={skill.hoverIconPath}
                        name={skill.name}
                        delay={index * 0.08}
                    />
                ))}
            </div>
        </div>
    );
}
