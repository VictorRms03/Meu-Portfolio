import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full px-6 py-4 bg-black shadow-lg sticky top-0 z-50">
            <div className="max-w-11/12 xl:max-w-9/12 mx-auto flex items-center justify-center lg:justify-between">
                <div className="hidden lg:flex items-center gap-3 text-xl font-bold text-white">
                    <Image
                        src="/images/victorRamos1.jpg"
                        alt="Foto Victor Ramos"
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                    />
                    Victor Ramos
                </div>
                <div>
                    <Link
                        href="https://github.com/VictorRms03/Meu-Portfolio"
                        target="_blank"
                        className="group bg-white border-2 border-black px-4 py-2 rounded
                    transition flex items-center gap-2 hover:bg-black hover:border-white "
                    >
                        <span className="font-bold text-black group-hover:text-white">
                            Acessar Projeto
                        </span>
                    </Link>
                </div>
                <div className="hidden lg:flex">
                    <span className="font-bold text-white">
                        Feito com Next.js e Tailwind CSS
                    </span>
                </div>
            </div>
        </footer>
    );
}
