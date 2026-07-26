import Timeline from "@/components/ui/Timeline";
import Container from "@/components/ui/Container";
import BriefcaseIcon from "@/components/icons/BriefcaseIcon";
import { workExperiences } from "@/data/experience";

export default function WorkExperiences() {
    return (
        <Container className="max-w-11/12 md:max-w-9/12 w-full">
            <h3 className="mb-8 flex items-center justify-center gap-2 text-3xl font-semibold">
                <BriefcaseIcon className="h-6 w-6 text-violet-400" />
                Profissionais
            </h3>
            <Timeline
                entries={workExperiences}
                icon={<BriefcaseIcon className="h-4 w-4" />}
            />
        </Container>
    );
}
