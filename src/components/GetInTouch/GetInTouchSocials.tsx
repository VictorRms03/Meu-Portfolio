import SocialButton from "@/components/ui/SocialButton";
import { contactSocials } from "@/data/socials";

export default function GetInTouchSocials() {
    return (
        <div className="grid grid-cols-3 md:grid-cols-5 gap-x-2 gap-y-2 md:gap-x-12 md:gap-y-12 py-10 justify-items-center md:justify-start">
            {contactSocials.map((social) => (
                <SocialButton
                    key={social.name}
                    link={social.link}
                    iconPath={social.iconPath}
                    hoverIconPath={social.hoverIconPath}
                    name={social.name}
                    className="w-17 h-17 md:w-20 md:h-20 lg:w-18 lg:h-18 xl:w-20 xl:h-20 p-4"
                    imageClassName="w-auto h-auto transition"
                    imageWidth={0}
                    imageHeight={0}
                />
            ))}
        </div>
    );
}
