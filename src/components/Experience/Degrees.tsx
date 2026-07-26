import Timeline from "@/components/ui/Timeline";
import Container from "@/components/ui/Container";
import AcademicCapIcon from "@/components/icons/AcademicCapIcon";
import { degrees } from "@/data/experience";

export default function Degrees() {
    return (
        <Container className="max-w-11/12 md:max-w-9/12 w-full">
            <h3 className="mb-8 flex items-center justify-center gap-2 text-3xl font-semibold">
                <AcademicCapIcon className="h-6 w-6 text-violet-400" />
                Formações
            </h3>
            <Timeline
                entries={degrees}
                icon={<AcademicCapIcon className="h-4 w-4" />}
            />
        </Container>
    );
}
