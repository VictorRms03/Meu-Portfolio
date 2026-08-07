interface IconProps {
    className?: string;
}

export default function DownloadIcon({ className }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M3.75 17.25v1.5A2.25 2.25 0 006 21h12a2.25 2.25 0 002.25-2.25v-1.5"
            />
        </svg>
    );
}
