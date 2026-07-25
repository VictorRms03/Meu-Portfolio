import TimelineCard from "@/components/ui/TimelineCard";
import Container from "@/components/ui/Container";
import { degrees } from "@/data/experience";

export default function Degrees() {
    return (
        <Container className="max-w-9/12 gap-6 py-12">
            {degrees.map((degree) => (
                <TimelineCard
                    key={degree.title}
                    title={degree.title}
                    date={degree.date}
                />
            ))}
        </Container>
    );
}
