import Image from "next/image";
import { projects } from "@/data/projects";

interface ProjectCardProps {
    id: number;
    title: string;
    description: string;
    imagePath: string;
    link: string;
}

function ProjectCard({
    id,
    title,
    description,
    imagePath,
    link,
}: ProjectCardProps) {
    const isReverse: boolean = id % 2 === 0;
    return (
        <div
            className={
                "xl:max-w-9/12 mx-auto px-6 flex flex-col items-center justify-between gap-10 xl:gap-20 " +
                (isReverse ? "xl:flex-row-reverse" : "xl:flex-row")
            }
        >
            <div className="xl:w-1/2 flex justify-center items-center">
                <Image
                    src={imagePath}
                    alt={`Imagem de projeto ${id}`}
                    width={500}
                    height={500}
                    className="w-110 h-auto xl:w-120"
                />
            </div>
            <div className="xl:w-1/2">
                <h2 className="text-4xl xl:text-5xl mb-3 font-extrabold">
                    {id.toString().padStart(2, "0")}
                </h2>
                <h2 className="text-2xl xl:text-3xl font-extrabold">{title}</h2>
                <p className="my-6"> {description} </p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/icons/redirect.svg"
                        alt="Redirecionar para projeto"
                        width={20}
                        height={20}
                        className="invert"
                    />
                </a>
            </div>
        </div>
    );
}

export default function ProjectsList() {
    return (
        <div className="md:px-12 xl:px-0 w-full flex flex-col justify-center items-center gap-15 xl:gap-30 mt-16">
            {projects.map((project, index) => (
                <ProjectCard
                    key={project.title}
                    id={index + 1}
                    title={project.title}
                    description={project.description}
                    imagePath={project.imagePath}
                    link={project.link}
                />
            ))}
        </div>
    );
}
