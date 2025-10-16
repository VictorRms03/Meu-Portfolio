import Image from "next/image";
import GetInTouchSocials from "./GetInTouch/GetInTouchSocials";

export default function GetInTouch() {
    return (
        <section
            id="contato"
            className="flex md:py-16 lg:max-w-11/12 xl:max-w-9/12 mx-auto py-12 lg:py-36"
        >
            <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-24">
                <div className="hidden lg:flex w-1/2">
                    <Image
                        src="/images/helloPicture.svg"
                        alt="Ilustração de dev"
                        width={900}
                        height={900}
                    />
                </div>
                <div className="lg:w-1/2 max-w-11/12 px-6 lg:px-0 lg:max-w-12/12 text-center lg:text-left">
                    <h2 className="text-5xl lg:text-6xl mb-3">
                        Entre em
                        <span className="font-extrabold"> Contato!</span>
                    </h2>
                    <p className="font-light">
                        Estou sempre aberto a novas oportunidades e desafios
                        como desenvolvedor!
                    </p>
                    <GetInTouchSocials />
                    <h2 className="text-xl lg:text-2xl mb-3 font-bold">
                        victorrms03@gmail.com
                    </h2>
                    <h2 className="text-xl lg:text-2xl mb-3 font-bold">
                        +55 (19) 99587-3557
                    </h2>
                </div>
            </div>
        </section>
    );
}
