import Card from "../components/layout/Card.jsx";
import NavBar from "../components/layout/NavBar.jsx";
import colors from "../theme/colors";

export default function Chatroom() {
  return (
    <Card size="wide">
      <NavBar />
      <div style={{ padding: "2rem 2.5rem" }}>
        <h2 style={{ color: colors.textMain }}>Chatroom</h2>
        <p style={{ color: colors.textMuted }}>
          Placeholder: this will be where the patient chats with their provider.
        </p>
      </div>
    </Card>
  );
}
