import Image from 'next/image';
import ContatoSocials from './Contato/ContatoSocials';

export default function Contato() {
    return (

        <section id="contato" className="flex md:max-w-9/12 mx-auto py-12 md:py-36">

            <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-24">

                <div className="hidden md:flex w-1/2">

                    <Image src="/images/helloPicture.svg" alt="Ilustração de dev" width={900} height={900}/>

                </div>

                <div className="md:w-1/2 max-w-11/12 px-6 md:px-0 md:max-w-12/12 text-center md:text-left">

                    <h2 className="text-5xl md:text-6xl mb-3"> Entre em <span className="font-extrabold">Contato!</span> </h2>

                    <p className="font-light"> Estou sempre aberto a novas oportunidades e desafios como desenvolvedor! </p>

                    <ContatoSocials />

                    <h2 className="text-xl md:text-2xl mb-3 font-bold"> victorrms03@gmail.com </h2>
                    <h2 className="text-xl md:text-2xl mb-3 font-bold"> +55 (19) 99587-3557 </h2>

                </div>

            </div>

        </section>

    )
}