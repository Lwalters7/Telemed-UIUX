// src/components/layout/NavBar.jsx
import { Link, NavLink } from "react-router-dom";

const navBarStyle = {
  borderBottom: "1px solid #e5e7eb",
  backgroundColor: "#ffffff",
};

const navInnerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.75rem 1.5rem",
};

const pillLink = {
  padding: "0.4rem 0.9rem",
  borderRadius: "999px",
  fontSize: "0.9rem",
};

function NavBar() {
  return (
    <header style={navBarStyle}>
      <nav style={navInnerStyle}>
        <Link
          to="/home"
          style={{
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "#2563eb",
          }}
        >
          TeleMed App
        </Link>

        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>


          <NavLink
            to="/accessibility"
            style={({ isActive }) => ({
              ...pillLink,
              backgroundColor: isActive ? "#111827" : "transparent",
              color: isActive ? "#ffffff" : "#111827",
              border: "1px solid #111827",
            })}
          >
            Accessibility
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
