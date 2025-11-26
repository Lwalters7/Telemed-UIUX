import { useNavigate } from "react-router-dom";
import Card from "../components/layout/Card.jsx";
import NavBar from "../components/layout/NavBar.jsx";
import colors from "../theme/colors";

export default function Home() {
  const navigate = useNavigate();

  const cardButtonStyle = {
    width: "100%",
    textAlign: "left",
    padding: "1rem 1.1rem",
    borderRadius: "0.9rem",
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.surface,
    cursor: "pointer",
  };

  return (
    <Card size="wide">
      <NavBar />
      <div style={{ padding: "2rem 2.5rem" }}>
        <section style={{ maxWidth: "650px", margin: "0 auto" }}>
          <h2 style={{ marginBottom: "0.75rem", color: colors.textMain }}>
            Home
          </h2>
          <p
            style={{
              color: colors.textMuted,
              marginBottom: "1.5rem",
            }}
          >
            Choose what you want to do today.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.9rem",
            }}
          >
            <button
              style={cardButtonStyle}
              onClick={() => navigate("/chatroom")}
            >
              <h3 style={{ margin: 0, marginBottom: "0.3rem" }}>Chatroom</h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.9rem",
                  color: colors.textMuted,
                }}
              >
                Join a secure chat with your provider.
              </p>
            </button>

            <button
              style={cardButtonStyle}
              onClick={() => navigate("/records")}
            >
              <h3 style={{ margin: 0, marginBottom: "0.3rem" }}>Records</h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.9rem",
                  color: colors.textMuted,
                }}
              >
                View visit summaries and medical notes.
              </p>
            </button>

            <button
              style={cardButtonStyle}
              onClick={() => navigate("/schedule")}
            >
              <h3 style={{ margin: 0, marginBottom: "0.3rem" }}>Schedule</h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.9rem",
                  color: colors.textMuted,
                }}
              >
                See upcoming appointments or book a new one.
              </p>
            </button>
          </div>
        </section>
      </div>
    </Card>
  );
}
