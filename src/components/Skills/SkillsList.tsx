import Image from "next/image";

interface SkillButtonProps {
    skillIcon: string;
    skillName: string;
}

function SkillButton({skillIcon, skillName}: SkillButtonProps ) {
    const altSkill:string = "icone " + skillName.toLowerCase();
    return (
        <button rel="noopener noreferrer" className="w-34 h-34 xl:w-44 xl:h-44 flex flex-col items-center 
            justify-center bg-white rounded shadow border-3 border-black group hover:bg-black 
            hover:text-white hover: transition duration-300">
            <Image src={skillIcon} alt={altSkill}  width={0} height={0} 
                className="w-14 h-14 lg:w-15 lg:h-15 transition group-hover:invert"/>
            <h3 className="text-3x1 mt-6 font-bold"> {skillName} </h3>
        </button>
    )
}

export default function Skills() {
    const skills = [
        { icon: "/icons/laravel.svg", name: "Laravel" },
        { icon: "/icons/reactjs.svg", name: "React.js" },
        { icon: "/icons/mysql.svg", name: "MySQL" },
        { icon: "/icons/git.svg", name: "Git" },
        { icon: "/icons/nextjs.svg", name: "Next.js" },
        { icon: "/icons/nodejs.svg", name: "Node.js" },
        { icon: "/icons/java.svg", name: "Java" },
        { icon: "/icons/mariadb.svg", name: "MariaDB" },
        { icon: "/icons/agile.svg", name: "Metodologias Agile" },
        { icon: "/icons/php.svg", name: "PHP" },
        { icon: "/icons/python.svg", name: "Python" },
        { icon: "/icons/cypress.svg", name: "Cypress" },
        { icon: "/icons/n8n.svg", name: "n8n" },
        { icon: "/icons/tailwindcss.svg", name: "TailwindCSS" },
        { icon: "/icons/pandas.svg", name: "Pandas" },
    ];
    
    return (
        <div className="flex justify-center items-center mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-10 xl:gap-x-30 xl:gap-y-15">
                {skills.map((skill, index) => (
                    <SkillButton
                        key={index}
                        skillIcon={skill.icon}
                        skillName={skill.name}
                    />
                ))}
            </div>
        </div>
    )
}

