import Image from "next/image";

export default function HeroSocials() {
    return (

        <div className="w-full flex flex-col justify-center items-center gap-30 mt-16">
        
            <div className="max-w-9/12 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-20">
            
                <div className="w-1/2">

                    <Image src="/images/TrashTrack.jpg" alt="Ilustração de dev" width={500} height={500}/>

                </div>

                <div className="w-1/2">

                    <h2 className="text-5xl mb-3 font-extrabold">01</h2>
                    <h2 className="text-3xl font-extrabold">TrashTrack - Aplicativo para Reportagem e Geolocalização de Lixos</h2>

                    <p className="my-6"> Trashtrack é um sistema desenvolvido para ajudar recicladores e coletores de lixo a se organizarem de forma mais eficiente,
                         otimizando rotas e poupando tempo. Criado com Java, JavaScript, JQuery, Servlets e MariaDB, o projeto também me proporcionou uma forte vivência
                         com metodologias ágeis como Scrum e Kanban, tendo inclusive atuado como Product Owner além de Desenvolvedor.
                    </p>

                    <a href="https://github.com/VictorRms03/TrashTrack" target="_blank">
                        <Image src="/icons/redirect.svg" alt="Redirecionar para projeto" width={20} height={20} className="invert" />
                    </a>

                </div>

            </div>

            <div className="max-w-9/12 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-20">
            
                <div className="w-1/2">

                    <h2 className="text-5xl mb-3 font-extrabold">02</h2>
                    <h2 className="text-3xl font-extrabold">Contrack - Aplicativo de Gerênciamento de Contratos de Radiodifusão</h2>

                    <p className="my-6"> Contrack é uma ferramenta em desenvolvimento para auxiliar na gestão de contratos da Rádio 92.1
                         de São João da Boa Vista. O projeto faz parte de uma iniciativa da faculdade onde atuamos como uma software house,
                         e nele atuo como desenvolvedor, utilizando principalmente JavaScript e PHP, aplicando metodologias ágeis como Scrum e Kanban ao longo do processo.
                    </p>

                    <a href="https://github.com/ifsp-sbv-projetos-bcc/pidc-pde-2025" target="_blank">
                        <Image src="/icons/redirect.svg" alt="Redirecionar para projeto" width={20} height={20} className="invert" />
                    </a>

                </div>

                <div className="w-1/2">

                    <Image src="/images/Contrack.svg" alt="Ilustração de dev" width={500} height={500}/>

                </div>

            </div>

            <div className="max-w-9/12 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-20">
            
                <div className="w-1/2">

                    <Image src="/images/UgaTeste.jpg" alt="Ilustração de dev" width={500} height={500}/>

                </div>

                <div className="w-1/2">

                    <h2 className="text-5xl mb-3 font-extrabold">03</h2>
                    <h2 className="text-3xl font-extrabold">UgaTeste - Website Teste Vocacional e Recomendação de Faculdades</h2>

                    <p className="my-6"> UgaTeste é uma ferramenta de teste vocacional desenvolvida como TCC
                         no Ensino Médio Integrado ao Técnico em Informática para Internet. Criado em grupo, o projeto, 
                         apesar de não ter tido um teor tão profissional como os outros, teve um impacto muito grande em meus conhecimentos
                         pois foi um dos meus primeiros contatos com o desenvolvimento de um site como um todo, utilizando principalmente de ferramentas como PHP e MySQL.
                    </p>

                    <a href="https://github.com/VictorRms03/UgaTeste" target="_blank">
                        <Image src="/icons/redirect.svg" alt="Redirecionar para projeto" width={20} height={20} className="invert" />
                    </a>

                </div>

            </div>
            
        </div>

    )
}