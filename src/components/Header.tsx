'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    
    const [isOpen, setIsOpen] = useState(false);
    
    return (

        <header className="w-full px-6 py-4 bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-9/12 mx-auto flex items-center justify-between">

                {/* Logo Victor Ramos */}
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

                {/* Botão hambúrguer (mobile) */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menu" >

                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                </button>
        
                {/* Botões (desktop) */}
                <nav className="hidden md:flex gap-6 text-black font-medium">

                    <Link href="#skills" scroll={true} className="hover:text-grey-800 transition">Habilidades</Link>
                    <Link href="#experience" scroll={true} className="hover:text-grey-800 transition">Experiências</Link>
                    <Link href="#sobre" scroll={true} className="hover:text-grey-800 transition">Sobre mim</Link>
                    <Link href="#projetos" scroll={true} className="hover:text-grey-800 transition">Projetos</Link>
                    <Link href="#contato" scroll={true} className="hover:text-grey-800 transition">Contato</Link>

                </nav>
        
                {/* Botão currículo (desktop) */}
                <div className='hidden md:flex'>

                    <Link href="/archives/Curriculum Vitae - Victor Ramos.pdf" target="_blank" className="group bg-black px-4 py-2
                     rounded hover:bg-white border-2 border-black hover:border-black transition flex items-center gap-2">

                        <span className="text-white group-hover:text-black">Currículo</span> <Image src="/icons/download.svg"
                         alt="icone download" width={15} height={15} className="group-hover:invert"/>

                    </Link>
                    
                </div>

            </div>

             {/* Menu hamburguer (dropdown) */}
             {isOpen && (

                <div className="md:hidden px-6 pt-6 pb-2 space-y-4 flex flex-col items-center text-black font-medium bg-white">
                    <Link href="#skills" scroll={true} className="block hover:text-gray-800 transition" onClick={() => setIsOpen(!isOpen)}>Habilidades</Link>
                    <Link href="#experience" scroll={true} className="block hover:text-gray-800 transition" onClick={() => setIsOpen(!isOpen)}>Experiências</Link>
                    <Link href="#sobre" scroll={true} className="block hover:text-gray-800 transition" onClick={() => setIsOpen(!isOpen)}>Sobre mim</Link>
                    <Link href="#projetos" scroll={true} className="block hover:text-gray-800 transition" onClick={() => setIsOpen(!isOpen)}>Projetos</Link>
                    <Link href="#contato" scroll={true} className="block hover:text-gray-800 transition" onClick={() => setIsOpen(!isOpen)}>Contato</Link>
                    <Link href="/archives/Curriculum Vitae - Victor Ramos.pdf" target="_blank" onClick={() => setIsOpen(!isOpen)}
                        className="block mt-2 bg-black px-4 py-2 rounded hover:bg-white border-2 border-black hover:border-black transition text-center">
                        <span className="text-white hover:text-black">Currículo</span>
                    </Link>
                </div>

            )}
        </header>
    )
}