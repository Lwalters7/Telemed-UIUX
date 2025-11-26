// src/components/layout/NavBar.jsx
import { Link, NavLink } from "react-router-dom";
import colors from "../../theme/colors";

const navStyle = {
  backgroundColor: colors.navBlue,     // <-- new deeper blue
  padding: "0.9rem 1.25rem",
  width: "100%",                       // <-- spans entire card
  borderTopLeftRadius: "1.25rem",      // matches the card's radius
  borderTopRightRadius: "1.25rem",
  boxSizing: "border-box",
};

const navInner = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const pill = {
  padding: "0.45rem 1rem",
  borderRadius: "999px",
  fontSize: "0.9rem",
  fontWeight: 600,
  backgroundColor: colors.surface,      // white
  color: colors.navBlue,                // dark blue text
  border: "none",
  textDecoration: "none",
};

function NavBar() {
  return (
    <header style={{ marginBottom: "1rem" }}>
      {/* Full-width navbar that touches card edges */}
      <div style={navStyle}>
        <nav style={navInner}>
          
          {/* Logo */}
          <Link
            to="/"
            style={{
              fontWeight: 800,
              fontSize: "1.25rem",
              letterSpacing: "-0.5px",
              color: colors.primary,     // <-- bright blue pops against dark background
              textDecoration: "none",
            }}
          >
            TeleMed App
          </Link>

          {/* Right side buttons */}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <NavLink
              to="/home"
              style={({ isActive }) => ({
                ...pill,
                boxShadow: isActive ? "0 0 0 2px white" : "none",
              })}
            >
              Home
            </NavLink>

            <NavLink
              to="/accessibility"
              style={({ isActive }) => ({
                ...pill,
                boxShadow: isActive ? "0 0 0 2px white" : "none",
              })}
            >
              Accessibility
            </NavLink>
          </div>

        </nav>
      </div>
    </header>
  );
}

export default NavBar;
