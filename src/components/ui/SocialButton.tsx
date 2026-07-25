import Image from "next/image";

interface SocialButtonProps {
    link: string;
    iconPath: string;
    name: string;
    className?: string;
    imageClassName?: string;
    imageWidth?: number;
    imageHeight?: number;
}

export default function SocialButton({
    link,
    iconPath,
    name,
    className,
    imageClassName,
    imageWidth = 35,
    imageHeight = 35,
}: SocialButtonProps) {
    const altSocial: string = "icone " + name.toLowerCase();
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group rounded bg-white border-2 border-black hover:bg-black ${className ?? ""}`}
        >
            <Image
                src={iconPath}
                alt={altSocial}
                width={imageWidth}
                height={imageHeight}
                className={`group-hover:invert ${imageClassName ?? ""}`}
            />
        </a>
    );
}
