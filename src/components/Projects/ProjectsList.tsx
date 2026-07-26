"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";

interface ProjectCardProps {
    title: string;
    description: string;
    imagePath: string;
    link: string;
    techStack: string[];
}

function ProjectCard({
    title,
    description,
    imagePath,
    link,
    techStack,
}: ProjectCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-lg hover:shadow-violet-400/10 ${
                visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
            }`}
        >
            <div className="relative aspect-video w-full overflow-hidden bg-white/5">
                <div className="absolute inset-6 md:inset-8">
                    <Image
                        src={imagePath}
                        alt={`Imagem de projeto ${title}`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl font-extrabold xl:text-2xl">
                    {title}
                </h2>

                <div className="mt-3 flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs text-violet-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <p className="mt-4 flex-1 text-sm text-white/70">
                    {description}
                </p>

                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative mt-6 inline-flex w-fit items-center gap-2 overflow-hidden rounded-full border-2 border-white px-5 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10"
                >
                    <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                        Ver projeto
                    </span>
                    <Image
                        src="/icons/redirect.svg"
                        alt=""
                        aria-hidden="true"
                        width={14}
                        height={14}
                        className="relative z-10 invert transition-all duration-300 group-hover:invert-0"
                    />
                </a>
            </div>
        </div>
    );
}

export default function ProjectsList() {
    return (
        <div className="mx-auto mt-16 grid w-full max-w-11/12 md:max-w-9/12 grid-cols-1 gap-8 px-6 md:grid-cols-2 xl:gap-10 xl:px-0">
            {projects.map((project) => (
                <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    imagePath={project.imagePath}
                    link={project.link}
                    techStack={project.techStack}
                />
            ))}
        </div>
    );
}
