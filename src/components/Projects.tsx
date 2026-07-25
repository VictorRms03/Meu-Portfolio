import ProjectsList from "./Projects/ProjectsList";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
    return (
        <section
            id="projetos"
            className="py-16 md:py-26 bg-black text-white scroll-mt-20"
        >
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
