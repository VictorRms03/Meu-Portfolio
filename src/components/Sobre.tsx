import Image from "next/image";

export default function Sobre() {
    return (

        <section id="sobre" className="py-12 scroll-mt-20">

            <div className="max-w-11/12 md:max-w-9/12 xl:max-w-9/12 mx-auto px-6 flex flex-col xl:flex-row items-center justify-between gap-12">

                <div>

                    <Image src="/images/Foto2 - Victor Ramos.jpg" alt="Ilustração de dev" width={550} height={550}/>

                </div>

                <div className="xl:w-1/2 justify-start">

                    <h2 className="text-5xl"> Sobre <span className="font-extrabold">Mim!</span> </h2>

                    <p className="mt-6 xl:mt-12"> Olá! Tenho 21 anos e programo desde os 14 quando entrei para o curso técnico em informática,
                         desde então venho estudo e me apaixonando cada vez mais pela área da tecnologia.
                         Estou finalizando minha formação como Bacharel em Ciência da Computação e também sou formado em Técnico em Informática para Internet, 
                         o que me deu uma base sólida quanto ao desenvolvimento tanto Back-end quanto Front-end. Gosto de explorar novas linguagens e ferramentas e
                         tenho facilidade em aprender coisas novas e estou sempre em busca de novos desafios.
                    </p>

                    <p className="mt-6 xl:mt-12"> Além da programação, sou uma pessoa comunicativa que gosta de conversas sobre basicamente qualquer assunto!
                         Entre meus principais hobbies estão ouvir música e jogos, o que ajuda a recarregar as energias e manter a criatividade em dia.
                    </p>

                </div>

            </div>

        </section>

    )
}