import ProjectsList from "./Projects/ProjectsList";

export default function Projects() {
    return (
        <section
            id="projetos"
            className="py-16 md:py-26 bg-black text-white scroll-mt-20"
        >
            <div className="max-w-9/12 mx-auto flex justify-center">
                <h2 className="text-5xl text-center md:text-left">
                    Meus <span className="font-bold">Projetos</span>
                </h2>
            </div>
            <ProjectsList />
        </section>
    );
}
