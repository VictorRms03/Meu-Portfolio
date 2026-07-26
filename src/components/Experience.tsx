import AcademicExtensions from "./Experience/AcademicExtensions";
import WorkExperiences from "./Experience/WorkExperiences";
import Degrees from "./Experience/Degrees";
import Container from "@/components/ui/Container";

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative pt-16 pb-20 md:pb-24 bg-black text-white scroll-mt-20"
        >
            <svg
                className="pointer-events-none absolute inset-x-0 bottom-full w-full text-black"
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path
                    fill="currentColor"
                    d="M0,32 C240,80 480,0 720,24 C960,48 1200,8 1440,40 L1440,80 L0,80 Z"
                />
            </svg>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

            <Container className="max-w-9/12 flex justify-center mb-16">
                <h2 className="text-5xl font-bold"> Experiências </h2>
            </Container>

            <div className="flex flex-col gap-16">
                <WorkExperiences />
                <Degrees />
                <AcademicExtensions />
            </div>
        </section>
    );
}
