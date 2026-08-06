const DIGIT_H = "1.15em";

/** dois ciclos de 0-9: todo número rola uma volta completa antes de parar */
const CYCLE = [...Array(20).keys()].map((index) => index % 10);

interface OdometerProps {
    value: number;
    className?: string;
}

export default function Odometer({ value, className }: OdometerProps) {
    const digits = String(value).split("");

    return (
        <span
            className={`inline-flex ${className ?? ""}`}
            aria-label={String(value)}
        >
            {digits.map((digit, index) => (
                <span
                    key={index}
                    aria-hidden="true"
                    className="inline-block overflow-hidden align-bottom"
                    style={{ height: DIGIT_H }}
                >
                    <span
                        className="odometer-strip block"
                        data-digit={digit}
                        // posição de repouso já no HTML: sem JS o número certo
                        // aparece, e o fromTo do GSAP parte de 0 mesmo assim
                        style={{
                            transform: `translateY(${-(10 + Number(digit)) * 5}%)`,
                        }}
                    >
                        {CYCLE.map((number, position) => (
                            <span
                                key={position}
                                className="block text-center tabular-nums"
                                style={{
                                    height: DIGIT_H,
                                    lineHeight: DIGIT_H,
                                }}
                            >
                                {number}
                            </span>
                        ))}
                    </span>
                </span>
            ))}
        </span>
    );
}
