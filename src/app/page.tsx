import Hero from "@/components/Hero";
import Marquee from "@/components/motion/Marquee";
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
            <Marquee />
            <Skills />
            <Stats />
            <Experience />
            <About />
            <Projects />
            <GetInTouch />
        </>
    );
}
