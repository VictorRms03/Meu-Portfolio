import AcademicExtensions from "./Experience/AcademicExtensions";
import WorkExperiences from "./Experience/WorkExperiences";
import Degrees from "./Experience/Degrees";

export default function Experience() {
    return (
        <section
            id="experience"
            className="pt-16 md:pb-16 bg-black text-white scroll-mt-20"
        >
            <div className="max-w-9/12 mx-auto flex justify-center mb-12">
                <h2 className="text-5xl font-bold"> Experiências </h2>
            </div>

            <h2 className="text-3xl flex justify-center"> Profissionais </h2>
            <WorkExperiences />

            <h2 className="text-3xl flex justify-center"> Formações </h2>
            <Degrees />

            <h2 className="text-3xl flex justify-center"> Extensões </h2>
            <AcademicExtensions />
        </section>
    );
}
