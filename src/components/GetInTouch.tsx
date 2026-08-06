import GetInTouchSocials from "./GetInTouch/GetInTouchSocials";
import ContactLines from "./GetInTouch/ContactLines";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";

export default function GetInTouch() {
    return (
        <section
            id="contato"
            className="flex md:py-16 lg:max-w-11/12 xl:max-w-9/12 mx-auto py-12 lg:py-36"
        >
            <Reveal className="mx-auto flex w-full min-w-0 max-w-2xl flex-col items-center gap-8 px-6 text-center lg:px-0">
                <SplitHeading>
                    <SectionHeading
                        prefix="Entre em"
                        highlight="Contato!"
                        className="text-5xl lg:text-6xl mb-3"
                    />
                </SplitHeading>
                <p className="font-light">
                    Estou sempre aberto a novas oportunidades e desafios como
                    desenvolvedor!
                </p>
                <GetInTouchSocials />
                <ContactLines />
            </Reveal>
        </section>
    );
}
