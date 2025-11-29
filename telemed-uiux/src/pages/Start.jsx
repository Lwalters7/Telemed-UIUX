import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/layout/Card.jsx";
import NavBar from "../components/layout/NavBar.jsx";

import colors from "../theme/colors";
import docTelemed from "../assets/telemed-doctor.webp";

export default function Start() {
  const navigate = useNavigate();
  const [loginHover, setLoginHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  const labelStyle = {
    fontSize: "0.8rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: colors.primaryDark,
  };

  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 1.5rem",
        }}
      >
        <Card size="wide">
          <div
            style={{
              padding: "2.5rem clamp(2rem, 4vw, 3rem)",
            }}
          >
            <section
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2.5rem",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  flex: "1 1 260px",
                  maxWidth: "640px",
                }}
              >
                <div style={labelStyle}>Welcome to TeleMed</div>

                <h1
                  style={{
                    margin: "0.6rem 0 0.4rem",
                    fontSize: "clamp(1.9rem, 3vw, 2.3rem)",
                    color: colors.textMain,
                  }}
                >
                  Online Healthcare That Feels Simple and Supportive
                </h1>

                <p
                  style={{
                    margin: "0.4rem 0 0.75rem",
                    fontSize: "0.95rem",
                    color: colors.textMuted,
                    lineHeight: 1.6,
                  }}
                >
                  TeleMed is designed to make online healthcare simple,
                  accessible, and stress-free for everyone,
                  especially for users who may not feel confident with
                  technology. We focus on providing a clean, easy-to-navigate
                  experience that helps patients connect with trusted doctors quickly
                  and comfortably from home.
                </p>

                <p
                  style={{
                    margin: "0.4rem 0 0.75rem",
                    fontSize: "0.95rem",
                    color: colors.textMuted,
                    lineHeight: 1.6,
                  }}
                >
                  Chat with a Healthcare Professional today!
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                    alignItems: "center",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => navigate("/login")}
                    onMouseEnter={() => setLoginHover(true)}
                    onMouseLeave={() => setLoginHover(false)}
                    style={{
                      padding: "0.75rem 1.6rem",
                      borderRadius: "999px",
                      border: "none",
                      backgroundColor: loginHover
                        ? colors.primary
                        : colors.primaryDark,
                      color: colors.surface,
                      fontWeight: 600,
                      fontSize: "0.96rem",
                      cursor: "pointer",
                      transition: "background-color 0.15s ease",
                      boxShadow:
                        "0 8px 24px rgba(15, 23, 42, 0.18)",
                    }}
                  >
                    Log in / Register
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/home")}
                    onMouseEnter={() => setSecondaryHover(true)}
                    onMouseLeave={() => setSecondaryHover(false)}
                    style={{
                      padding: "0.7rem 1.3rem",
                      borderRadius: "999px",
                      border: `1px solid ${colors.border}`,
                      backgroundColor: secondaryHover
                        ? colors.primaryLight
                        : "transparent",
                      color: secondaryHover
                        ? colors.primaryDark
                        : colors.textMain,
                      fontWeight: 500,
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      transition:
                        "background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease",
                    }}
                  >
                    Explore the app (for demo)
                  </button>
                </div>
              </div>

              <div
                style={{
                  flex: "1 1 260px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    borderRadius: "1.25rem",
                    overflow: "hidden",
                    maxWidth: "420px",
                    width: "100%",
                    boxShadow: "0 18px 40px rgba(15, 23, 42, 0.24)",
                  }}
                >
                  <img
                    src={docTelemed}
                    style={{
                      width: "100%",
                      height: "100%",
                      maxHeight: "320px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            </section>

            {/* goals section*/}
            <section
              style={{
                marginTop: "2.5rem",
              }}
            >
              <h2
                style={{
                  margin: "0 0 0.5rem",
                  fontSize: "1.25rem",
                  color: colors.textMain,
                }}
              >
                Our Goals
              </h2>
              
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1rem",
                }}
              >
                {/* Goal 1 */}
                <article
                  style={{
                    borderRadius: "0.9rem",
                    backgroundColor: colors.lgBackground,
                    border: `1px solid ${colors.border}`,
                    padding: "1rem 1.2rem",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      marginBottom: "0.4rem",
                      fontSize: "1rem",
                      color: colors.textMain,
                    }}
                  >
                    Make healthcare accessible for everyone
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9rem",
                      color: colors.textMuted,
                      lineHeight: 1.6,
                    }}
                  >
                    TeleMed is built with accessibility in mind. With clear text,
                    larger font options, strong contrast, simple navigation
                    support seniors and users with visual or cognitive
                    challenges.
                  </p>
                </article>

                {/* Goal 2 */}
                <article
                  style={{
                    borderRadius: "0.9rem",
                    backgroundColor: colors.lgBackground,
                    border: `1px solid ${colors.border}`,
                    padding: "1rem 1.2rem",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      marginBottom: "0.4rem",
                      fontSize: "1rem",
                      color: colors.textMain,
                    }}
                  >
                    Connect patients with doctors quickly and safely
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9rem",
                      color: colors.textMuted,
                      lineHeight: 1.6,
                    }}
                  >
                    From choosing a doctor to viewing available times and
                    starting a visit, TeleMed reduces extra steps so you can get
                    care faster without navigating complex menus.
                  </p>
                </article>

                {/* Goal 3 */}
                <article
                  style={{
                    borderRadius: "0.9rem",
                    backgroundColor: colors.lgBackground,
                    border: `1px solid ${colors.border}`,
                    padding: "1rem 1.2rem",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      marginBottom: "0.4rem",
                      fontSize: "1rem",
                      color: colors.textMain,
                    }}
                  >
                    Reduce stress during online medical visits
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9rem",
                      color: colors.textMuted,
                      lineHeight: 1.6,
                    }}
                  >
                    Calm layouts, predictable flows, and clear labels reduce
                    confusion and anxiety so patients can focus on their visit,
                    not on figuring out what to click next.
                  </p>
                </article>
              </div>
            </section>
          </div>
        </Card>
      </main>
    </>
  );
}
