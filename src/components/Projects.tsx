import HorizontalProjects from "./Projects/HorizontalProjects";

export default function Projects() {
    return (
        <section id="projetos" className="relative py-16 md:py-26">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

            <HorizontalProjects />
        </section>
    );
}
