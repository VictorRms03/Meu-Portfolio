import Image from "next/image";

export default function Hero() {
    return (

        <section className="mt-20">

            <div className="max-w-9/12 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">

                <div className="w-1/2">

                    <h2 className="text-5xl mb-3"> Olá, eu sou <span className="font-extrabold">Victor Ramos!</span> </h2>
                    <h2 className="text-5xl mb-6"> <span className="font-extrabold">Desenvolvedor</span> Fullstack. </h2>

                    <p> Estudante da área de Computação desde 2019. Sempre apaixonado por programação e afins, 
                        busco agora oportunidades de colocar em prática meus conhecimentos obtidos nos últimos 
                        anos e acrescentar valor por onde passar, enquanto continuo a aprender mais e mais!
                    </p>

                </div>

                <div>

                    <Image src="/images/devPicture.svg" alt="Ilustração de dev" width={600} height={600}/>

                </div>

            </div>

            <div className="w-full flex justify-center items-center gap-12 mt-16">

                <a href="https://www.instagram.com/victor_rms01/" target="_blank" rel="noopener noreferrer" 
                    className="p-4 rounded bg-white border border-black">

                    <Image src={"/icons/instagram.svg"} alt="icone instagram" width={30} height={30}/>

                </a>

                <a href="https://www.linkedin.com/in/victor-ramos3/" target="_blank" rel="noopener noreferrer"
                    className="p-4 rounded bg-white border border-black" >

                    <Image src={"/icons/linkedin.svg"} alt="icone instagram" width={30} height={30}/>

                </a>

                <a href="https://github.com/VictorRms03" target="_blank" rel="noopener noreferrer"
                    className="p-4 rounded bg-white border border-black">

                    <Image src={"/icons/github.svg"} alt="icone instagram" width={30} height={30}/>

                </a>
                
            </div>

        </section>

    )
}