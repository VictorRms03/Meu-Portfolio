interface AcademicExtensionCardProps {
    title: string;
    date: string;
    description: string;
}

function AcademicExtensionCard({
    title,
    date,
    description,
}: AcademicExtensionCardProps) {
    return (
        <div className="mb-12 border-1 border-white rounded-xl bg-black hover:bg-neutral-800 p-7">
            <div className="flex flex-col xl:flex-row justify-between text-center gap-5 xl:gap-0">
                <h3 className="text-x1">{title}</h3>
                <span className="text-gray-400">{date}</span>
            </div>
            <div className="mt-4 xl:max-w-8/12 text-center xl:text-left">
                <p className="font-extralight">
                    <span className="font-bold">Principais atividades: </span>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default function AcademicExtensions() {
    const academicExtensions = [
        {
            title: "Iniciação Ciêntifica - Desenvolvimento de Aplicativo para auxílio no projeto e no uso de medidores de vazão de fluidos",
            date: "Fev 2025 - Dez 2025",
            description:
                "Desenvolvimento de aplicativo Android, Estudo de Medidores de Vazão por dispositivos de pressão diferencial, Modelagem e Projeto do aplicativo, Projeto e Aplicação de Testes, Documentação Ágil.",
        },
        {
            title: "Bolsa de Extensão - Desenvolvedor Web para o Conselho do Café da Região de Pinhal (COCAMPI)",
            date: "Jun 2024 - Jan 2025",
            description:
                "Desenvolvimento do Website, Apuramento de Requisitos, Resolução de Problemas, Condutor de Reuniões e Comunicação com outras empresas para Resolução de Problemas.",
        },
        {
            title: "Diretor de Eventos - Associação Acadêmica Atlética Arthur Chiodi",
            date: "Jan 2023 - Dez 2023",
            description:
                "Organizador de Eventos, Busca de Locais, Resolução de problemas e Gerênciador de Logistica.",
        },
        {
            title: "Bolsa de Ensino - Estudo e Desenvolvimento para Portal de Ensino Web",
            date: "Fev 2023 - Dez 2023",
            description:
                "Pesquisa, Estudo, Testes e Documentação de cursos e ferramentas básicas para aprendizado de Desenvolvimento, Documentação destas ferramentas.",
        },
    ];

    return (
        <div className="max-w-9/12 mx-auto gap-6 py-12 ">
            {academicExtensions.map((academicExtension, index) => (
                <AcademicExtensionCard
                    key={index}
                    title={academicExtension.title}
                    date={academicExtension.date}
                    description={academicExtension.description}
                />
            ))}
        </div>
    );
}
