import SkillCards from "./Skills/SkillCards";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
    return (
        <section id="skills" className="py-12 scroll-mt-20">
            <Container className="max-w-9/12 flex justify-center">
                <SectionHeading prefix="Hard" highlight="Skills" />
            </Container>
            <SkillCards />
        </section>
    );
}
