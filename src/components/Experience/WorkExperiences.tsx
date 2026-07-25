import TimelineCard from "@/components/ui/TimelineCard";
import Container from "@/components/ui/Container";
import { workExperiences } from "@/data/experience";

export default function WorkExperiences() {
    return (
        <Container className="max-w-9/12 gap-6 py-12">
            {workExperiences.map((work) => (
                <TimelineCard
                    key={work.title}
                    title={work.title}
                    date={work.date}
                />
            ))}
        </Container>
    );
}
