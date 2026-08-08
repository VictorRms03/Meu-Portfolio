import HeroBackdrop from "./Hero/HeroBackdrop";
import HeroIntro from "./Hero/HeroIntro";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-[calc(100svh-var(--header-h))] flex-col overflow-hidden"
        >
            <HeroBackdrop />
            <HeroIntro />
        </section>
    );
}
