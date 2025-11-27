import Card from "../components/layout/Card.jsx";
import NavBar from "../components/layout/NavBar.jsx";
import colors from "../theme/colors";
import BackButton from "../components/layout/BackButton.jsx";

export default function AccessibilityPg() {
  return (
    <Card size="narrow">
      <NavBar />
      <div style={{ padding: "2rem 2.5rem" }}>
        <BackButton />
        <section style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ marginBottom: "0.75rem", color: colors.textMain }}>
            Accessibility Settings
          </h2>
          <p style={{ color: colors.textMuted }}>
            Later you can add options here for text size, high contrast, and
            other settings to make the app easier to use.
          </p>
        </section>
      </div>
    </Card>
  );
}
