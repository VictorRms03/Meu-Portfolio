interface GerarFormacaoProps {
    formacao: string;
    data: string;
}

function GerarFormacao({ formacao, data }: GerarFormacaoProps) {
    return (
        <div className="mb-12 border-1 border-white rounded-lg bg-black hover:bg-neutral-800 p-7">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between text-center">
                <h3 className="text-x1">{formacao}</h3>
                <span className="text-gray-400">{data}</span>
            </div>
        </div>
    );
}

export default function FormacoesList() {
    const formacoes = [
        {
            nome: "Bacharelado em Ciência da Computação - Instituto Federal de São Paulo (IFSP)",
            data: "Mar 2022 - Presente (Previsão: Jan 2026)",
        },
        {
            nome: "Técnico em Informática para Internet - Escola Técnica Estadual (ETEC)",
            data: "Jan 2019 - Dez 2021",
        },
    ];

    return (
        <div className="max-w-9/12 mx-auto gap-6 py-12 ">
            {formacoes.map((formacao, index) => (
                <GerarFormacao
                    key={index}
                    formacao={formacao.nome}
                    data={formacao.data}
                />
            ))}
        </div>
    );
}
