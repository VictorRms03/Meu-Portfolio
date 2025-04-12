import Image from "next/image";
import HeroSocials from "./Hero/HeroSocials";

export default function Hero() {
    return (

        <section id="hero" className="pt-0 md:pt-12 lg:pt-24 pb-12 scroll-mt-30">

            <div className="max-w-11/12 lg:max-w-9/12 md:text-center lg:text-left mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

                <div className="lg:w-1/2">

                    <h2 className="text-4xl lg:text-5xl mb-1 lg:mb-3"> Olá, eu sou <span className="font-extrabold">Victor Ramos!</span> </h2>
                    <h2 className="text-4xl lg:text-5xl mb-6"> <span className="lg:font-extrabold">Desenvolvedor</span> Fullstack. </h2>

                    <p> Estudante da área de Computação desde 2019. Sempre apaixonado por programação e afins, 
                        busco agora oportunidades de colocar em prática meus conhecimentos obtidos nos últimos 
                        anos e acrescentar valor por onde passar, enquanto continuo a aprender mais e mais!
                    </p>

                </div>

                <div className="w-1/2">

                    <Image src="/images/devPicture.svg" alt="Ilustração de dev" width={0} height={0} 
                        className="hidden lg:flex lg:w-150 lg:h-125"/>

                </div>

            </div>

            <HeroSocials />

        </section>

    )
}