// src/components/layout/NavBar.jsx
import { Link, NavLink } from "react-router-dom";
import colors from "../../theme/colors";

const navBarStyle = {
  borderBottom: `1px solid ${colors.border}`,
  backgroundColor: colors.surface,
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
          to="/"
          style={{
            fontWeight: 700,
            fontSize: "1.1rem",
            color: colors.primaryDark,
          }}
        >
          TeleMed App
        </Link>

        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <NavLink
            to="/home"
            style={({ isActive }) => ({
              ...pillLink,
              backgroundColor: isActive ? colors.primary : "transparent",
              color: isActive ? colors.surface : colors.textMain,
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/accessibility"
            style={({ isActive }) => ({
              ...pillLink,
              backgroundColor: isActive ? colors.primaryDark : "transparent",
              color: isActive ? colors.surface : colors.textMain,
              border: `1px solid ${colors.primaryDark}`,
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
