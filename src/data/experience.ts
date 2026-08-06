export type ExperienceType = "work" | "degree" | "extension";

export interface TimelineEntry {
    title: string;
    date: string;
    /** ano de início — usado no numeral gigante do lado vazio da timeline */
    year: string;
    type: ExperienceType;
    description?: string;
}

export const experienceLabels: Record<ExperienceType, string> = {
    work: "Profissional",
    degree: "Formação",
    extension: "Extensão",
};

/** uma única lista cronológica, da mais recente para a mais antiga */
export const timeline: TimelineEntry[] = [
    {
        title: "Desenvolvedor Full-Stack Junior - DevCore",
        date: "Ago 2025 - Presente",
        year: "2025",
        type: "work",
    },
    {
        title: "Iniciação Ciêntifica - Desenvolvimento de Aplicativo para auxílio no projeto e no uso de medidores de vazão de fluidos",
        date: "Fev 2025 - Dez 2025",
        year: "2025",
        type: "extension",
        description:
            "Desenvolvimento de aplicativo Android, Estudo de Medidores de Vazão por dispositivos de pressão diferencial, Modelagem e Projeto do aplicativo, Projeto e Aplicação de Testes, Documentação Ágil.",
    },
    {
        title: "Bolsa de Extensão - Desenvolvedor Web para o Conselho do Café da Região de Pinhal (COCAMPI)",
        date: "Jun 2024 - Jan 2025",
        year: "2024",
        type: "extension",
        description:
            "Desenvolvimento do Website, Apuramento de Requisitos, Resolução de Problemas, Condutor de Reuniões e Comunicação com outras empresas para Resolução de Problemas.",
    },
    {
        title: "Bolsa de Ensino - Estudo e Desenvolvimento para Portal de Ensino Web",
        date: "Fev 2023 - Dez 2023",
        year: "2023",
        type: "extension",
        description:
            "Pesquisa, Estudo, Testes e Documentação de cursos e ferramentas básicas para aprendizado de Desenvolvimento, Documentação destas ferramentas.",
    },
    {
        title: "Diretor de Eventos - Associação Acadêmica Atlética Arthur Chiodi",
        date: "Jan 2023 - Dez 2023",
        year: "2023",
        type: "extension",
        description:
            "Organizador de Eventos, Busca de Locais, Resolução de problemas e Gerênciador de Logistica.",
    },
    {
        title: "Bacharelado em Ciência da Computação - Instituto Federal de São Paulo (IFSP)",
        date: "Mar 2022 - Dez 2025",
        year: "2022",
        type: "degree",
    },
    {
        title: "Técnico em Informática para Internet - Escola Técnica Estadual (ETEC)",
        date: "Jan 2019 - Dez 2021",
        year: "2019",
        type: "degree",
    },
];
