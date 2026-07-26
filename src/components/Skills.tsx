import SkillCards from "./Skills/SkillCards";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
    return (
        <section id="skills" className="pt-12 pb-36 scroll-mt-20">
            <Container className="max-w-9/12 flex flex-col items-center text-center gap-3">
                <SectionHeading prefix="Hard" highlight="Skills" />
                <p className="text-black/60 max-w-md">
                    Tecnologias que uso no dia a dia
                </p>
            </Container>
            <SkillCards />
        </section>
    );
}
