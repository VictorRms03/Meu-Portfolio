import LocalTime from "./LocalTime";
import SocialButton from "@/components/ui/SocialButton";
import AnchorLink from "@/components/motion/AnchorLink";
import { heroSocials } from "@/data/socials";

export default function HeroMeta() {
    return (
        <div className="hero-fade w-full border-t border-line">
            <div className="mx-auto flex max-w-11/12 flex-col items-center gap-4 px-6 py-4 text-xs text-muted sm:flex-row sm:justify-between xl:max-w-9/12">
                <div className="flex items-center gap-2">
                    {heroSocials.map((social) => (
                        <SocialButton
                            key={social.name}
                            link={social.link}
                            iconPath={social.iconPath}
                            hoverIconPath={social.hoverIconPath}
                            name={social.name}
                            className="h-9 w-9 p-2"
                            imageClassName="w-4 h-4"
                            imageWidth={16}
                            imageHeight={16}
                        />
                    ))}
                </div>

                <div className="hidden items-center gap-2 tracking-wide uppercase md:flex">
                    <span>Vargem Grande do Sul, SP</span>
                    <span className="text-line">·</span>
                    <LocalTime />
                    <span className="text-line">·</span>
                    <span>BRT</span>
                </div>

                <AnchorLink
                    href="#skills"
                    className="group flex items-center gap-2 tracking-wide uppercase transition-colors hover:text-accent"
                >
                    Role para baixo
                    <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </AnchorLink>
            </div>
        </div>
    );
}
