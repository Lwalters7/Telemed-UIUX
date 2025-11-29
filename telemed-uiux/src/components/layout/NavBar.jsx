// src/components/layout/NavBar.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import colors from "../../theme/colors";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isOnHome = location.pathname === "/home" || location.pathname === "/";
  const isOnAccessibility = location.pathname === "/accessibility";

  const navStyle = {
    width: "100%",
    backgroundColor: colors.navBlue,
    color: colors.surface,
    padding: "0.75rem 1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
  };

  const brandStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.9rem",
  };

  const appNameStyle = {
    fontSize: "1.1rem",
    fontWeight: 700,
    cursor: "pointer",
    color: colors.primaryLight,
    letterSpacing: "0.02em",
  };

  const homeButtonStyle = {
    padding: "0.35rem 0.9rem",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: 600,
    backgroundColor: colors.surface,
    color: colors.textMain,
    boxShadow: isOnHome ? "0 3px 8px rgba(0,0,0,0.25)" : "none",
  };

  const rightContainerStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };

const avatarButtonStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.35rem",
  padding: "0.4rem 0.75rem",
  borderRadius: "999px",
  border: `2px solid ${colors.primaryLight}`,
  backgroundColor: colors.primary,
  color: colors.surface,
  cursor: "pointer",
  fontWeight: 700,
  fontSize: "0.9rem",
  boxShadow: "0 3px 8px rgba(0,0,0,0.2)"
};


  const dropdownStyle = {
    position: "absolute",
    top: "calc(100% + 0.5rem)",
    right: 0,
    backgroundColor: colors.surface,
    borderRadius: "0.75rem",
    border: `1px solid ${colors.border}`,
    boxShadow: "0 10px 30px rgba(15,23,42,0.28)",
    minWidth: "180px",
    padding: "0.4rem 0",
    zIndex: 10,
  };

  const dropdownItemStyle = (isActive) => ({
    width: "100%",
    padding: "0.5rem 1rem",
    border: "none",
    backgroundColor: isActive ? colors.primaryLight : "transparent",
    color: colors.textMain,
    textAlign: "left",
    fontSize: "0.9rem",
    cursor: "pointer",
  });

  const dividerStyle = {
    height: "1px",
    margin: "0.3rem 0",
    backgroundColor: colors.border,
  };

  const handleNavigateHome = () => {
    setMenuOpen(false);
    navigate("/home");
  };

  const handleNavigateAccessibility = () => {
    setMenuOpen(false);
    navigate("/accessibility");
  };

  const handleLogout = () => {
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <nav style={navStyle}>
      {/* LEFT: app name + Home button */}
      <div style={brandStyle}>
        <span
          style={appNameStyle}
          onClick={handleNavigateHome}
        >
          TeleMed Demo
        </span>

        <button
          type="button"
          style={homeButtonStyle}
          onClick={handleNavigateHome}
        >
          Home
        </button>
      </div>

      {/* RIGHT: user avatar + dropdown */}
      <div style={rightContainerStyle}>
        <button
  type="button"
  style={avatarButtonStyle}
  onClick={() => setMenuOpen((open) => !open)}
>
  <span
    style={{
      width: "28px",
      height: "28px",
      borderRadius: "50%",
      backgroundColor: colors.primaryLight,
      color: colors.navBlue,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
      fontSize: "0.85rem"
    }}
  >
    U
  </span>

  <span style={{ fontSize: "0.7rem", fontWeight: 900 }}>
    ▼
  </span>
</button>


        {menuOpen && (
          <div style={dropdownStyle}>
            <button
              type="button"
              style={dropdownItemStyle(isOnAccessibility)}
              onClick={handleNavigateAccessibility}
            >
              Accessibility
            </button>

            <div style={dividerStyle} />

            <button
              type="button"
              style={dropdownItemStyle(false)}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
