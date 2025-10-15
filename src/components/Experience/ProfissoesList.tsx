export default function ProfissoesList() {

    return (

        <div className="max-w-9/12 mx-auto gap-6 py-12 ">

            { gerarProfissao("Desenvolvedor Full-Stack Junior - DevCore", "Ago 2025 - Presente") }

        </div>

    )
    
}

function gerarProfissao(profissao: string, data: string) {

    return (

        <div className="mb-12 border-1 border-white rounded-lg bg-black hover:bg-neutral-800 p-7">

            <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between text-center">

                <h3 className="text-x1">{profissao}</h3>
                <span className="text-gray-400">{data}</span>

            </div>

        </div>

    )
}