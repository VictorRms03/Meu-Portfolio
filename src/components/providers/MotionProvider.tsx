"use client";

import {
    ReactNode,
    createContext,
    useContext,
    useMemo,
    useState,
} from "react";

interface MotionContextValue {
    introDone: boolean;
    setIntroDone: (done: boolean) => void;
}

const MotionContext = createContext<MotionContextValue | null>(null);

interface MotionProviderProps {
    children: ReactNode;
}

export default function MotionProvider({ children }: MotionProviderProps) {
    const [introDone, setIntroDone] = useState(false);

    const value = useMemo(
        () => ({ introDone, setIntroDone }),
        [introDone]
    );

    return (
        <MotionContext.Provider value={value}>
            {children}
        </MotionContext.Provider>
    );
}

export function useMotion() {
    const ctx = useContext(MotionContext);
    if (!ctx) {
        throw new Error("useMotion deve ser usado dentro de MotionProvider");
    }
    return ctx;
}
