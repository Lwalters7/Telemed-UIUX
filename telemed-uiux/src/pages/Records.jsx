import Card from "../components/layout/Card.jsx";
import NavBar from "../components/layout/NavBar.jsx";
import colors from "../theme/colors";

export default function Records() {
  return (
    <Card size="wide">
      <NavBar />
      <div style={{ padding: "2rem 2.5rem" }}>
        <h2 style={{ color: colors.textMain }}>Records</h2>
        <p style={{ color: colors.textMuted }}>
          Placeholder: visit summaries and medical notes will go here.
        </p>
      </div>
    </Card>
  );
}
