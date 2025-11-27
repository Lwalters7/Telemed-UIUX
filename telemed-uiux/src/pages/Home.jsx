import { useNavigate } from "react-router-dom";
import Card from "../components/layout/Card.jsx";
import NavBar from "../components/layout/NavBar.jsx";
import colors from "../theme/colors";

import chatIcon from "../assets/chat.png";
import recordsIcon from "../assets/records.png";
import scheduleIcon from "../assets/schedule.png";

export default function Home() {
  const navigate = useNavigate();

  const circleButton = {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    backgroundColor: colors.surface,
    border: `2px solid ${colors.border}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    transition: "transform 0.15s ease, boxShadow 0.15s ease",
    overflow: "hidden", // keeps the icon clipped to circle
  };

  const circleHover = {
    transform: "scale(1.05)",
    boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
  };

  // shared column style for icon + text label
  const optionColumnBase = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.75rem",
    cursor: "pointer",
  };

  return (
    <Card size="wide">
      <NavBar />

      <div style={{ padding: "2rem 2.5rem" }}>
        <section style={{ textAlign: "center" }}>
          {/* Header */}
          <h2
            style={{
              marginBottom: "2rem",
              fontSize: "1.8rem",
              fontWeight: 700,
              color: colors.textMain,
            }}
          >
            How can we assist you today?
          </h2>

          {/* Triangle layout row */}
         <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start", // or "center"
            gap: "2.5rem",
            flexWrap: "wrap",
          }}
        >

            {/* LEFT – Message a Doctor (slightly lower) */}
            <div
              style={{
                ...optionColumnBase,
                marginTop: "1.5rem",
              }}
              onClick={() => navigate("/chatroom")}
            >
              <div
                style={circleButton}
                onMouseEnter={(e) =>
                  Object.assign(e.currentTarget.style, circleHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.currentTarget.style, {
                    transform: "scale(1)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  })
                }
              >
                <img
                  src={chatIcon}
                  alt="Chatroom"
                  style={{
                    width: "140%",
                    height: "140%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <span
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: colors.textMain,
                }}
              >
                Message your Doctor
              </span>
            </div>

            {/* CENTER – Records (highest point) */}
            <div
              style={{
                ...optionColumnBase,
                marginTop: 0, // top of the triangle
              }}
              onClick={() => navigate("/records")}
            >
              <div
                style={circleButton}
                onMouseEnter={(e) =>
                  Object.assign(e.currentTarget.style, circleHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.currentTarget.style, {
                    transform: "scale(1)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  })
                }
              >
                <img
                  src={recordsIcon}
                  alt="Records"
                  style={{
                    width: "140%",
                    height: "140%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <span
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: colors.textMain,
                }}
              >
                View / Update your Records
              </span>
            </div>

            {/* RIGHT – Schedule an Appointment (slightly lower) */}
            <div
              style={{
                ...optionColumnBase,
                marginTop: "1.5rem",
              }}
              onClick={() => navigate("/schedule")}
            >
              <div
                style={circleButton}
                onMouseEnter={(e) =>
                  Object.assign(e.currentTarget.style, circleHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.currentTarget.style, {
                    transform: "scale(1)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  })
                }
              >
                <img
                  src={scheduleIcon}
                  alt="Schedule"
                  style={{
                    width: "140%",
                    height: "140%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <span
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: colors.textMain,
                }}
              >
                Schedule an Appointment
              </span>
            </div>
          </div>
        </section>
      </div>
    </Card>
  );
}
