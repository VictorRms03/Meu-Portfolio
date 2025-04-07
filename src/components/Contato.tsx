import Image from 'next/image';
import ContatoSocials from './Contato/ContatoSocials';

export default function Contato() {
    return (

        <section id="contato" className="flex maw-w-9/12 mx-auto py-36">

            <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-24">

                <div className="w-1/2">

                    <Image src="/images/helloPicture.svg" alt="Ilustração de dev" width={900} height={900}/>

                </div>

                <div className="w-1/2">

                    <h2 className="text-6xl mb-3"> Entre em <span className="font-extrabold">Contato!</span> </h2>

                    <p className="font-light"> Estou sempre aberto a novas oportunidades e desafios como desenvolvedor! </p>

                    <ContatoSocials />

                    <h2 className="text-2xl mb-3 font-bold"> victorrms03@gmail.com </h2>
                    <h2 className="text-2xl mb-3 font-bold"> +55 (19) 99587-3557 </h2>

                </div>

            </div>

        </section>

    )
}