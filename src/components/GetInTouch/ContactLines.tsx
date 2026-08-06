"use client";

import { ReactElement, cloneElement, useEffect, useRef, useState } from "react";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import ClipboardIcon from "@/components/icons/ClipboardIcon";
import CheckIcon from "@/components/icons/CheckIcon";

const EMAIL = "victorrms03@gmail.com";
const PHONE_DISPLAY = "+55 (19) 99587-3557";
const PHONE_TEL = "+5519995873557";

interface ContactLineProps {
    icon: ReactElement<{ className?: string }>;
    href: string;
    label: string;
    copyValue: string;
    onCopied?: () => void;
}

function ContactLine({
    icon,
    href,
    label,
    copyValue,
    onCopied,
}: ContactLineProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(copyValue);
        setCopied(true);
        onCopied?.();
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex min-w-0 items-center justify-center gap-3">
            <button
                type="button"
                onClick={handleCopy}
                aria-label={`Copiar ${label}`}
                className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-line text-muted transition-all duration-300 active:scale-95 hover:border-accent hover:bg-accent hover:text-background lg:hidden"
            >
                {copied ? (
                    <CheckIcon className="h-5 w-5 text-accent" />
                ) : (
                    cloneElement(icon, { className: "h-5 w-5" })
                )}
            </button>

            <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted lg:flex">
                {icon}
            </span>
            <a
                href={href}
                className="hidden min-w-0 break-words text-sm font-bold transition-colors hover:text-accent sm:text-base lg:inline lg:text-2xl"
            >
                {label}
            </a>
            <button
                type="button"
                onClick={handleCopy}
                aria-label={`Copiar ${label}`}
                className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-foreground lg:flex"
            >
                {copied ? (
                    <CheckIcon className="h-4 w-4 text-accent" />
                ) : (
                    <ClipboardIcon className="h-4 w-4" />
                )}
            </button>
        </div>
    );
}

export default function ContactLines() {
    const [toastMsg, setToastMsg] = useState<string | null>(null);
    const [toastLeaving, setToastLeaving] = useState(false);
    const toastTimers = useRef<{
        hide?: ReturnType<typeof setTimeout>;
        remove?: ReturnType<typeof setTimeout>;
    }>({});

    const showToast = (message: string) => {
        if (toastTimers.current.hide) clearTimeout(toastTimers.current.hide);
        if (toastTimers.current.remove)
            clearTimeout(toastTimers.current.remove);

        setToastLeaving(false);
        setToastMsg(message);
        toastTimers.current.hide = setTimeout(() => setToastLeaving(true), 2000);
        toastTimers.current.remove = setTimeout(
            () => setToastMsg(null),
            2300
        );
    };

    useEffect(() => {
        const timers = toastTimers.current;
        return () => {
            if (timers.hide) clearTimeout(timers.hide);
            if (timers.remove) clearTimeout(timers.remove);
        };
    }, []);

    return (
        <>
            <div className="flex flex-row items-center justify-center gap-6 rounded-2xl p-6 glass lg:flex-col lg:gap-4">
                <ContactLine
                    icon={<EnvelopeIcon className="h-4 w-4" />}
                    href={`mailto:${EMAIL}`}
                    label={EMAIL}
                    copyValue={EMAIL}
                    onCopied={() => showToast("Email copiado!")}
                />
                <ContactLine
                    icon={<PhoneIcon className="h-4 w-4" />}
                    href={`tel:${PHONE_TEL}`}
                    label={PHONE_DISPLAY}
                    copyValue={PHONE_DISPLAY}
                    onCopied={() => showToast("Telefone copiado!")}
                />
            </div>

            {toastMsg && (
                <div
                    className={`pointer-events-none fixed bottom-6 left-1/2 z-50 flex items-center gap-2 rounded-full border-2 border-accent bg-accent px-5 py-3 text-sm font-medium text-background shadow-glow lg:hidden ${
                        toastLeaving
                            ? "animate-[toast-out_0.3s_ease-in_forwards]"
                            : "animate-[toast-in_0.3s_ease-out_both]"
                    }`}
                >
                    <CheckIcon className="h-4 w-4 text-background" />
                    {toastMsg}
                </div>
            )}
        </>
    );
}
