export default function PageBackdrop() {
    return (
        <div
            id="page-backdrop"
            aria-hidden="true"
            className="fixed inset-0 -z-50"
            style={{ backgroundColor: "var(--bg)" }}
        />
    );
}
