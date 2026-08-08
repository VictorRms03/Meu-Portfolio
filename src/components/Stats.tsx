import StatCounters from "./Stats/StatCounters";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import SplitHeading from "@/components/motion/SplitHeading";
import { buildStats } from "@/data/stats";

export default function Stats() {
    return (
        <section id="stats" className="relative overflow-hidden pt-8 pb-12">
            <Container className="max-w-11/12 md:max-w-9/12 flex justify-center">
                <SplitHeading as="div">
                    <SectionHeading
                        prefix="Em"
                        highlight="Números"
                        className="text-4xl text-center"
                    />
                </SplitHeading>
            </Container>
            {/* calculado no servidor: o cliente recebe o número pronto e não
                há como o HTML e a hidratação discordarem */}
            <StatCounters stats={buildStats()} />
        </section>
    );
}
