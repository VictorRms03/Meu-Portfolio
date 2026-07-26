import Image from "next/image";

interface SocialButtonProps {
    link: string;
    iconPath: string;
    hoverIconPath?: string;
    name: string;
    className?: string;
    imageClassName?: string;
    imageWidth?: number;
    imageHeight?: number;
}

export default function SocialButton({
    link,
    iconPath,
    hoverIconPath,
    name,
    className,
    imageClassName,
    imageWidth = 35,
    imageHeight = 35,
}: SocialButtonProps) {
    const altSocial: string = "icone " + name.toLowerCase();

    if (hoverIconPath) {
        return (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center justify-center rounded-full bg-white border-2 border-black hover:bg-black transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/20 ${className ?? ""}`}
            >
                <Image
                    src={iconPath}
                    alt={altSocial}
                    width={imageWidth}
                    height={imageHeight}
                    className={`transition-opacity duration-300 group-hover:opacity-0 ${imageClassName ?? ""}`}
                />
                <Image
                    src={hoverIconPath}
                    alt=""
                    aria-hidden="true"
                    width={imageWidth}
                    height={imageHeight}
                    className={`absolute inset-0 m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${imageClassName ?? ""}`}
                />
            </a>
        );
    }

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex items-center justify-center rounded-full bg-white border-2 border-black hover:bg-black transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/20 ${className ?? ""}`}
        >
            <Image
                src={iconPath}
                alt={altSocial}
                width={imageWidth}
                height={imageHeight}
                className={`transition-all duration-300 group-hover:invert ${imageClassName ?? ""}`}
            />
        </a>
    );
}
