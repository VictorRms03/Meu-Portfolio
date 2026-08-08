import { skills } from "./skills";
import { timeline } from "./experience";
import { yearsCoding } from "./profile";

export interface Stat {
    value: number;
    suffix?: string;
    label: string;
}

/**
 * Todos os números saem de dados ou da data atual — nenhum é digitado.
 * Chamada a partir de um server component, para que o valor chegue ao cliente
 * já serializado e o navegador nunca recalcule (e nunca divirja do HTML).
 */
export function buildStats(reference: Date = new Date()): Stat[] {
    const count = (type: (typeof timeline)[number]["type"]) =>
        timeline.filter((entry) => entry.type === type).length;

    return [
        {
            value: yearsCoding(reference),
            suffix: "+",
            label: "Anos programando",
        },
        { value: skills.length, label: "Tecnologias no dia a dia" },
        { value: count("extension"), label: "Projetos de extensão e pesquisa" },
        { value: count("degree"), label: "Formações concluídas" },
    ];
}
