import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GetInTouch from "@/components/GetInTouch";

/**
 * A página é estática, então idade e "anos programando" seriam congelados no
 * momento do build. Revalidando a cada 24h, o HTML se regenera sozinho e os
 * números nunca ficam mais de um dia atrasados — sem custo por visita.
 */
export const revalidate = 86400;

export default function Home() {
    return (
        <>
            <Hero />
            <Skills />
            <Stats />
            <Experience />
            <About />
            <Projects />
            <GetInTouch />
        </>
    );
}
