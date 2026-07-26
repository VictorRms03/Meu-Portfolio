import ProjectsList from "./Projects/ProjectsList";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import WaveDivider from "@/components/ui/WaveDivider";

export default function Projects() {
    return (
        <section
            id="projetos"
            className="relative py-16 md:py-26 bg-black text-white scroll-mt-20"
        >
            <WaveDivider position="top" />
            <WaveDivider position="bottom" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

            <Container className="max-w-9/12 flex justify-center">
                <SectionHeading
                    prefix="Meus"
                    highlight="Projetos"
                    className="text-5xl text-center md:text-left"
                    highlightClassName="font-bold"
                />
            </Container>
            <ProjectsList />
        </section>
    );
}
