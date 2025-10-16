import Image from "next/image";

interface ProjectCardProps {
    id: number;
    title: string;
    description: string;
    imagePath: string;
    link: string;
}

function ProjectCard({
    id,
    title,
    description,
    imagePath,
    link,
}: ProjectCardProps) {
    const isReverse: boolean = id % 2 == 0 ? true : false;
    return (
        <div
            className={
                "xl:max-w-9/12 mx-auto px-6 flex flex-col items-center justify-between gap-10 xl:gap-20 " +
                (isReverse ? "xl:flex-row-reverse" : "xl:flex-row")
            }
        >
            <div className="xl:w-1/2 flex justify-center items-center">
                <Image
                    src={imagePath}
                    alt="Ilustração de dev"
                    width={500}
                    height={500}
                    className="w-110 h-auto xl:w-120"
                />
            </div>
            <div className="xl:w-1/2">
                <h2 className="text-4xl xl:text-5xl mb-3 font-extrabold">
                    {id.toString().padStart(2, "0")}
                </h2>
                <h2 className="text-2xl xl:text-3xl font-extrabold">{title}</h2>
                <p className="my-6"> {description} </p>
                <a href={link} target="_blank">
                    <Image
                        src="/icons/redirect.svg"
                        alt="Redirecionar para projeto"
                        width={20}
                        height={20}
                        className="invert"
                    />
                </a>
            </div>
        </div>
    );
}

export default function ProjectsList() {
    const projects = [
        {
            title: "TrashTrack - Aplicativo para Reportagem e Geolocalização de Lixos",
            description:
                "Trashtrack é um sistema desenvolvido para ajudar recicladores e coletores de lixo a se organizarem de " +
                "forma mais eficiente, otimizando rotas e poupando tempo. Criado com Java, JavaScript, JQuery, Servlets e MariaDB, " +
                "o projeto também me proporcionou uma forte vivência com metodologias ágeis como Scrum e Kanban, " +
                "tendo inclusive atuado como Product Owner além de Desenvolvedor.",
            imagePath: "/images/trashTrack.jpg",
            link: "https://github.com/VictorRms03/TrashTrack",
        },
        {
            title: "Contrack - Aplicativo de Gerênciamento de Contratos de Radiodifusão",
            description:
                "Contrack é uma ferramenta em desenvolvimento para auxiliar na gestão de contratos da Rádio 92.1 " +
                "de São João da Boa Vista. O projeto faz parte de uma iniciativa da faculdade onde atuamos como uma software house, " +
                "e nele atuo como desenvolvedor, utilizando principalmente JavaScript e PHP, aplicando metodologias ágeis como Scrum e Kanban ao longo do processo.",
            imagePath: "/images/contrack.png",
            link: "https://github.com/ifsp-sbv-projetos-bcc/pidc-pde-2025",
        },
        {
            title: "Tic Tac Toe: Online - Jogo interativo online",
            description:
                "Tic Tac Toe: Online é um jogo online que utiliza WebSockets para comunicação com os jogadores, " +
                "utilizando de Node.js no backend e Next.js com TailwindCSS no frontend.",
            imagePath: "/images/ticTacToe.jpg",
            link: "https://tic-tac-toe-online-victorrms.vercel.app/",
        },
        {
            title: "UgaTeste - Website Teste Vocacional e Recomendação de Faculdades",
            description:
                "UgaTeste é uma ferramenta de teste vocacional desenvolvida como TCC " +
                "no Ensino Médio Integrado ao Técnico em Informática para Internet. Criado em grupo, o projeto, " +
                "apesar de não ter tido um teor tão profissional como os outros, teve um impacto muito grande em meus conhecimentos " +
                "pois foi um dos meus primeiros contatos com o desenvolvimento de um site como um todo, utilizando principalmente de ferramentas como PHP e MySQL.",
            imagePath: "/images/ugaTeste.jpg",
            link: "https://github.com/VictorRms03/UgaTeste",
        },
    ];

    return (
        <div className="md:px-12 xl:px-0 w-full flex flex-col justify-center items-center gap-15 xl:gap-30 mt-16">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    id={index + 1}
                    title={project.title}
                    description={project.description}
                    imagePath={project.imagePath}
                    link={project.link}
                />
            ))}
        </div>
    );
}
