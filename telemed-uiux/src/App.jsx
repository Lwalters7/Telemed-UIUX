// src/App.jsx
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar.jsx";

import Start from "./pages/Start.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Chatroom from "./pages/Chatroom.jsx";
import Records from "./pages/Records.jsx";
import Schedule from "./pages/Schedule.jsx";
import AccessibilityPg from "./pages/AccessibilityPg.jsx";

function App() {
  return (
    <div className="app">
      {/* If you want to hide the NavBar on Start/Login, we can change this later */}
      <NavBar />

      <main
        style={{
          padding: "1.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
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
        </Routes>
      </main>
    </div>
  );
}

export default App;
