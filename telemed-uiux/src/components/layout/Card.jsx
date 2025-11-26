// src/components/layout/Card.jsx
import colors from "../../theme/colors";

export default function Card({ children, size = "wide" }) {
  const isNarrow = size === "narrow";

  const cardStyle = {
    width: "100%",
    maxWidth: isNarrow ? "600px" : "1100px",
    backgroundColor: colors.surface,
    borderRadius: "1.25rem",
    padding: 0,                  // no padding so NavBar can touch edges
    overflow: "hidden",          // keeps rounded corners clean
    boxShadow: "0 14px 40px rgba(15, 23, 42, 0.12)",
    border: `1px solid ${colors.border}`,
    transition: "max-width 0.3s ease",
  };

  return <div style={cardStyle}>{children}</div>;
}
