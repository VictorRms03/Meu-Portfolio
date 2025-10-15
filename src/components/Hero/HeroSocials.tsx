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
            className="group p-4 rounded bg-white border-2 border-black hover:bg-black"
        >
            <Image
                src={socialIcon}
                alt={altSocial}
                width={35}
                height={35}
                className="w-7 md:w-9 h-auto group-hover:invert"
            />
        </a>
    );
}

export default function HeroSocials() {
    return (
        <div className="w-full flex justify-center items-center gap-12 mt-16">
            <SocialButton
                socialLink="https://www.instagram.com/victor_rms01/"
                socialIcon="/icons/instagram.svg"
                socialName="Instagram"
            />
            <SocialButton
                socialLink="https://www.linkedin.com/in/victor-ramos3/"
                socialIcon="/icons/linkedin.svg"
                socialName="LinkedIn"
            />
            <SocialButton
                socialLink="https://github.com/VictorRms03"
                socialIcon="/icons/github.svg"
                socialName="GitHub"
            />
        </div>
    );
}
