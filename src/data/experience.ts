export type ExperienceType = "work" | "degree" | "extension";

interface TimelineEntryInput {
    title: string;
    /** início no formato "AAAA-MM" */
    start: string;
    /** fim no formato "AAAA-MM", ou null para em andamento */
    end: string | null;
    type: ExperienceType;
    description?: string;
    /** temas/stack da experiência, exibidos como tags no card */
    tags?: string[];
}

export interface TimelineEntry extends TimelineEntryInput {
    /** período já formatado, derivado de start/end */
    date: string;
    /** ano de início, usado no numeral gigante ao lado da timeline */
    year: string;
}

export const experienceLabels: Record<ExperienceType, string> = {
    work: "Profissional",
    degree: "Formação",
    extension: "Extensão",
};

/** formação fala de aprendizado; trabalho e extensão falam de atividade */
export const descriptionLabels: Record<ExperienceType, string> = {
    work: "Principais atividades:",
    extension: "Principais atividades:",
    degree: "Principais aprendizados:",
};

const MONTHS = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
];

function formatMonth(iso: string): string {
    const [year, month] = iso.split("-");
    return `${MONTHS[Number(month) - 1]} ${year}`;
}

/**
 * A ordem e os rótulos de data são derivados, nunca digitados: adicionar uma
 * entrada nova em qualquer posição do array já a coloca no lugar certo.
 */
const entries: TimelineEntryInput[] = [
    {
        title: "Desenvolvedor Full-Stack Junior - DevCore",
        start: "2025-08",
        end: null,
        type: "work",
        description:
            "Planejamento e Desenvolvimento de aplicações web e aplicativos mobile, Relacionamento e coordenação com cliente, Metodologias Ágeis, cooperação no ambiente de trabalho, bom relacionamento interpessoal.",
        tags: ["Web", "Mobile", "Metodologias Ágeis"],
    },
    {
        title: "Iniciação Ciêntifica - Desenvolvimento de Aplicativo para auxílio no projeto e no uso de medidores de vazão de fluidos",
        start: "2025-02",
        end: "2025-12",
        type: "extension",
        description:
            "Desenvolvimento de aplicativo Android, Estudo de Medidores de Vazão por dispositivos de pressão diferencial, Modelagem e Projeto do aplicativo, Projeto e Aplicação de Testes, Documentação Ágil.",
        tags: ["Android", "Modelagem", "Testes"],
    },
    {
        title: "Bolsa de Extensão - Desenvolvedor Web para o Conselho do Café da Região de Pinhal (COCAMPI)",
        start: "2024-06",
        end: "2025-01",
        type: "extension",
        description:
            "Desenvolvimento do Website, Apuramento de Requisitos, Resolução de Problemas, Condutor de Reuniões e Comunicação com outras empresas para Resolução de Problemas.",
        tags: ["Web", "Requisitos", "Reuniões"],
    },
    {
        title: "Bolsa de Ensino - Estudo e Desenvolvimento para Portal de Ensino Web",
        start: "2023-02",
        end: "2023-12",
        type: "extension",
        description:
            "Pesquisa, Estudo, Testes e Documentação de cursos e ferramentas básicas para aprendizado de Desenvolvimento, Documentação destas ferramentas.",
        tags: ["Pesquisa", "Testes", "Documentação"],
    },
    {
        title: "Diretor de Eventos - Associação Acadêmica Atlética Arthur Chiodi",
        start: "2023-01",
        end: "2023-12",
        type: "extension",
        description:
            "Organizador de Eventos, Busca de Locais, Resolução de problemas e Gerênciador de Logistica.",
        tags: ["Gestão", "Eventos", "Logística"],
    },
    {
        title: "Bacharelado em Ciência da Computação - Instituto Federal de São Paulo (IFSP)",
        start: "2022-03",
        end: "2025-12",
        type: "degree",
        description:
            "Entendimento aprofundado de linguagens de programação e bancos de dados, Metodologias Ágeis e Tradicionais, Gerenciamento e Liderança de equipes.",
        tags: ["Bancos de Dados", "Metodologias Ágeis", "Liderança"],
    },
    {
        title: "Técnico em Informática para Internet - Escola Técnica Estadual (ETEC)",
        start: "2019-01",
        end: "2021-12",
        type: "degree",
        description:
            "Lógica de Programação, básico das linguagens e paradigmas de programação, noções de ferramentas de design e Pacote Office.",
        tags: ["Lógica de Programação", "Design", "Pacote Office"],
    },
];

/** lista cronológica, da mais recente para a mais antiga */
export const timeline: TimelineEntry[] = [...entries]
    .sort((a, b) => b.start.localeCompare(a.start))
    .map((entry) => ({
        ...entry,
        year: entry.start.slice(0, 4),
        date: `${formatMonth(entry.start)} - ${
            entry.end ? formatMonth(entry.end) : "Presente"
        }`,
    }));
