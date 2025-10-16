interface DegreeCardProps {
    name: string;
    date: string;
}

function DegreeCard({ name, date }: DegreeCardProps) {
    return (
        <div className="mb-12 border-1 border-white rounded-lg bg-black hover:bg-neutral-800 p-7">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between text-center">
                <h3 className="text-x1">{name}</h3>
                <span className="text-gray-400">{date}</span>
            </div>
        </div>
    );
}

export default function Degrees() {
    const degrees = [
        {
            name: "Bacharelado em Ciência da Computação - Instituto Federal de São Paulo (IFSP)",
            date: "Mar 2022 - Presente (Previsão: Jan 2026)",
        },
        {
            name: "Técnico em Informática para Internet - Escola Técnica Estadual (ETEC)",
            date: "Jan 2019 - Dez 2021",
        },
    ];

    return (
        <div className="max-w-9/12 mx-auto gap-6 py-12 ">
            {degrees.map((degree, index) => (
                <DegreeCard key={index} name={degree.name} date={degree.date} />
            ))}
        </div>
    );
}
