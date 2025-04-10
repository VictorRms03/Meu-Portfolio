import Image from "next/image";

export default function ContatoSocials() {
    return (

        <div className="w-full flex gap-12 py-10">

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
            className="group p-4 rounded bg-white border-2 border-black hover:bg-black">

            <Image src={socialIcon} alt={altSocial} width={35} height={35} className="group-hover:invert"/>

        </a>
    )
}