import Image from "next/image";

interface SocialButtonProps {
    link: string;
    iconPath: string;
    name: string;
}

function SocialButton({ link, iconPath, name }: SocialButtonProps) {
    const altSocial: string = "icone " + name.toLowerCase();
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded bg-white border-2 border-black hover:bg-black"
        >
            <Image
                src={iconPath}
                alt={altSocial}
                width={35}
                height={35}
                className="w-7 md:w-9 h-auto group-hover:invert"
            />
        </a>
    );
}

export default function HeroSocials() {
    const socials = [
        {
            link: "https://github.com/VictorRms03",
            iconPath: "/icons/socialNetworks/github.svg",
            name: "GitHub",
        },
        {
            link: "https://www.instagram.com/victor_rms01/",
            iconPath: "/icons/socialNetworks/instagram.svg",
            name: "Instagram",
        },
        {
            link: "https://www.linkedin.com/in/victor-ramos3/",
            iconPath: "/icons/socialNetworks/linkedin.svg",
            name: "Linkedin",
        },
    ];

    return (
        <div className="w-full flex justify-center items-center gap-12 mt-16">
            {socials.map((social, index) => (
                <SocialButton
                    key={index}
                    link={social.link}
                    iconPath={social.iconPath}
                    name={social.name}
                />
            ))}
        </div>
    );
}
