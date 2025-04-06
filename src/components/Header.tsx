import Image from 'next/image';

export default function Header() {
    return (
        <header className="w-full px-6 py-4 bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-9/12 mx-auto flex items-center justify-between">

                <div className="flex items-center gap-3 text-xl font-bold text-black">

                    <Image src="/images/Foto - Victor Ramos.jpg" 
                        alt="Foto Victor Ramos" 
                        width={40} 
                        height={40} 
                        className="rounded-full object-cover" 
                    />
                    
                    Victor Ramos
                
                </div>
        
                <nav className="hidden md:flex gap-6 text-black font-medium">
                    <a href="#inicio" className="hover:text-grey-800 transition">Sobre mim</a>
                    <a href="#sobre" className="hover:text-grey-800 transition">Habilidades</a>
                    <a href="#projetos" className="hover:text-grey-800 transition">Experiências</a>
                    <a href="#contato" className="hover:text-grey-800 transition">Contato</a>
                </nav>
        
                <div className="hidden md:block">

                    <a href="/archives/Curriculum Vitae - Victor Ramos.pdf" target="_blank">

                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition flex items-center gap-2">
                            Currículo <Image src="/icons/download.svg" alt="icone download" width={15} height={15}/>
                        </button>

                    </a>
                    
                </div>

            </div>
        </header>
    )
}