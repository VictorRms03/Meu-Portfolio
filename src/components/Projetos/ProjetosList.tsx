import Image from "next/image";

export default function HeroSocials() {
    return (

        <div className="w-full flex flex-col justify-center items-center gap-12 mt-16">
        
            <div className="max-w-9/12 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
            
                <div className="w-1/2">

                    <Image src="/images/devPicture.svg" alt="Ilustração de dev" width={600} height={600}/>

                </div>

                <div className="w-1/2">

                    <h2 className="text-5xl mb-3 font-extrabold">01</h2>
                    <h2 className="text-4xl font-extrabold">TrashTrack - Aplicativo para Reportagem e Geolocalização de Lixos</h2>

                    <p className="my-6"> Estudante da área de Computação desde 2019. Sempre apaixonado por programação e afins, 
                        busco agora oportunidades de colocar em prática meus conhecimentos obtidos nos últimos 
                        anos e acrescentar valor por onde passar, enquanto continuo a aprender mais e mais!
                    </p>

                    <a href="" target="_blank">
                        <Image src="/icons/redirect.svg" alt="Redirecionar para projeto" width={20} height={20} className="invert" />
                    </a>

                </div>

            </div>

            <div className="max-w-9/12 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
            
                <div className="w-1/2">

                    <h2 className="text-5xl mb-3 font-extrabold">02</h2>
                    <h2 className="text-4xl font-extrabold">Contrack - Aplicativo de Gerênciamento de Contratos de Radiodifusão</h2>

                    <p className="my-6"> Estudante da área de Computação desde 2019. Sempre apaixonado por programação e afins, 
                        busco agora oportunidades de colocar em prática meus conhecimentos obtidos nos últimos 
                        anos e acrescentar valor por onde passar, enquanto continuo a aprender mais e mais!
                    </p>

                    <a href="" target="_blank">
                        <Image src="/icons/redirect.svg" alt="Redirecionar para projeto" width={20} height={20} className="invert" />
                    </a>

                </div>

                <div className="w-1/2">

                    <Image src="/images/devPicture.svg" alt="Ilustração de dev" width={600} height={600}/>

                </div>

            </div>

            <div className="max-w-9/12 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
            
                <div className="w-1/2">

                    <Image src="/images/devPicture.svg" alt="Ilustração de dev" width={600} height={600}/>

                </div>

                <div className="w-1/2">

                    <h2 className="text-5xl mb-3 font-extrabold">03</h2>
                    <h2 className="text-4xl font-extrabold">UgaTeste - Website Teste Vocacional e Recomendação de Faculdades</h2>

                    <p className="my-6"> Estudante da área de Computação desde 2019. Sempre apaixonado por programação e afins, 
                        busco agora oportunidades de colocar em prática meus conhecimentos obtidos nos últimos 
                        anos e acrescentar valor por onde passar, enquanto continuo a aprender mais e mais!
                    </p>

                    <a href="" target="_blank">
                        <Image src="/icons/redirect.svg" alt="Redirecionar para projeto" width={20} height={20} className="invert" />
                    </a>

                </div>

            </div>
            
        </div>

    )
}