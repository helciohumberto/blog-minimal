export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 10,
        borderTop: "1px solid var(--border)",
        padding: "2rem 1.5rem",
        textAlign: "center",
        fontSize: "0.72rem",
        opacity: 0.8,
        letterSpacing: "0.06em",
      }}
    >
      <p>© {new Date().getFullYear()} Hélcio Humberto</p>
      <p style={{ marginTop: "0.4rem" }}>

      </p>
    </footer>
  );
}
