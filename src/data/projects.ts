export interface Project {
    title: string;
    description: string;
    imagePath: string;
    link: string;
    techStack: string[];
}

export const projects: Project[] = [
    {
        title: "Contrack - Aplicativo de Gerênciamento de Contratos de Radiodifusão",
        description:
            "Contrack é uma ferramenta em desenvolvimento para auxiliar na gestão de contratos da Rádio 92.1 " +
            "de São João da Boa Vista. O projeto faz parte de uma iniciativa da faculdade onde atuamos como uma software house, " +
            "e nele atuo como desenvolvedor, utilizando principalmente JavaScript e PHP, aplicando metodologias ágeis como Scrum e Kanban ao longo do processo.",
        imagePath: "/images/Contrack.png",
        link: "https://github.com/ifsp-sbv-projetos-bcc/pidc-pde-2025",
        techStack: ["JavaScript", "PHP"],
    },
    {
        title: "Tic Tac Toe: Online - Jogo interativo online",
        description:
            "Tic Tac Toe: Online é um jogo online que utiliza WebSockets para comunicação com os jogadores, " +
            "utilizando de Node.js no backend e Next.js com TailwindCSS no frontend.",
        imagePath: "/images/TicTacToe.jpg",
        link: "https://tic-tac-toe-online-victorrms.vercel.app/",
        techStack: ["Node.js", "Next.js", "TailwindCSS", "WebSockets"],
    },
];
