// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const cardStyle = {
    flex: "1 1 0",
    minWidth: "180px",
    padding: "1rem",
    borderRadius: "0.75rem",
    border: "1px solid #e5e7eb",
    backgroundColor: "#ffffff",
    cursor: "pointer",
  };

  return (
    <section style={{ marginTop: "1.5rem" }}>
      <h2 style={{ marginBottom: "0.75rem" }}>Home</h2>
      <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
        Choose what you want to do today.
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <button
          style={cardStyle}
          onClick={() => navigate("/chatroom")}
        >
          <h3 style={{ margin: 0, marginBottom: "0.35rem" }}>Chatroom</h3>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#6b7280" }}>
            Join a secure chat with your provider.
          </p>
        </button>

        <button
          style={cardStyle}
          onClick={() => navigate("/records")}
        >
          <h3 style={{ margin: 0, marginBottom: "0.35rem" }}>Records</h3>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#6b7280" }}>
            View visit summaries and medical notes.
          </p>
        </button>

        <button
          style={cardStyle}
          onClick={() => navigate("/schedule")}
        >
          <h3 style={{ margin: 0, marginBottom: "0.35rem" }}>Schedule</h3>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#6b7280" }}>
            See upcoming appointments or book a new one.
          </p>
        </button>
      </div>
    </section>
  );
}

export default Home;
