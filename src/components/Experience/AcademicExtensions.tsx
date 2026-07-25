import TimelineCard from "@/components/ui/TimelineCard";
import Container from "@/components/ui/Container";
import { academicExtensions } from "@/data/experience";

export default function AcademicExtensions() {
    return (
        <Container className="max-w-9/12 gap-6 py-12">
            {academicExtensions.map((extension) => (
                <TimelineCard
                    key={extension.title}
                    title={extension.title}
                    date={extension.date}
                    description={extension.description}
                />
            ))}
        </Container>
    );
}
