export default function FormacoesList() {

    return (

        <div className="max-w-9/12 mx-auto gap-6 py-12 ">

            { gerarFormacao("Bacharelado em Ciência da Computação - Instituto Federal de São Paulo (IFSP)", "Mar 2022 - Presente (Previsão: Jan 2026)") }

            { gerarFormacao("Técnico em Informática para Internet - Escola Técnica Estadual (ETEC)", "Jan 2019 - Dez 2021") }

        </div>

    )
    
}

function gerarFormacao(formacao: string, data: string) {

    return (

        <div className="mb-12 border-1 border-white rounded-lg bg-black hover:bg-neutral-800 p-7">

            <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between text-center">

                <h3 className="text-x1">{formacao}</h3>
                <span className="text-gray-400">{data}</span>

            </div>

        </div>

    )
}