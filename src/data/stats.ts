export interface Stat {
    value: number;
    suffix?: string;
    label: string;
}

export const stats: Stat[] = [
    { value: 7, suffix: "+", label: "Anos programando" },
    { value: 7, label: "Tecnologias no dia a dia" },
    { value: 4, label: "Projetos de extensão e pesquisa" },
    { value: 2, label: "Formações concluídas" },
];
