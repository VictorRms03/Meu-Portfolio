import Timeline from "@/components/ui/Timeline";
import Container from "@/components/ui/Container";
import StarIcon from "@/components/icons/StarIcon";
import { academicExtensions } from "@/data/experience";

export default function AcademicExtensions() {
    return (
        <Container className="max-w-11/12 md:max-w-9/12 w-full">
            <h3 className="mb-8 flex items-center justify-center gap-2 text-3xl font-semibold">
                <StarIcon className="h-6 w-6 text-violet-400" />
                Extensões
            </h3>
            <Timeline
                entries={academicExtensions}
                icon={<StarIcon className="h-4 w-4" />}
            />
        </Container>
    );
}
