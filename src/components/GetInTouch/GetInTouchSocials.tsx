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
            className="w-17 h-17 md:w-20 md:h-20 lg:w-18 lg:h-18 xl:w-20 xl:h-20 group p-4 rounded bg-white border-2 border-black hover:bg-black"
        >
            <Image
                src={iconPath}
                alt={altSocial}
                width={0}
                height={0}
                className="w-auto h-auto transition group-hover:invert"
            />
        </a>
    );
}

export default function GetInTouchSocials() {
    const socials = [
        {
            link: "https://wa.me/19995873557",
            iconPath: "/icons/socialNetworks/whatsapp.svg",
            name: "WhatsApp",
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
        {
            link: "https://github.com/VictorRms03",
            iconPath: "/icons/socialNetworks/github.svg",
            name: "GitHub",
        },
        {
            link: "https://discordapp.com/users/victorrms",
            iconPath: "/icons/socialNetworks/discord.svg",
            name: "Discord",
        },
    ];

    return (
        <div className="grid grid-cols-3 md:grid-cols-5 gap-x-2 gap-y-2 md:gap-x-12 md:gap-y-12 py-10 justify-items-center md:justify-start">
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
