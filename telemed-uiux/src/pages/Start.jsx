import { useNavigate } from "react-router-dom";
import Card from "../components/layout/Card.jsx";
import NavBar from "../components/layout/NavBar.jsx";
import colors from "../theme/colors";

export default function Start() {
  const navigate = useNavigate();

  return (
    <Card size="narrow">
      <NavBar />
      <div style={{ padding: "2rem 2.5rem" }}>
        <section style={{ maxWidth: "640px" }}>
          <h1
            style={{
              fontSize: "2rem",
              marginBottom: "0.75rem",
              color: colors.textMain,
            }}
          >
            Welcome to the TeleMed App
          </h1>
          <p
            style={{
              marginBottom: "1.5rem",
              color: colors.textMuted,
            }}
          >
            This app is designed to make online medical visits simple and
            accessible, especially for people who aren&apos;t comfortable with
            technology.
          </p>
          <button
            onClick={() => navigate("/login")}
            style={{
              padding: "0.6rem 1.4rem",
              borderRadius: "999px",
              border: "none",
              backgroundColor: colors.primary,
              color: colors.surface,
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >
            Login to continue
          </button>
        </section>
      </div>
    </Card>
  );
}
