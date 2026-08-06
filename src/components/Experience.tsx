import AcademicExtensions from "./Experience/AcademicExtensions";
import WorkExperiences from "./Experience/WorkExperiences";
import Degrees from "./Experience/Degrees";
import Container from "@/components/ui/Container";
import SplitHeading from "@/components/motion/SplitHeading";

export default function Experience() {
    return (
        <section id="experience" className="relative pt-16 pb-20 md:pb-24">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

            <Container className="max-w-11/12 md:max-w-9/12 flex justify-center mb-16">
                <SplitHeading as="h2" className="text-5xl font-bold">
                    Experiências
                </SplitHeading>
            </Container>

            <div className="flex flex-col gap-16">
                <WorkExperiences />
                <Degrees />
                <AcademicExtensions />
            </div>
        </section>
    );
}
