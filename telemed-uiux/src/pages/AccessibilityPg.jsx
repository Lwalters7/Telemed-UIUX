import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/layout/Card.jsx";
import NavBar from "../components/layout/NavBar.jsx";
import colors from "../theme/colors";
import BackButton from "../components/layout/BackButton.jsx";

export default function AccessibilityPg() {
  const navigate = useNavigate();
  const [isDirty, setIsDirty] = useState(false);
  const [textSize, setTextSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  const [keyboardNav, setKeyboardNav] = useState(true);
  const [colorScheme, setColorScheme] = useState("dark");
  const [saveHover, setSaveHover] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");

  const sectionCard = {
    backgroundColor: colors.lg,
    border: `1px solid ${colors.border}`,
    borderRadius: "0.9rem",
    padding: "1.25rem 1.5rem",
    marginTop: "1rem",
  };

  // confirm navigation if there's unsaved changes
  const confirmLeave = () => {
    if (!isDirty) return true;
    return window.confirm(
      "You have unsaved changes. Are you sure you want to leave without saving?" 
    );
  };
  const handleSave = () => {
    // save logic
    const settings = { textSize, highContrast, colorScheme }; //will add screenReader, keyboardNav later after discussion
    localStorage.setItem("accessibilitySettings", JSON.stringify(settings));
    applyAccessibilitySettings(settings);

    setIsDirty(false);
    setSaveMsg("Settings saved!");
    setTimeout(() => {setSaveMsg(""); }, 3000);

  };

  const applyAccessibilitySettings = (settings) => {
    const { textSize, highContrast, colorScheme } = settings;
    const root = document.documentElement;

    root.style.fontSize = `${textSize}%`;

    if (highContrast) {
      root.classList.add("high-contrast");
    } else {
      root.classList.remove("high-contrast");
    }

    root.dataset.theme = colorScheme;
  };

  useEffect(() => {
    const stored = localStorage.getItem("accessibilitySettings");
    if (!stored) return;

      const parsed = JSON.parse(stored);
      if (parsed.textSize) setTextSize(parsed.textSize);
      if (typeof parsed.highContrast === "boolean")
        setHighContrast(parsed.highContrast);
      if (parsed.colorScheme) setColorScheme(parsed.colorScheme);

      applyAccessibilitySettings(parsed);
  }, []);

  return (
    <Card size="narrow">
      <NavBar />
      <div style={{ padding: "2rem 2.5rem" }}>
        <BackButton 
          onBack={() => {
            if (confirmLeave()) {
              navigate(-1);
            }
          }}
        />

        <section style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2
            style={{
              marginBottom: "0.75rem",
              color: colors.textMain,
              fontSize: "1.3rem",
            }}
          >
            Accessibility Settings
          </h2>
          <p style={{ color: colors.textMuted, marginBottom: "1.5rem" }}>
            Adjust text size, contrast, screen reader support, and other options
            to make TeleMed easier and more comfortable to use.
          </p>

          {/* text size  */}
          <div style={sectionCard}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  color: colors.textMain,
                  fontWeight: 600,
                }}
              >
                Text Size
              </span>
              <span
                style={{
                  color: colors.primary,
                  fontWeight: 600,
                }}
              >
                {textSize}%
              </span>
            </div>

            {/* labels row 75–150% */}
            <div style={{ marginBottom: "0.5rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.8rem",
                  color: colors.textMuted,
                  marginBottom: "0.25rem",
                }}
              >
                <span>75%</span>
                <span>100%</span>
                <span>125%</span>
                <span>150%</span>
              </div>
            </div>

            <div
              style={{
                padding: "0.7rem 0.9rem",
                borderRadius: "999px",
              }}
            >
              <input
                type="range"
                min={75}
                max={150}
                step={25}
                value={textSize}
                onChange={(e) => {setTextSize(Number(e.target.value)); setIsDirty(true);}}
                aria-label="Text size"
                style={{
                  width: "100%",
                  appearance: "none",
                  background: "linear-gradient(to right,#e5e7eb,#e5e7eb)",
                  height: "4px",
                  borderRadius: "999px",
                  outline: "none",
                }}
              />
            </div>
          </div>

          {/* high contrast */}
          <div style={sectionCard}>
            <SettingRow
              title="High Contrast Mode"
              description="Increase contrast for better visibility"
              active={highContrast}
              onToggle={() => { setHighContrast((v) => !v); setIsDirty(true); }}
            />
          </div>

          {/* screen reader */}
          <div style={sectionCard}>
            <SettingRow
              title="Screen Reader Support"
              description="Enable enhanced screen reader compatibility"
              active={screenReader}
              onToggle={() => setScreenReader((v) => !v)}
              onChange={() => setIsDirty(true)}
            />
          </div>

          {/* keyboard nav */}
          <div style={sectionCard}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    color: colors.textMain,
                    fontWeight: 600,
                    marginBottom: "0.15rem",
                  }}
                >
                  Keyboard Navigation
                </div>
                <div style={{ color: colors.textMuted, fontSize: "0.9rem" }}>
                  Navigate using keyboard shortcuts
                </div>
              </div>

              <button
                type="button"
                onClick={() => setKeyboardNav((v) => !v)}
                onChange={() => setIsDirty(true)}
                style={{
                  border: "none",
                  borderRadius: "999px",
                  padding: "0.35rem 0.9rem",
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  backgroundColor: keyboardNav ? "#059669" : "#1e293b",
                  color: keyboardNav ? "#e5fdf4" : colors.textMuted,
                  fontWeight: 600,
                }}
              >
                {keyboardNav ? "Active" : "Off"}
              </button>
            </div>
          </div>

          {/* color scheme */}
          <div style={sectionCard}>
            <div
              style={{
                color: colors.textMain,
                fontWeight: 600,
                marginBottom: "0.75rem",
              }}
            >
              Color Scheme
            </div>
            <select
              value={colorScheme}
              onChange={(e) => {setColorScheme(e.target.value); setIsDirty(true);}}
              aria-label="Color scheme"
              style={{
                width: "100%",
                padding: "0.7rem 0.9rem",
                borderRadius: "0.6rem",
                border: `1px solid ${colors.border}`,
                color: colors.textMain,
                fontSize: "0.95rem",
              }}
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="system">System Default</option>
            </select>
          </div>

          {/* save */}
          <button
            type="button"
            onClick={handleSave}
            onMouseEnter={() => setSaveHover(true)}
            onMouseLeave={() => setSaveHover(false)}
            style={{
              marginTop: "1.8rem",
              width: "100%",
              padding: "0.85rem 1rem",
              borderRadius: "999px",
              border: "none",
              backgroundColor: saveHover ? colors.primary : colors.primaryDark,
              color: colors.surface,
              fontWeight: 600,
              fontSize: "0.98rem",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
          >
            Save Settings
          </button>
          
          {saveMsg && (
            <div
              style={{
                marginTop: "0.75rem",
                fontSize: "0.9rem",
                color: colors.success,
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>✓</span>
              <span>{saveMsg}</span>
            </div>
          )}
        </section>
      </div>
    </Card>
  );
}

/**
 * for on/off switches
 */
function SettingRow({ title, description, active, onToggle }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            color: colors.textMain,
            fontWeight: 600,
            marginBottom: "0.15rem",
          }}
        >
          {title}
        </div>
        <div style={{ color: colors.textMuted, fontSize: "0.9rem" }}>
          {description}
        </div>
      </div>

      {/* toggle */}
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={active}
        style={{
          width: "46px",
          height: "26px",
          borderRadius: "999px",
          border: "none",
          padding: 0,
          marginLeft: "1.5rem",
          cursor: "pointer",
          backgroundColor: active ? "#22c55e" : "#1f2937",
          position: "relative",
          outline: "none",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "3px",
            left: active ? "24px" : "3px",
            width: "20px",
            height: "20px",
            borderRadius: "999px",
            backgroundColor: "#f9fafb",
            transition: "left 0.18s ease",
          }}
        />
      </button>
    </div>
  );
}
