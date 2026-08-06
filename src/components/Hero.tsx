import HeroIntro from "./Hero/HeroIntro";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-[calc(100svh-var(--header-h))] items-center overflow-hidden"
        >
            <div
                className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
                data-speed="0.8"
            />
            <HeroIntro />
        </section>
    );
}
