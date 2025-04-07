import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full px-6 py-4 bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-9/12 mx-auto flex items-center justify-between">

                <Link href="#hero scroll={true}">
                    <div className="flex items-center gap-3 text-xl font-bold text-black">

                        <Image src="/images/Foto - Victor Ramos.jpg" 
                            alt="Foto Victor Ramos" 
                            width={40} 
                            height={40} 
                            className="rounded-full object-cover" 
                        />
                        
                        Victor Ramos
                    
                    </div>
                </Link>
        
                <nav className="md:flex gap-6 text-black font-medium">
                    <Link href="#skills" scroll={true} className="hover:text-grey-800 transition">Habilidades</Link>
                    <Link href="#experience" scroll={true} className="hover:text-grey-800 transition">Experiências</Link>
                    <Link href="#sobre" scroll={true} className="hover:text-grey-800 transition">Sobre mim</Link>
                    <Link href="#projetos" scroll={true} className="hover:text-grey-800 transition">Projetos</Link>
                    <Link href="#contato" scroll={true} className="hover:text-grey-800 transition">Contato</Link>
                </nav>
        
                <div>

                    <Link href="/archives/Curriculum Vitae - Victor Ramos.pdf" target="_blank" className="group bg-black px-4 py-2
                     rounded hover:bg-white border-2 border-black hover:border-black transition flex items-center gap-2">

                        <span className="text-white group-hover:text-black">Currículo</span> <Image src="/icons/download.svg"
                         alt="icone download" width={15} height={15} className="group-hover:invert"/>

                    </Link>
                    
                </div>

            </div>
        </header>
    )
}