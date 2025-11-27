import Card from "../components/layout/Card";
import NavBar from "../components/layout/NavBar";
import BackButton from "../components/layout/BackButton";
import colors from "../theme/colors";

export default function Hotlines() {
  return (
    <Card size="wide">
      <NavBar />

      <div style={{ padding: "1.5rem 2rem" }}>
        <BackButton />

        <h2 style={{ color: colors.textMain, marginBottom: "1rem" }}>
          Immediate Assistance Hotlines
        </h2>

        <ul style={{ lineHeight: 1.8, fontSize: "1rem" }}>
          <li><strong>Suicide & Crisis Lifeline:</strong> 988</li>
          <li><strong>National Domestic Violence Hotline:</strong> 1-800-799-SAFE</li>
          <li><strong>Substance Abuse Hotline:</strong> 1-800-662-HELP</li>
          <li><strong>Emergency Services:</strong> 911</li>
        </ul>

        <p style={{ color: colors.textMuted, marginTop: "1rem" }}>
          If you or someone else is in immediate danger, please call 911.
        </p>
      </div>
    </Card>
  );
}
