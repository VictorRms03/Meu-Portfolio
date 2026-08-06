import StatCounters from "./Stats/StatCounters";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import SplitHeading from "@/components/motion/SplitHeading";

export default function Stats() {
    return (
        <section id="stats" className="relative overflow-hidden">
            <Container className="max-w-11/12 md:max-w-9/12 flex justify-center pt-16">
                <SplitHeading as="div">
                    <SectionHeading
                        prefix="Em"
                        highlight="Números"
                        className="text-4xl text-center"
                    />
                </SplitHeading>
            </Container>
            <StatCounters />
        </section>
    );
}
