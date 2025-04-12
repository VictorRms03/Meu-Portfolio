import Image from "next/image";

export default function HeroSocials() {
    return (

        <div className="w-full flex justify-center items-center gap-12 mt-16">
            
            { socialButton("https://www.instagram.com/victor_rms01/", "/icons/instagram.svg", "Instagram") }

            { socialButton("https://www.linkedin.com/in/victor-ramos3/", "/icons/linkedin.svg", "LinkedIn") }

            { socialButton("https://github.com/VictorRms03", "/icons/github.svg", "GitHub") }
            
        </div>

    )
}

function socialButton(socialLink: string, socialIcon: string, socialName: string) {

    const altSocial:string = "icone " + socialName.toLowerCase();

    return (

        <a href={socialLink} target="_blank" rel="noopener noreferrer"
            className="group p-4 rounded bg-white border-2 border-black hover:bg-black">

            <Image src={socialIcon} alt={altSocial} width={35} height={35} className="w-7 md:w-9 h-auto group-hover:invert"/>

        </a>
    )
}