import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/layout/Card.jsx";
import NavBar from "../components/layout/NavBar.jsx";

import colors from "../theme/colors";
import docTelemed from "../assets/telemed-doctor.webp";

export default function Start() {
  const navigate = useNavigate();
  const [buttonHover, setButtonHover] = useState(false);
  

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "3rem",
            width: "100%",
            maxWidth: "1100px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* about card*/}
          <Card size="narrow">
            <div style={{ padding: "2rem 2.5rem", maxWidth: "520px" }}>
              <h1
                style={{
                  fontSize: "2rem",
                  marginBottom: "1.25rem",
                  color: colors.textMain,
                }}
              >
                Welcome to TeleMed!
              </h1>

              <h2
                style={{
                  fontSize: "1.05rem",
                  marginBottom: "0.75rem",
                  fontWeight: 600,
                  color: colors.primary, 
                }}
              >
                About Us
              </h2>

              <p
                style={{
                  marginBottom: "0.75rem",
                  lineHeight: 1.6,
                  color: colors.textMuted,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                nec metus sed diam hendrerit vulputate. Curabitur non consequat
                nisi. Duis eget rutrum enim. Cras a elit neque, viverra elit.
              </p>

              <p
                style={{
                  marginBottom: "1.5rem",
                  lineHeight: 1.6,
                  color: colors.textMuted,
                }}
              >
                Curabitur placerat vulputate nisl et dictum. In mauris ante,
                elementum non elit et, elementum orci sagittis. Integer ex
                volutpat eget. Ut tempus tortor at velit arcu, ut privat mi
                consectetur.
              </p>

              <div
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  marginTop: "0.5rem",
                }}
              >
                <img
                  src={docTelemed}
                  alt="Doctor using a phone"
                  style={{
                    width: "100%",
                    height: "230px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </Card>

          {/* get started card */}
          <Card size="narrow">
            <div
              style={{
                padding: "2rem 2.5rem",
                width: "360px",
                maxWidth: "100%",
              }}
            >
              <h2
                style={{
                  textAlign: "center",
                  fontSize: "1.25rem",
                  marginBottom: "1.75rem",
                  color: colors.textMain,
                }}
              >
                Get Started
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                }}
              >
                <button
                  type="button"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "999px",
                    border: "none",
                    backgroundColor: colors.primary,
                    color: colors.surface,
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                  }}
                >
                  Telemed&apos;s Goal #1
                </button>

                <button
                  type="button"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "999px",
                    border: "none",
                    backgroundColor: colors.primary,
                    color: colors.surface,
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                  }}
                >
                  Telemed&apos;s Goal #2
                </button>

                <button
                  type="button"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "999px",
                    border: "none",
                    backgroundColor: colors.primary,
                    color: colors.surface,
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                  }}
                >
                  Telemed&apos;s Goal #3
                </button>

                {/* Log in button */}
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  onMouseEnter={() => setButtonHover(true)}
                  onMouseLeave={() => setButtonHover(false)}
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    borderRadius: "999px",
                    border: `none`,
                    backgroundColor: buttonHover ? colors.primary : colors.primaryDark,
                    color: colors.surface,
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    marginTop: "0.4rem",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  Log in/Register
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
