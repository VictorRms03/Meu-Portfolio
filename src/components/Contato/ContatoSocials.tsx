import Image from "next/image";

interface SocialButtonProps {
    socialLink: string;
    socialIcon: string;
    socialName: string;
}

function SocialButton({
    socialLink,
    socialIcon,
    socialName,
}: SocialButtonProps) {
    const altSocial: string = "icone " + socialName.toLowerCase();
    return (
        <a
            href={socialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-17 h-17 md:w-20 md:h-20 lg:w-18 lg:h-18 xl:w-20 xl:h-20 group p-4 rounded bg-white border-2 border-black hover:bg-black"
        >
            <Image
                src={socialIcon}
                alt={altSocial}
                width={0}
                height={0}
                className="w-auto h-auto transition group-hover:invert"
            />
        </a>
    );
}

export default function ContatoSocials() {
    const socials = [
        {
            link: "https://wa.me/19995873557",
            icon: "/icons/whatsapp.svg",
            name: "WhatsApp",
        },
        {
            link: "https://www.instagram.com/victor_rms01/",
            icon: "/icons/instagram.svg",
            name: "Instagram",
        },
        {
            link: "https://www.linkedin.com/in/victor-ramos3/",
            icon: "/icons/linkedin.svg",
            name: "Linkedin",
        },
        {
            link: "https://github.com/VictorRms03",
            icon: "/icons/github.svg",
            name: "GitHub",
        },
        {
            link: "https://discordapp.com/users/victorrms",
            icon: "/icons/discord.svg",
            name: "Discord",
        },
    ];

    return (
        <div className="grid grid-cols-3 md:grid-cols-5 gap-x-2 gap-y-2 md:gap-x-12 md:gap-y-12 py-10 justify-items-center md:justify-start">
            {socials.map((social, index) => (
                <SocialButton
                    key={index}
                    socialLink={social.link}
                    socialIcon={social.icon}
                    socialName={social.name}
                />
            ))}
        </div>
    );
}
