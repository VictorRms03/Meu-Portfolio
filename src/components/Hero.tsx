import Image from "next/image";
import HeroSocials from "./Hero/HeroSocials";

export default function Hero() {
    return (

        <section id="hero" className="pt-0 md:pt-24 pb-12 scroll-mt-30">

            <div className="max-w-11/12 md:max-w-9/12 mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                <div className="md:w-1/2">

                    <h2 className="text-4xl md:text-5xl mb-1 md:mb-3"> Olá, eu sou <span className="font-extrabold">Victor Ramos!</span> </h2>
                    <h2 className="text-4xl md:text-5xl mb-6"> <span className="md:font-extrabold">Desenvolvedor</span> Fullstack. </h2>

                    <p> Estudante da área de Computação desde 2019. Sempre apaixonado por programação e afins, 
                        busco agora oportunidades de colocar em prática meus conhecimentos obtidos nos últimos 
                        anos e acrescentar valor por onde passar, enquanto continuo a aprender mais e mais!
                    </p>

                </div>

                <div className="w-1/2">

                    <Image src="/images/devPicture.svg" alt="Ilustração de dev" width={0} height={0} 
                        className="hidden md:flex md:w-150 md:h-125"/>

                </div>

            </div>

            <HeroSocials />

        </section>

    )
}