import Image from "next/image";

export default function HeroSocials() {
    return (

        <div className="w-full flex justify-center items-center gap-12 mt-16">
        
            <a href="https://www.instagram.com/victor_rms01/" target="_blank" rel="noopener noreferrer" 
                className="group p-4 rounded bg-white border-2 border-black hover:bg-black">

                <Image src={"/icons/instagram.svg"} alt="icone instagram" width={35} height={35} className="group-hover:invert"/>

            </a>

            <a href="https://www.linkedin.com/in/victor-ramos3/" target="_blank" rel="noopener noreferrer"
                className="group p-4 rounded bg-white border-2 border-black hover:bg-black">

                <Image src={"/icons/linkedin.svg"} alt="icone instagram" width={35} height={35} className="group-hover:invert"/>

            </a>

            <a href="https://github.com/VictorRms03" target="_blank" rel="noopener noreferrer"
                className="group p-4 rounded bg-white border-2 border-black hover:bg-black">

                <Image src={"/icons/github.svg"} alt="icone instagram" width={35} height={35} className="group-hover:invert"/>

            </a>
            
        </div>

    )
}