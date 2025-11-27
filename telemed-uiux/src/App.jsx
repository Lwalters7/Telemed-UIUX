// src/App.jsx
import { Routes, Route, useNavigate } from "react-router-dom";

import Start from "./pages/Start.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Chatroom from "./pages/Chatroom.jsx";
import Records from "./pages/Records.jsx";
import Schedule from "./pages/Schedule.jsx";
import AccessibilityPg from "./pages/AccessibilityPg.jsx";
import Hotlines from "./pages/Hotlines.jsx";

import colors from "./theme/colors";



export default function App() {
  const navigate = useNavigate();  // ⬅ add this

  const footerStyle = {
    padding: "0.75rem 1.25rem",
    textAlign: "center",
    backgroundColor: colors.danger,
    color: colors.surface,
    fontWeight: 600,
    fontSize: "1rem",
    flexShrink: 0,
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: colors.bgLight,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Center whatever page content returns (its Card) */}
      <div
        style={{
          flex: "1 0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chatroom" element={<Chatroom />} />
          <Route path="/records" element={<Records />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/accessibility" element={<AccessibilityPg />} />
          <Route path="/hotlines" element={<Hotlines />} />
        </Routes>
      </div>

      <footer
        style={{
          ...footerStyle,
          cursor: "pointer",
          textDecoration: "underline",
        }}
        onClick={() => navigate("/hotlines")}
      >
        Do You Need Immediate Assistance? Click HERE
      </footer>
    </div>
  );
}
