import ExperienceList from "./Experience/ExperienceList";

export default function Experience() {
    return (
        
        <section id="experience" className="py-16 bg-black text-white scroll-mt-20">

            <div className="max-w-9/12 mx-auto flex justify-center">

                <h2 className="text-5xl"> Experiências </h2>

            </div>

            <ExperienceList />

        </section>
    )
}