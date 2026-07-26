export interface Skill {
    name: string;
    iconPath: string;
    hoverIconPath?: string;
}

export const skills: Skill[] = [
    {
        name: "Laravel",
        iconPath: "/icons/skills/laravel.svg",
        hoverIconPath: "/icons/skills/laravel-color.svg",
    },
    { name: "Next.js", iconPath: "/icons/skills/nextjs.svg" },
    {
        name: "React.js",
        iconPath: "/icons/skills/reactjs.svg",
        hoverIconPath: "/icons/skills/reactjs-color.svg",
    },
    {
        name: "MySQL",
        iconPath: "/icons/skills/mysql.svg",
        hoverIconPath: "/icons/skills/mysql-color.svg",
    },
    {
        name: "Git",
        iconPath: "/icons/skills/git.svg",
        hoverIconPath: "/icons/skills/git-color.svg",
    },
    {
        name: "TailwindCSS",
        iconPath: "/icons/skills/tailwindcss.svg",
        hoverIconPath: "/icons/skills/tailwindcss-color.svg",
    },
    {
        name: "Kotlin",
        iconPath: "/icons/skills/kotlin.svg",
        hoverIconPath: "/icons/skills/kotlin-color.svg",
    },
];
