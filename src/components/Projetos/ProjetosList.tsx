import Image from "next/image";

let id:number = 1;

export default function HeroSocials() {
    return (

        <div className="w-full flex flex-col justify-center items-center gap-30 mt-16">

        { gerarProjeto( id++, 
            "TrashTrack - Aplicativo para Reportagem e Geolocalização de Lixos", 
            "Trashtrack é um sistema desenvolvido para ajudar recicladores e coletores de lixo a se organizarem de " + 
            "forma mais eficiente, otimizando rotas e poupando tempo. Criado com Java, JavaScript, JQuery, Servlets e MariaDB, " +
            "o projeto também me proporcionou uma forte vivência com metodologias ágeis como Scrum e Kanban, " +
            "tendo inclusive atuado como Product Owner além de Desenvolvedor.", 
            "/images/TrashTrack.jpg",
            "https://github.com/VictorRms03/TrashTrack" ) }

        { gerarProjeto( id++, 
            "Contrack - Aplicativo de Gerênciamento de Contratos de Radiodifusão", 
            "Contrack é uma ferramenta em desenvolvimento para auxiliar na gestão de contratos da Rádio 92.1 " +
            "de São João da Boa Vista. O projeto faz parte de uma iniciativa da faculdade onde atuamos como uma software house, " +
            "e nele atuo como desenvolvedor, utilizando principalmente JavaScript e PHP, aplicando metodologias ágeis como Scrum e Kanban ao longo do processo.", 
            "/images/Contrack.svg",
            "https://github.com/ifsp-sbv-projetos-bcc/pidc-pde-2025") }

        { gerarProjeto( id++, 
            "UgaTeste - Website Teste Vocacional e Recomendação de Faculdades", 
            "UgaTeste é uma ferramenta de teste vocacional desenvolvida como TCC " +
            "no Ensino Médio Integrado ao Técnico em Informática para Internet. Criado em grupo, o projeto, " +
            "apesar de não ter tido um teor tão profissional como os outros, teve um impacto muito grande em meus conhecimentos " +
            "pois foi um dos meus primeiros contatos com o desenvolvimento de um site como um todo, utilizando principalmente de ferramentas como PHP e MySQL.",
            "/images/UgaTeste.jpg",
            "https://github.com/VictorRms03/UgaTeste") }
            
        </div>

    )
}

function gerarProjeto(id: number, titulo: string, descricao: string, imagem: string, link: string) {

    const isReverse:boolean = id % 2 == 0 ? true : false;

    return (

        <div className={"max-w-9/12 mx-auto px-6 flex flex-col items-center justify-between gap-20 " + (isReverse ? "md:flex-row-reverse" : "md:flex-row")}>
            
            <div className="w-1/2">

                <Image src={imagem} alt="Ilustração de dev" width={500} height={500}/>

            </div>

            <div className="w-1/2">

                <h2 className="text-5xl mb-3 font-extrabold">{id.toString().padStart(2, '0')}</h2>
                <h2 className="text-3xl font-extrabold">{titulo}</h2>

                <p className="my-6"> {descricao} </p>

                <a href={link} target="_blank">
                    <Image src="/icons/redirect.svg" alt="Redirecionar para projeto" width={20} height={20} className="invert" />
                </a>

            </div>

        </div>

    )

}