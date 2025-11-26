import Card from "../components/layout/Card.jsx";
import NavBar from "../components/layout/NavBar.jsx";
import colors from "../theme/colors";

export default function Schedule() {
  return (
    <Card size="wide">
      <NavBar />
      <div style={{ padding: "2rem 2.5rem" }}>
        <h2 style={{ color: colors.textMain }}>Schedule</h2>
        <p style={{ color: colors.textMuted }}>
          Placeholder: upcoming appointments and booking UI will go here.
        </p>
      </div>
    </Card>
  );
}
