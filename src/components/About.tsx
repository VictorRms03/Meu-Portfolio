import AboutPortrait from "./About/AboutPortrait";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import ScrollHighlightText from "@/components/motion/ScrollHighlightText";
import ActionButton from "@/components/ui/ActionButton";
import { currentAge } from "@/data/profile";

export default function About() {
    // server component: a idade é resolvida no servidor e chega pronta
    const age = currentAge();

    const quickFacts = [
        `${age} anos`,
        "Desenvolvedor Full-Stack",
        "Bacharel em Ciência da Computação",
    ];

    return (
        <section id="sobre" className="py-28 md:py-36">
            <Container className="max-w-11/12 md:max-w-9/12 px-6">
                <div className="flex flex-col items-center gap-16 xl:flex-row xl:items-start xl:justify-between">
                    <AboutPortrait />

                    <div className="xl:w-1/2">
                        <SplitHeading>
                            <SectionHeading prefix="Sobre" highlight="Mim!" />
                        </SplitHeading>

                        <Reveal
                            childrenSelector=".fact"
                            stagger={0.08}
                            className="mt-6 flex flex-wrap justify-center gap-2 xl:mt-8 xl:justify-start"
                        >
                            {quickFacts.map((fact) => (
                                <span
                                    key={fact}
                                    className="fact rounded-full border border-line px-4 py-1 text-sm text-muted"
                                >
                                    {fact}
                                </span>
                            ))}
                        </Reveal>

                        <ScrollHighlightText className="mt-8">
                            Olá! Tenho {age} anos e programo desde os 14 quando
                            entrei para o curso técnico em informática, desde
                            então venho estudo e me apaixonando cada vez mais
                            pela área da tecnologia. Sou formado como Bacharel
                            em Ciência da Computação e também sou formado em
                            Técnico em Informática para Internet, o que me deu
                            uma base sólida quanto ao desenvolvimento tanto
                            Back-end quanto Front-end. Gosto de explorar novas
                            linguagens e ferramentas e tenho facilidade em
                            aprender coisas novas e estou sempre em busca de
                            novos desafios.
                        </ScrollHighlightText>

                        <ScrollHighlightText className="mt-6">
                            Além da programação, sou uma pessoa comunicativa
                            que gosta de conversas sobre basicamente qualquer
                            assunto! Entre meus principais hobbies estão ouvir
                            música e jogos, o que ajuda a recarregar as
                            energias e manter a criatividade em dia.
                        </ScrollHighlightText>

                        <Reveal className="mt-10 flex justify-center xl:justify-start">
                            <ActionButton
                                href="#contato"
                                variant="outline"
                                effect="underline"
                            >
                                Fale comigo
                            </ActionButton>
                        </Reveal>
                    </div>
                </div>
            </Container>
        </section>
    );
}
