import Image from "next/image";

export default function ContatoSocials() {
    return (

        <div className="grid grid-cols-3 md:grid-cols-5 gap-x-2 gap-y-2 md:gap-x-12 md:gap-y-12 py-10 justify-items-center md:justify-start">

            { socialButton("https://wa.me/19995873557", "/icons/whatsapp.svg", "WhatsApp") }

            { socialButton("https://www.instagram.com/victor_rms01/", "/icons/instagram.svg", "Instagram") }

            { socialButton("https://www.linkedin.com/in/victor-ramos3/", "/icons/linkedin.svg", "Linkedin") }

            { socialButton("https://github.com/VictorRms03", "/icons/github.svg", "GitHub") }

            { socialButton("https://discordapp.com/users/victorrms", "/icons/discord.svg", "Discord") }

        </div>

    )
}

function socialButton(socialLink: string, socialIcon: string, socialName: string) {

    const altSocial:string = "icone " + socialName.toLowerCase();

    return (

        <a href={socialLink} target="_blank" rel="noopener noreferrer"
            className="w-17 h-17 md:w-20 md:h-20 lg:w-18 lg:h-18 xl:w-20 xl:h-20 group p-4 rounded bg-white border-2 border-black hover:bg-black">

            <Image src={socialIcon} alt={altSocial} width={0} height={0} className="w-auto h-auto transition group-hover:invert" />

        </a>
    )
}