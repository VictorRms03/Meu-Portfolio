export interface Project {
    title: string;
    description: string;
    imagePath: string;
    link: string;
}

export const projects: Project[] = [
    {
        title: "TrashTrack - Aplicativo para Reportagem e Geolocalização de Lixos",
        description:
            "Trashtrack é um sistema desenvolvido para ajudar recicladores e coletores de lixo a se organizarem de " +
            "forma mais eficiente, otimizando rotas e poupando tempo. Criado com Java, JavaScript, JQuery, Servlets e MariaDB, " +
            "o projeto também me proporcionou uma forte vivência com metodologias ágeis como Scrum e Kanban, " +
            "tendo inclusive atuado como Product Owner além de Desenvolvedor.",
        imagePath: "/images/TrashTrack.jpg",
        link: "https://github.com/VictorRms03/TrashTrack",
    },
    {
        title: "Contrack - Aplicativo de Gerênciamento de Contratos de Radiodifusão",
        description:
            "Contrack é uma ferramenta em desenvolvimento para auxiliar na gestão de contratos da Rádio 92.1 " +
            "de São João da Boa Vista. O projeto faz parte de uma iniciativa da faculdade onde atuamos como uma software house, " +
            "e nele atuo como desenvolvedor, utilizando principalmente JavaScript e PHP, aplicando metodologias ágeis como Scrum e Kanban ao longo do processo.",
        imagePath: "/images/Contrack.png",
        link: "https://github.com/ifsp-sbv-projetos-bcc/pidc-pde-2025",
    },
    {
        title: "Tic Tac Toe: Online - Jogo interativo online",
        description:
            "Tic Tac Toe: Online é um jogo online que utiliza WebSockets para comunicação com os jogadores, " +
            "utilizando de Node.js no backend e Next.js com TailwindCSS no frontend.",
        imagePath: "/images/TicTacToe.jpg",
        link: "https://tic-tac-toe-online-victorrms.vercel.app/",
    },
    {
        title: "UgaTeste - Website Teste Vocacional e Recomendação de Faculdades",
        description:
            "UgaTeste é uma ferramenta de teste vocacional desenvolvida como TCC " +
            "no Ensino Médio Integrado ao Técnico em Informática para Internet. Criado em grupo, o projeto, " +
            "apesar de não ter tido um teor tão profissional como os outros, teve um impacto muito grande em meus conhecimentos " +
            "pois foi um dos meus primeiros contatos com o desenvolvimento de um site como um todo, utilizando principalmente de ferramentas como PHP e MySQL.",
        imagePath: "/images/UgaTeste.jpg",
        link: "https://github.com/VictorRms03/UgaTeste",
    },
];
