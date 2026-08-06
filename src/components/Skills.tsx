import SkillCards from "./Skills/SkillCards";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SplitHeading from "@/components/motion/SplitHeading";
import Reveal from "@/components/motion/Reveal";

export default function Skills() {
    return (
        <section id="skills" className="pt-12 pb-36">
            <Container className="max-w-11/12 md:max-w-9/12 flex flex-col items-center text-center gap-3">
                <SplitHeading as="div">
                    <SectionHeading prefix="Hard" highlight="Skills" />
                </SplitHeading>
                <Reveal>
                    <p className="text-muted max-w-md">
                        Tecnologias que uso no dia a dia
                    </p>
                </Reveal>
            </Container>
            <SkillCards />
        </section>
    );
}
