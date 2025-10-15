interface GerarExtensaoProps {
    titulo: string;
    data: string;
    principaisAtividades: string;
}

function GerarExtensao({titulo, data, principaisAtividades}: GerarExtensaoProps ) {
    return (
        <div className="mb-12 border-1 border-white rounded-xl bg-black hover:bg-neutral-800 p-7">
            <div className="flex flex-col xl:flex-row justify-between text-center gap-5 xl:gap-0">
                <h3 className="text-x1">{titulo}</h3>
                <span className="text-gray-400">{data}</span>
            </div>
            <div className="mt-4 xl:max-w-8/12 text-center xl:text-left">
                <p className="font-extralight"> <span className="font-bold">Principais atividades:</span> {principaisAtividades} </p>
            </div>
        </div>
    )
}

export default function ExtensoesList() {
    const extensoes = [
        { 
            titulo: "Iniciação Ciêntifica - Desenvolvimento de Aplicativo para auxílio no projeto e no uso de medidores de vazão de fluidos", 
            data: "Fev 2025 - Dez 2025", 
            principaisAtividades: "Desenvolvimento de aplicativo Android, Estudo de Medidores de Vazão por dispositivos de pressão diferencial, Modelagem e Projeto do aplicativo, Projeto e Aplicação de Testes, Documentação Ágil."
        },
        { 
            titulo: "Bolsa de Extensão - Desenvolvedor Web para o Conselho do Café da Região de Pinhal (COCAMPI)", 
            data: "Jun 2024 - Jan 2025", 
            principaisAtividades: "Desenvolvimento do Website, Apuramento de Requisitos, Resolução de Problemas, Condutor de Reuniões e Comunicação com outras empresas para Resolução de Problemas."
        },
        { 
            titulo: "Diretor de Eventos - Associação Acadêmica Atlética Arthur Chiodi", 
            data: "Jan 2023 - Dez 2023", 
            principaisAtividades: "Organizador de Eventos, Busca de Locais, Resolução de problemas e Gerênciador de Logistica."
        },
        { 
            titulo: "Bolsa de Ensino - Estudo e Desenvolvimento para Portal de Ensino Web", 
            data: "Fev 2023 - Dez 2023", 
            principaisAtividades: "Pesquisa, Estudo, Testes e Documentação de cursos e ferramentas básicas para aprendizado de Desenvolvimento, Documentação destas ferramentas."
        },
        
    ];

    return (
        <div className="max-w-9/12 mx-auto gap-6 py-12 ">
            {extensoes.map((extensao, index) => (
                <GerarExtensao  key={index} titulo={extensao.titulo} data={extensao.data} principaisAtividades={extensao.principaisAtividades} />
            ))}
        </div>
    )
}

