import Image from "next/image";

export default function ContatoSocials() {
    return (

        <div className="w-full flex gap-12 py-10">
                
            <a href="https://wa.me/19995873557" target="_blank" rel="noopener noreferrer" 
             className="group p-4 rounded bg-white border-2 border-black hover:bg-black">

                <Image src={"/icons/whatsapp.svg"} alt="icone whatsapp" width={30} height={30} className="group-hover:invert"/>

            </a>

            <a href="https://www.instagram.com/victor_rms01/" target="_blank" rel="noopener noreferrer" 
                className="group p-4 rounded bg-white border-2 border-black hover:bg-black">

                <Image src={"/icons/instagram.svg"} alt="icone instagram" width={30} height={30} className="group-hover:invert"/>

            </a>
        
            <a href="https://www.linkedin.com/in/victor-ramos3/" target="_blank" rel="noopener noreferrer"
                className="group p-4 rounded bg-white border-2 border-black hover:bg-black">

                <Image src={"/icons/linkedin.svg"} alt="icone linkedin" width={30} height={30} className="group-hover:invert"/>

            </a>
        
            <a href="https://github.com/VictorRms03" target="_blank" rel="noopener noreferrer"
                className="group p-4 rounded bg-white border-2 border-black hover:bg-black">

                <Image src={"/icons/github.svg"} alt="icone github" width={30} height={30} className="group-hover:invert"/>

            </a>

            <a href="https://discordapp.com/users/victorrms" target="_blank" rel="noopener noreferrer"
                className="group p-4 rounded bg-white border-2 border-black hover:bg-black">

                <Image src={"/icons/discord.svg"} alt="icone discord" width={30} height={30} className="group-hover:invert"/>

            </a>
                    
        </div>

    )
}