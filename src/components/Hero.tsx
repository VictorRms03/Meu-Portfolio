import Image from "next/image";
import Link from "next/link";
import HeroSocials from "./Hero/HeroSocials";
import Container from "@/components/ui/Container";

export default function Hero() {
    return (
        <section
            id="hero"
            className="pt-0 md:pt-12 lg:pt-24 pb-12 scroll-mt-30"
        >
            <Container className="max-w-11/12 lg:max-w-9/12 md:text-center lg:text-left px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                <div className="lg:w-1/2">
                    <h2 className="text-4xl lg:text-5xl mb-1 lg:mb-3 animate-[fade-in-up_0.6s_ease-out_both]">
                        Olá, eu sou
                        <span className="font-extrabold"> Victor Ramos! </span>
                    </h2>
                    <h2 className="text-4xl lg:text-5xl mb-6 animate-[fade-in-up_0.6s_ease-out_0.1s_both]">
                        <span className="lg:font-extrabold">
                            {" "}
                            Desenvolvedor{" "}
                        </span>
                        Fullstack.
                    </h2>
                    <p className="animate-[fade-in-up_0.6s_ease-out_0.2s_both]">
                        Estudante da área de Computação desde 2019. Sempre
                        apaixonado por programação e afins, busco agora
                        oportunidades de colocar em prática meus conhecimentos
                        obtidos nos últimos anos e acrescentar valor por onde
                        passar, enquanto continuo a aprender mais e mais!
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start animate-[fade-in-up_0.6s_ease-out_0.3s_both]">
                        <Link
                            href="#projetos"
                            scroll={true}
                            className="group relative overflow-hidden rounded-full border-2 border-black bg-black px-6 py-2.5 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
                        >
                            <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                                Ver projetos
                            </span>
                        </Link>
                        <Link
                            href="#contato"
                            scroll={true}
                            className="rounded-full border-2 border-black px-6 py-2.5 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/20"
                        >
                            Fale comigo
                        </Link>
                    </div>
                </div>

                <div className="w-1/2">
                    <Image
                        src="/images/devPicture.svg"
                        alt="Ilustração de dev"
                        width={0}
                        height={0}
                        className="hidden lg:flex lg:w-150 lg:h-125 animate-[float_4s_ease-in-out_infinite]"
                    />
                </div>
            </Container>

            <HeroSocials />

            <div className="mt-10 flex justify-center">
                <Link
                    href="#skills"
                    scroll={true}
                    aria-label="Rolar para a próxima seção"
                    className="animate-bounce text-black/40 transition-colors hover:text-black"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
