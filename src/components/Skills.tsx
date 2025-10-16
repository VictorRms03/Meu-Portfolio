import SkillCards from "./Skills/SkillCards";

export default function Skills() {
    return (
        <section id="skills" className="py-12 scroll-mt-20">
            <div className="max-w-9/12 mx-auto flex justify-center">
                <h2 className="text-5xl">
                    Hard <span className="font-extrabold">Skills</span>
                </h2>
            </div>
            <SkillCards />
        </section>
    );
}
