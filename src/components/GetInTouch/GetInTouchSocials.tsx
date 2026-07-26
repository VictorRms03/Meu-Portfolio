import SocialButton from "@/components/ui/SocialButton";
import { contactSocials } from "@/data/socials";

export default function GetInTouchSocials() {
    return (
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 py-10 md:justify-start md:gap-x-8 md:gap-y-8">
            {contactSocials.map((social) => (
                <SocialButton
                    key={social.name}
                    link={social.link}
                    iconPath={social.iconPath}
                    hoverIconPath={social.hoverIconPath}
                    name={social.name}
                    className="w-17 h-17 md:w-20 md:h-20 lg:w-18 lg:h-18 xl:w-20 xl:h-20 p-4"
                    imageClassName="w-8 h-8 md:w-10 md:h-10 lg:w-9 lg:h-9 xl:w-10 xl:h-10 transition"
                    imageWidth={32}
                    imageHeight={32}
                />
            ))}
        </div>
    );
}
