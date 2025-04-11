import Image from "next/image";

export default function Skills() {
    return (

        <div className="flex justify-center items-center mt-16">

            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-5 md:gap-x-30 md:gap-y-15">

                { skillButton("/icons/git.svg", "Git") }

                { skillButton("/icons/reactjs.svg", "React.js") }

                { skillButton("/icons/nextjs.svg", "Next.js") }

                { skillButton("/icons/nodejs.svg", "Node.js") }

                { skillButton("/icons/mysql.svg", "MySQL") }

                { skillButton("/icons/java.svg", "Java") }

                { skillButton("/icons/mariadb.svg", "MariaDB") }

                { skillButton("/icons/agile.svg", "Metologias Agile") }

                { skillButton("/icons/php.svg", "PHP") }

                { skillButton("/icons/python.svg", "Python") }

                { skillButton("/icons/c.svg", "C") }

                { skillButton("/icons/cypress.svg", "Cypress") }

                { skillButton("/icons/bootstrap.svg", "Bootstrap") }

                { skillButton("/icons/tailwindcss.svg", "TailwindCSS") }

                { skillButton("/icons/pandas.svg", "Pandas") }
                

            </div>

        </div>
        
    )
}

function skillButton(skillIcon: string, skillName: string) {

    const altSkill:string = "icone " + skillName.toLowerCase();

    return (
        <button rel="noopener noreferrer" className="w-40 h-40 md:w-44 md:h-44 flex flex-col items-center 
            justify-center bg-white rounded shadow border-3 border-black group hover:bg-black 
            hover:text-white hover: transition duration-300">

            <Image src={skillIcon} alt={altSkill}  width={0} height={0} 
                className="w-15 h-15 transition group-hover:invert"/>
            <h3 className="text-3x1 mt-6 font-bold"> {skillName} </h3>

        </button>
    )
}