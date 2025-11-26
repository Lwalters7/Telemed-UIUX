// src/pages/Start.jsx
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();

  return (
    <section style={{ maxWidth: "640px", margin: "2rem auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
        Welcome to the TeleMed App
      </h1>
      <p style={{ marginBottom: "1.5rem", color: "#6b7280" }}>
        This app is designed to make online medical visits simple and accessible.
        Clear navigation, readable text, and support for patients with low tech
        literacy or cognitive challenges.
      </p>

      <button
        onClick={() => navigate("/login")}
        style={{
          padding: "0.6rem 1.4rem",
          borderRadius: "999px",
          border: "none",
          backgroundColor: "#2563eb",
          color: "#ffffff",
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
