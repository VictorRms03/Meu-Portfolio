export default function ExtensoesList() {
    return (

        <div className="max-w-9/12 mx-auto gap-6 py-12 ">

            { gerarExtensao( "Iniciação Ciêntifica - Desenvolvimento de Aplicativo para auxílio no projeto e no uso de medidores de vazão de fluidos", 
                "Fev 2025 - Dez 2025", 
                "Desenvolvimento de aplicativo Android, Estudo de Medidores de Vazão por dispositivos de pressão diferencial, " + 
                "Modelagem e Projeto do aplicativo, Projeto e Aplicação de Testes, Documentação Ágil.") }

            { gerarExtensao( "Bolsa de Extensão - Desenvolvedor Web para o Conselho do Café da Região de Pinhal (COCAMPI)", 
                "Jun 2024 - Jan 2025", 
                "Desenvolvimento do Website, Apuramento de Requisitos, Resolução de Problemas, " +
                "Condutor de Reuniões e Comunicação com outras empresas para Resolução de Problemas.") }

            { gerarExtensao( "Diretor de Eventos - Associação Acadêmica Atlética Arthur Chiodi", 
                "Jan 2023 - Dez 2023", 
                "Organizador de Eventos, Busca de Locais, Resolução de problemas e Gerênciador de Logistica.") }

            { gerarExtensao( "Bolsa de Ensino - Estudo e Desenvolvimento para Portal de Ensino Web", 
                "Fev 2023 - Dez 2023", 
                "Pesquisa, Estudo, Testes e Documentação de cursos e ferramentas básicas para aprendizado " + 
                "de Desenvolvimento, Documentação destas ferramentas.") }

        </div>

    )
}

function gerarExtensao(titulo: string, data: string, principaisAtividades: string) {

    return (

        <div className="mb-12 border-1 border-white rounded-lg bg-black hover:bg-neutral-800 p-7">

            <div className="flex justify-between">

                <h3 className="text-x1">{titulo}</h3>
                <span className="text-gray-400">{data}</span>

            </div>

            <div className="mt-4 max-w-8/12">

            <p className="font-extralight"> <span className="font-bold">Principais atividades:</span> {principaisAtividades} </p>

            </div>
        </div>

    )
}