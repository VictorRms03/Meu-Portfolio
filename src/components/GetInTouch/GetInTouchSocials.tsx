import SocialButton from "@/components/ui/SocialButton";
import Reveal from "@/components/motion/Reveal";
import { contactSocials } from "@/data/socials";

export default function GetInTouchSocials() {
    return (
        <Reveal
            childrenSelector=".social-item"
            stagger={0.07}
            className="flex flex-wrap justify-center gap-x-6 gap-y-6 md:gap-x-10"
        >
            {contactSocials.map((social) => (
                <div
                    key={social.name}
                    className="social-item group flex flex-col items-center gap-2"
                >
                    <SocialButton
                        link={social.link}
                        iconPath={social.iconPath}
                        hoverIconPath={social.hoverIconPath}
                        name={social.name}
                        className="h-16 w-16 p-4 md:h-18 md:w-18"
                        imageClassName="w-8 h-8"
                        imageWidth={32}
                        imageHeight={32}
                    />
                    {/* fica sempre no fluxo (opacity 0) para não deslocar o layout */}
                    <span className="-translate-y-1 text-xs text-muted opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {social.name}
                    </span>
                </div>
            ))}
        </Reveal>
    );
}
