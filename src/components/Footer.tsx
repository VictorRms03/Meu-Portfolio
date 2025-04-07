import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full px-6 py-4 bg-black shadow-md sticky top-0 z-50">
            <div className="max-w-9/12 mx-auto flex items-center justify-between">

                <Link href="#hero scroll={true}">
                    <div className="flex items-center gap-3 text-xl font-bold text-white">

                        <Image src="/images/Foto - Victor Ramos.jpg" 
                            alt="Foto Victor Ramos" 
                            width={40} 
                            height={40} 
                            className="rounded-full object-cover" 
                        />
                        
                        Victor Ramos
                    
                    </div>
                </Link>
        
                <div>

                <Link href="https://github.com/VictorRms03/Meu-Portfolio" target="_blank" className="bg-white text-black font-bold 
                 px-4 py-2 rounded hover:bg-neutral-400 transition flex items-center gap-2">
                    Acessar Projeto
                </Link>
                    
                </div>

                <div>

                    <span className="font-bold text-white"> Feito com Next.js e Tailwind CSS </span>

                </div>

            </div>
        </footer>
    )
}