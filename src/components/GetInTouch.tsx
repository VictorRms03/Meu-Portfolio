import GetInTouchSocials from "./GetInTouch/GetInTouchSocials";
import ContactLines from "./GetInTouch/ContactLines";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";

export default function GetInTouch() {
    return (
        <section
            id="contato"
            className="relative mx-auto flex py-20 lg:max-w-11/12 lg:py-36 xl:max-w-9/12"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/3"
                style={{
                    background:
                        "radial-gradient(circle closest-side, color-mix(in oklab, var(--accent) 18%, transparent), transparent)",
                }}
                data-speed="0.85"
            />

            <div className="relative mx-auto flex w-full max-w-3xl min-w-0 flex-col items-center gap-10 px-6 text-center lg:px-0">
                <SplitHeading
                    as="h2"
                    variant="chars"
                    className="text-[clamp(2.25rem,7vw,4.5rem)] leading-[1.05] font-extrabold tracking-tight"
                >
                    Vamos construir algo?
                </SplitHeading>

                <Reveal>
                    <p className="max-w-md font-light text-muted">
                        Estou sempre aberto a novas oportunidades e desafios
                        como desenvolvedor.
                    </p>
                </Reveal>

                <ContactLines />
                <GetInTouchSocials />
            </div>
        </section>
    );
}
