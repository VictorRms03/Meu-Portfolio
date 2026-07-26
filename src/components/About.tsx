"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const quickFacts = [
    "22 anos",
    "Desenvolvedor Full-Stack",
    "Bacharel em Ciência da Computação",
];

export default function About() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="sobre" className="py-12 scroll-mt-20">
            <Container className="max-w-11/12 md:max-w-9/12 px-6">
                <div
                    ref={ref}
                    className={`flex flex-col xl:flex-row items-center justify-between gap-12 transition-all duration-700 ${
                        visible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                >
                    <div className="relative shrink-0">
                        <div className="absolute -right-4 -bottom-4 h-64 w-64 rounded-full bg-black md:h-80 md:w-80" />
                        <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-black shadow-xl md:h-80 md:w-80">
                            <Image
                                src="/images/victorRamos2.jpg"
                                alt="Foto de Victor Ramos"
                                fill
                                sizes="(min-width: 768px) 320px, 256px"
                                className="object-cover grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0"
                            />
                        </div>
                    </div>

                    <div className="xl:w-1/2">
                        <SectionHeading prefix="Sobre" highlight="Mim!" />

                        <div className="mt-6 flex flex-wrap justify-center gap-2 xl:justify-start xl:mt-8">
                            {quickFacts.map((fact) => (
                                <span
                                    key={fact}
                                    className="rounded-full border border-black/20 px-4 py-1 text-sm text-black/70"
                                >
                                    {fact}
                                </span>
                            ))}
                        </div>

                        <p className="mt-6">
                            Olá! Tenho 22 anos e programo desde os 14 quando
                            entrei para o curso técnico em informática, desde
                            então venho estudo e me apaixonando cada vez mais
                            pela área da tecnologia. Sou formado como Bacharel
                            em Ciência da Computação e também sou formado em
                            Técnico em Informática para Internet, o que me deu
                            uma base sólida quanto ao desenvolvimento tanto
                            Back-end quanto Front-end. Gosto de explorar novas
                            linguagens e ferramentas e tenho facilidade em
                            aprender coisas novas e estou sempre em busca de
                            novos desafios.
                        </p>
                        <p className="mt-6">
                            Além da programação, sou uma pessoa comunicativa
                            que gosta de conversas sobre basicamente qualquer
                            assunto! Entre meus principais hobbies estão ouvir
                            música e jogos, o que ajuda a recarregar as
                            energias e manter a criatividade em dia.
                        </p>

                        <Link
                            href="#contato"
                            scroll={true}
                            className="group relative mt-8 inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-black px-6 py-2.5 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
                        >
                            <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                                Fale comigo
                            </span>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
