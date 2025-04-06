import Image from "next/image";
import HeroSocials from "./Hero/HeroSocials";

export default function Hero() {
    return (

        <section className="py-12">

            <div className="max-w-9/12 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">

                <div className="w-1/2">

                    <h2 className="text-5xl mb-3"> Olá, eu sou <span className="font-extrabold">Victor Ramos!</span> </h2>
                    <h2 className="text-5xl mb-6"> <span className="font-extrabold">Desenvolvedor</span> Fullstack. </h2>

                    <p> Estudante da área de Computação desde 2019. Sempre apaixonado por programação e afins, 
                        busco agora oportunidades de colocar em prática meus conhecimentos obtidos nos últimos 
                        anos e acrescentar valor por onde passar, enquanto continuo a aprender mais e mais!
                    </p>

                </div>

                <div className="w-1/2">

                    <Image src="/images/devPicture.svg" alt="Ilustração de dev" width={600} height={600}/>

                </div>

            </div>

            <HeroSocials />

        </section>

    )
}