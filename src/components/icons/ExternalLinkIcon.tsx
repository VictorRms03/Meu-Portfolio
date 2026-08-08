interface IconProps {
    className?: string;
}

export default function ExternalLinkIcon({ className }: IconProps) {
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
                d="M13.5 6H18v4.5M17.25 6.75L10.5 13.5M16.5 14.25v3.75a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 01-1.5-1.5V9a1.5 1.5 0 011.5-1.5h3.75"
            />
        </svg>
    );
}
