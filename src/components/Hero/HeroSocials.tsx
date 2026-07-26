import SocialButton from "@/components/ui/SocialButton";
import { heroSocials } from "@/data/socials";

export default function HeroSocials() {
    return (
        <div className="w-full flex justify-center items-center gap-12 mt-16">
            {heroSocials.map((social) => (
                <SocialButton
                    key={social.name}
                    link={social.link}
                    iconPath={social.iconPath}
                    hoverIconPath={social.hoverIconPath}
                    name={social.name}
                    className="p-4"
                    imageClassName="w-7 md:w-9 h-auto"
                />
            ))}
        </div>
    );
}
