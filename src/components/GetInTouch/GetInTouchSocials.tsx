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
                    imageClassName="w-auto h-auto transition"
                    imageWidth={0}
                    imageHeight={0}
                />
            ))}
        </div>
    );
}
