// src/pages/Start.jsx
import { useNavigate } from "react-router-dom";
import colors from "../theme/colors";

function Start() {
  const navigate = useNavigate();

  return (
    <section style={{ maxWidth: "640px", margin: "2rem auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.75rem", color: colors.textMain }}>
        Welcome to the TeleMed App
      </h1>

      <p style={{ marginBottom: "1.5rem", color: colors.textMuted }}>
        This app is designed to make online medical visits simple and accessible.
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
  );
}

export default Start;
