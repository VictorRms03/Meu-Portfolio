"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
});

export default function LocalTime() {
    // renderiza "--:--" no servidor e preenche depois de montar:
    // formatar a hora durante o render garante hydration mismatch
    const [time, setTime] = useState<string | null>(null);

    useEffect(() => {
        const tick = () => setTime(formatter.format(new Date()));
        tick();
        const id = setInterval(tick, 15000);
        return () => clearInterval(id);
    }, []);

    return <span className="tabular-nums">{time ?? "--:--"}</span>;
}
