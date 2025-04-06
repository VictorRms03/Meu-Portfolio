import Image from "next/image";

export default function Skills() {
    return (
        <section className="mt-24">

            <div className="max-w-9/12 mx-auto flex justify-center">

                <h2 className="text-5xl"> Hard <span className="font-extrabold">Skills</span> </h2>

            </div>

            <div>

                <div className="flex gap-30 justify-center items-center mt-16">

                    <button rel="noopener noreferrer" className="w-44 h-44 flex flex-col items-center 
                     justify-center bg-white rounded shadow border-3 border-black group hover:bg-black 
                     hover:text-white hover: transition duration-300">

                        <Image src="/icons/git.svg" alt="icone git" width={60} height={60} className="transition group-hover:invert"/>
                        <h3 className="text-3x1 mt-6 font-bold"> Git </h3>

                    </button>

                    <button rel="noopener noreferrer" className="w-44 h-44 flex flex-col items-center 
                     justify-center bg-white rounded shadow border-3 border-black group hover:bg-black 
                     hover:text-white hover: transition duration-300">

                        <Image src="/icons/reactjs.svg" alt="icone git" width={60} height={60} className="transition group-hover:invert"/>
                        <h3 className="text-3x1 mt-6 font-bold"> React.js </h3>

                    </button>

                    <button rel="noopener noreferrer" className="w-44 h-44 flex flex-col items-center 
                     justify-center bg-white rounded shadow border-3 border-black group hover:bg-black 
                     hover:text-white hover: transition duration-300">

                        <Image src="/icons/nextjs.svg" alt="icone git" width={60} height={60} className="transition group-hover:invert"/>
                        <h3 className="text-3x1 mt-6 font-bold"> Next.js </h3>

                    </button>

                    <button rel="noopener noreferrer" className="w-44 h-44 flex flex-col items-center 
                     justify-center bg-white rounded shadow border-3 border-black group hover:bg-black 
                     hover:text-white hover: transition duration-300">

                        <Image src="/icons/nodejs.svg" alt="icone git" width={60} height={60} className="transition group-hover:invert"/>
                        <h3 className="text-3x1 mt-6 font-bold"> Node.js </h3>

                    </button>

                    <button rel="noopener noreferrer" className="w-44 h-44 flex flex-col items-center 
                     justify-center bg-white rounded shadow border-3 border-black group hover:bg-black 
                     hover:text-white hover: transition duration-300">

                        <Image src="/icons/mysql.svg" alt="icone git" width={60} height={60} className="transition group-hover:invert"/>
                        <h3 className="text-3x1 mt-6 font-bold"> MySQL </h3>

                    </button>

                </div>

                <div className="flex gap-30 justify-center items-center mt-16">

                    <button rel="noopener noreferrer" className="w-44 h-44 flex flex-col items-center 
                     justify-center bg-white rounded shadow border-3 border-black group hover:bg-black 
                     hover:text-white hover: transition duration-300">

                        <Image src="/icons/java.svg" alt="icone git" width={60} height={60} className="transition group-hover:invert"/>
                        <h3 className="text-3x1 mt-6 font-bold"> Java </h3>

                    </button>

                    <button rel="noopener noreferrer" className="w-44 h-44 flex flex-col items-center 
                     justify-center bg-white rounded shadow border-3 border-black group hover:bg-black 
                     hover:text-white hover: transition duration-300">

                        <Image src="/icons/mariadb.svg" alt="icone git" width={60} height={60} className="transition group-hover:invert"/>
                        <h3 className="text-3x1 mt-6 font-bold"> MariaDB </h3>

                    </button>

                    <button rel="noopener noreferrer" className="w-44 h-44 flex flex-col items-center 
                     justify-center bg-white rounded shadow border-3 border-black group hover:bg-black 
                     hover:text-white hover: transition duration-300">

                    <Image src="/icons/agile.svg" alt="icone git" width={60} height={60} className="transition group-hover:invert"/>
                    <h3 className="text-3x1 mt-6 font-bold"> Metologias Agile </h3>

                    </button>

                    <button rel="noopener noreferrer" className="w-44 h-44 flex flex-col items-center 
                     justify-center bg-white rounded shadow border-3 border-black group hover:bg-black 
                     hover:text-white hover: transition duration-300">

                        <Image src="/icons/php.svg" alt="icone git" width={60} height={60} className="transition group-hover:invert"/>
                        <h3 className="text-3x1 mt-6 font-bold"> PHP </h3>

                    </button>

                    <button rel="noopener noreferrer" className="w-44 h-44 flex flex-col items-center 
                     justify-center bg-white rounded shadow border-3 border-black group hover:bg-black 
                     hover:text-white hover: transition duration-300">

                        <Image src="/icons/python.svg" alt="icone git" width={60} height={60} className="transition group-hover:invert"/>
                        <h3 className="text-3x1 mt-6 font-bold"> Python </h3>

                    </button>

                </div>


            </div>

        </section>
    )
}