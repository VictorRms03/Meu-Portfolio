import AcademicExtensions from "./Experience/AcademicExtensions";
import WorkExperiences from "./Experience/WorkExperiences";
import Degrees from "./Experience/Degrees";
import Container from "@/components/ui/Container";
import WaveDivider from "@/components/ui/WaveDivider";

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative pt-16 pb-20 md:pb-24 bg-black text-white scroll-mt-20"
        >
            <WaveDivider position="top" />
            <WaveDivider position="bottom" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

            <Container className="max-w-11/12 md:max-w-9/12 flex justify-center mb-16">
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
