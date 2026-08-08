/**
 * Âncoras de data do perfil.
 *
 * Tudo que envelhece sozinho nasce aqui. A regra do projeto é: nenhum número
 * derivado de data pode ser digitado à mão em outro arquivo — se um dia o valor
 * ficar errado sem ninguém mexer no código, ele deveria ter vindo daqui.
 */

/** 13 de junho de 2004 */
export const BIRTH_DATE = "2004-06-13";

/** entrada no curso técnico da ETEC — marco zero da contagem de anos na área */
export const CODING_SINCE = "2019-01";

/**
 * Anos completos entre uma data ISO ("AAAA-MM-DD" ou "AAAA-MM") e a referência.
 * Mês e dia ausentes contam como janeiro e dia 1.
 */
export function completedYearsSince(
    iso: string,
    reference: Date = new Date()
): number {
    const [year, month = "1", day = "1"] = iso.split("-");

    let years = reference.getFullYear() - Number(year);
    const monthsAhead = reference.getMonth() + 1 - Number(month);

    // ainda não chegou o aniversário da data neste ano
    if (
        monthsAhead < 0 ||
        (monthsAhead === 0 && reference.getDate() < Number(day))
    ) {
        years -= 1;
    }

    return years;
}

export function currentAge(reference: Date = new Date()): number {
    return completedYearsSince(BIRTH_DATE, reference);
}

export function yearsCoding(reference: Date = new Date()): number {
    return completedYearsSince(CODING_SINCE, reference);
}
