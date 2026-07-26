import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import WaveDivider from "@/components/ui/WaveDivider";
import SocialButton from "@/components/ui/SocialButton";
import { navLinks } from "@/data/navigation";
import { contactSocials } from "@/data/socials";

const footerLinks = [{ href: "#hero", label: "Início" }, ...navLinks];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-black text-white">
            <WaveDivider position="top" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

            <Container className="max-w-11/12 xl:max-w-9/12 px-6 pt-16 pb-8">
                <div className="flex flex-col items-center gap-12 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
                    <div className="flex flex-col items-center gap-4 lg:items-start">
                        <Link
                            href="#hero"
                            scroll={true}
                            className="group flex items-center gap-3 text-xl font-bold"
                        >
                            <Image
                                src="/images/victorRamos1.jpg"
                                alt="Foto Victor Ramos"
                                width={44}
                                height={44}
                                className="rounded-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                            />
                            Victor Ramos
                        </Link>
                        <p className="max-w-xs text-sm text-white/60">
                            Desenvolvedor Fullstack apaixonado por criar
                            experiências simples, rápidas e bem construídas.
                        </p>
                    </div>

                    <nav className="flex flex-col items-center gap-3 lg:items-start">
                        <span className="text-xs font-semibold tracking-widest text-violet-300/80 uppercase">
                            Navegação
                        </span>
                        {footerLinks.map((navLink) => (
                            <Link
                                key={navLink.href}
                                href={navLink.href}
                                scroll={true}
                                className="text-white/60 transition-colors hover:text-white"
                            >
                                {navLink.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex flex-col items-center gap-4 lg:items-end">
                        <span className="text-xs font-semibold tracking-widest text-violet-300/80 uppercase">
                            Redes sociais
                        </span>
                        <div className="flex gap-3">
                            {contactSocials.map((social) => (
                                <SocialButton
                                    key={social.name}
                                    link={social.link}
                                    iconPath={social.iconPath}
                                    hoverIconPath={social.hoverIconPath}
                                    name={social.name}
                                    className="w-11 h-11 p-2.5"
                                    imageClassName="w-5 h-5"
                                />
                            ))}
                        </div>
                        <Link
                            href="https://github.com/VictorRms03/Meu-Portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative mt-2 inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-white px-5 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10"
                        >
                            <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                                Ver código no GitHub
                            </span>
                            <Image
                                src="/icons/redirect.svg"
                                alt=""
                                aria-hidden="true"
                                width={14}
                                height={14}
                                className="relative z-10 invert transition-all duration-300 group-hover:invert-0"
                            />
                        </Link>
                    </div>
                </div>

                <div className="mt-12 flex flex-col-reverse items-center gap-4 border-t border-white/10 pt-6 text-sm text-white/50 lg:flex-row lg:justify-between">
                    <span>
                        &copy; {year} Victor Ramos. Todos os direitos
                        reservados.
                    </span>
                    <div className="flex items-center gap-4">
                        <span>Feito com Next.js e Tailwind CSS</span>
                        <Link
                            href="#hero"
                            scroll={true}
                            aria-label="Voltar ao topo"
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/60 hover:text-white"
                        >
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 15l7-7 7 7"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
