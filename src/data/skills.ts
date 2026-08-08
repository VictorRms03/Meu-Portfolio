export interface Skill {
    name: string;
    iconPath: string;
    hoverIconPath?: string;
    /** cor da marca — usada na borda e no brilho do hover */
    color: string;
}

export const skills: Skill[] = [
    {
        name: "Laravel",
        iconPath: "/icons/skills/laravel.svg",
        hoverIconPath: "/icons/skills/laravel-color.svg",
        color: "#ff2d20",
    },
    {
        name: "Next.js",
        iconPath: "/icons/skills/nextjs.svg",
        color: "#ffffff",
    },
    {
        name: "React.js",
        iconPath: "/icons/skills/reactjs.svg",
        hoverIconPath: "/icons/skills/reactjs-color.svg",
        color: "#61dafb",
    },
    {
        name: "MySQL",
        iconPath: "/icons/skills/mysql.svg",
        hoverIconPath: "/icons/skills/mysql-color.svg",
        color: "#4479a1",
    },
    {
        name: "Git",
        iconPath: "/icons/skills/git.svg",
        hoverIconPath: "/icons/skills/git-color.svg",
        color: "#f05032",
    },
    {
        name: "TailwindCSS",
        iconPath: "/icons/skills/tailwindcss.svg",
        hoverIconPath: "/icons/skills/tailwindcss-color.svg",
        color: "#38bdf8",
    },
    {
        name: "Kotlin",
        iconPath: "/icons/skills/kotlin.svg",
        hoverIconPath: "/icons/skills/kotlin-color.svg",
        color: "#7f52ff",
    },
];
