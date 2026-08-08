import Image from "next/image";
import Container from "@/components/ui/Container";
import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";
import SocialButton from "@/components/ui/SocialButton";
import AnchorLink from "@/components/motion/AnchorLink";
import ActionButton from "@/components/ui/ActionButton";
import { navLinks } from "@/data/navigation";
import { contactSocials } from "@/data/socials";

const footerLinks = [{ href: "#hero", label: "Início" }, ...navLinks];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

            <Container className="max-w-11/12 xl:max-w-9/12 px-6 pt-16 pb-8">
                <div className="flex flex-col items-center gap-12 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
                    <div className="flex flex-col items-center gap-4 lg:items-start">
                        <AnchorLink
                            href="#hero"
                            className="group flex items-center gap-3 text-xl font-bold"
                        >
                            <Image
                                src="/images/victorRamos1.jpg"
                                alt="Foto Victor Ramos"
                                width={44}
                                height={44}
                                quality={70}
                                className="rounded-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                            />
                            Victor Ramos
                        </AnchorLink>
                        <p className="max-w-xs text-sm text-muted">
                            Desenvolvedor Fullstack apaixonado por criar
                            experiências simples, rápidas e bem construídas.
                        </p>
                    </div>

                    <nav className="flex flex-col items-center gap-3 lg:items-start">
                        <span className="text-xs font-semibold tracking-widest text-violet-300/80 uppercase">
                            Navegação
                        </span>
                        {footerLinks.map((navLink) => (
                            <AnchorLink
                                key={navLink.href}
                                href={navLink.href}
                                className="text-muted transition-colors hover:text-foreground"
                            >
                                {navLink.label}
                            </AnchorLink>
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
                        <div className="mt-2">
                            <ActionButton
                                href="https://github.com/VictorRms03/Meu-Portfolio"
                                external
                                variant="outline"
                                effect="invert"
                                className="px-5 py-2 text-sm"
                                icon={<ExternalLinkIcon className="h-4 w-4" />}
                            >
                                Ver código no GitHub
                            </ActionButton>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col-reverse items-center gap-4 border-t border-line pt-6 text-sm text-muted lg:flex-row lg:justify-between">
                    <span>
                        &copy; {year} Victor Ramos. Todos os direitos
                        reservados.
                    </span>
                    <div className="flex items-center gap-4">
                        <span>Feito com Next.js e Tailwind CSS</span>
                        <AnchorLink
                            href="#hero"
                            aria-label="Voltar ao topo"
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-[transform,border-color,color] duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
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
                        </AnchorLink>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
