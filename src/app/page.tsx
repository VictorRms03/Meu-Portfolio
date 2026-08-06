import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GetInTouch from "@/components/GetInTouch";

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
