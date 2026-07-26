"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import GetInTouchSocials from "./GetInTouch/GetInTouchSocials";
import SectionHeading from "@/components/ui/SectionHeading";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import ClipboardIcon from "@/components/icons/ClipboardIcon";
import CheckIcon from "@/components/icons/CheckIcon";

const EMAIL = "victorrms03@gmail.com";
const PHONE_DISPLAY = "+55 (19) 99587-3557";
const PHONE_TEL = "+5519995873557";

interface ContactLineProps {
    icon: ReactNode;
    href: string;
    label: string;
    copyValue: string;
}

function ContactLine({ icon, href, label, copyValue }: ContactLineProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(copyValue);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-center justify-center gap-3 lg:justify-start">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/15 text-black/60">
                {icon}
            </span>
            <a
                href={href}
                className="text-xl font-bold transition-colors hover:text-violet-600 lg:text-2xl"
            >
                {label}
            </a>
            <button
                type="button"
                onClick={handleCopy}
                aria-label={`Copiar ${label}`}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-black/40 transition-colors hover:bg-black/5 hover:text-black"
            >
                {copied ? (
                    <CheckIcon className="h-4 w-4 text-violet-600" />
                ) : (
                    <ClipboardIcon className="h-4 w-4" />
                )}
            </button>
        </div>
    );
}

export default function GetInTouch() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="contato"
            className="flex md:py-16 lg:max-w-11/12 xl:max-w-9/12 mx-auto py-12 lg:py-36"
        >
            <div
                ref={ref}
                className={`mx-auto flex flex-col lg:flex-row items-center justify-between gap-24 transition-all duration-700 ${
                    visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                }`}
            >
                <div className="hidden lg:flex w-1/2">
                    <Image
                        src="/images/helloPicture.svg"
                        alt="Ilustração de dev"
                        width={900}
                        height={900}
                        className="animate-[float_4s_ease-in-out_infinite]"
                    />
                </div>
                <div className="lg:w-1/2 max-w-11/12 px-6 lg:px-0 lg:max-w-12/12 text-center lg:text-left">
                    <SectionHeading
                        prefix="Entre em"
                        highlight="Contato!"
                        className="text-5xl lg:text-6xl mb-3"
                    />
                    <p className="font-light">
                        Estou sempre aberto a novas oportunidades e desafios
                        como desenvolvedor!
                    </p>
                    <GetInTouchSocials />

                    <div className="flex flex-col gap-4 rounded-2xl border border-black/10 p-6 shadow-sm">
                        <ContactLine
                            icon={<EnvelopeIcon className="h-4 w-4" />}
                            href={`mailto:${EMAIL}`}
                            label={EMAIL}
                            copyValue={EMAIL}
                        />
                        <ContactLine
                            icon={<PhoneIcon className="h-4 w-4" />}
                            href={`tel:${PHONE_TEL}`}
                            label={PHONE_DISPLAY}
                            copyValue={PHONE_DISPLAY}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
