"use client";

import Image from "next/image";
import { useState } from "react";

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
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(true);
        setTimeout(() => setActive(false), 500);
    };

    if (hoverIconPath) {
        return (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className={`group relative flex items-center justify-center overflow-hidden rounded-full glass transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-accent hover:shadow-lg hover:shadow-violet-500/20 ${
                    active
                        ? "-translate-y-1 scale-110 bg-accent shadow-lg shadow-violet-500/20"
                        : ""
                } ${className ?? ""}`}
            >
                <Image
                    src={iconPath}
                    alt={altSocial}
                    width={imageWidth}
                    height={imageHeight}
                    className={`invert transition-opacity duration-300 group-hover:opacity-0 ${
                        active ? "opacity-0" : ""
                    } ${imageClassName ?? ""}`}
                />
                <Image
                    src={hoverIconPath}
                    alt=""
                    aria-hidden="true"
                    width={imageWidth}
                    height={imageHeight}
                    className={`absolute inset-0 m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                        active ? "opacity-100" : ""
                    } ${imageClassName ?? ""}`}
                />
            </a>
        );
    }

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={`group relative flex items-center justify-center overflow-hidden rounded-full glass transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-accent hover:shadow-lg hover:shadow-violet-500/20 ${
                active
                    ? "-translate-y-1 scale-110 bg-accent shadow-lg shadow-violet-500/20"
                    : ""
            } ${className ?? ""}`}
        >
            <Image
                src={iconPath}
                alt={altSocial}
                width={imageWidth}
                height={imageHeight}
                className={`invert transition-all duration-300 group-hover:invert-0 ${
                    active ? "invert-0" : ""
                } ${imageClassName ?? ""}`}
            />
        </a>
    );
}
