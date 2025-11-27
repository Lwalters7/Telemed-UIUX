import { useState } from "react";
import Card from "../components/layout/Card.jsx";
import NavBar from "../components/layout/NavBar.jsx";
import colors from "../theme/colors";
import BackButton from "../components/layout/BackButton.jsx";

// Import doctor photos from assets folder
import docSmith from "../assets/doc_smith.avif";
import docNguyen from "../assets/doc_nguyen.jpg";
import docPatel from "../assets/doc_patel.avif";

const initialDoctors = [
  {
    id: "smith",
    name: "Dr. Alice Smith",
    specialty: "Family Medicine",
    status: "Online",
    photo: docSmith,
    messages: [
      {
        id: 1,
        from: "doctor",
        text: "Hello, this is Dr. Smith. How can I help you today?",
        time: "9:30 AM",
      },
    ],
  },
  {
    id: "nguyen",
    name: "Dr. Minh Nguyen",
    specialty: "Cardiology",
    status: "Offline",
    photo: docNguyen,
    messages: [
      {
        id: 1,
        from: "doctor",
        text: "I usually reply within one business day.",
        time: "8:05 AM",
      },
    ],
  },
  {
    id: "patel",
    name: "Dr. Rina Patel",
    specialty: "Mental Health",
    status: "Online",
    photo: docPatel,
    messages: [
      {
        id: 1,
        from: "doctor",
        text: "You can share how you've been feeling lately.",
        time: "10:12 AM",
      },
    ],
  },
];

export default function Chatroom() {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [activeId, setActiveId] = useState(initialDoctors[0].id);
  const [input, setInput] = useState("");

  const activeDoctor = doctors.find((d) => d.id === activeId);

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || !activeDoctor) return;

    const newMessage = {
      id: Date.now(),
      from: "patient",
      text: trimmed,
      time: new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      }),
    };

    setDoctors((prev) =>
      prev.map((doc) =>
        doc.id === activeDoctor.id
          ? { ...doc, messages: [...doc.messages, newMessage] }
          : doc
      )
    );

    setInput("");
  };

  return (
    <Card size="wide">
      <NavBar />

      <div style={{ padding: "2rem 2.5rem" }}>
        <BackButton />
        <section
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            gap: "1.5rem",
          }}
        >
          {/* LEFT SIDE — DOCTOR LIST */}
          <aside
            style={{
              width: "260px",
              minWidth: "220px",
              borderRadius: "0.75rem",
              border: `1px solid ${colors.border}`,
              backgroundColor: colors.surface,
              padding: "0.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <h3
              style={{
                margin: "0 0 0.5rem 0",
                fontSize: "1rem",
                color: colors.textMain,
              }}
            >
              Your Care Team
            </h3>

            {doctors.map((doc) => {
              const isActive = doc.id === activeId;
              return (
                <button
                  key={doc.id}
                  onClick={() => setActiveId(doc.id)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    borderRadius: "0.6rem",
                    border: "none",
                    padding: "0.5rem 0.6rem",
                    backgroundColor: isActive
                      ? colors.primaryLight
                      : "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  {/* Doctor Photo */}
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: `2px solid ${colors.border}`,
                      backgroundColor: colors.primaryLight,
                    }}
                  />

                  {/* Doctor Info */}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: colors.textMain,
                      }}
                    >
                      {doc.name}
                    </span>

                    <span
                      style={{ fontSize: "0.8rem", color: colors.textMuted }}
                    >
                      {doc.specialty}
                    </span>

                    <span
                      style={{
                        fontSize: "0.8rem",
                        color:
                          doc.status === "Online"
                            ? "#2ecc71"
                            : colors.textMuted,
                      }}
                    >
                      {doc.status}
                    </span>
                  </div>
                </button>
              );
            })}
          </aside>

          {/* RIGHT SIDE — CHAT WINDOW */}
          <div
            style={{
              flex: "1 1 auto",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {/* CHAT HEADER WITH PHOTO */}
            {activeDoctor && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* Doctor Photo + Info */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <img
                    src={activeDoctor.photo}
                    alt={activeDoctor.name}
                    style={{
                      width: "55px",
                      height: "55px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: `2px solid ${colors.border}`,
                      backgroundColor: colors.primaryLight,
                    }}
                  />

                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        color: colors.textMain,
                      }}
                    >
                      {activeDoctor.name}
                    </p>

                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.85rem",
                        color: colors.textMuted,
                      }}
                    >
                      {activeDoctor.specialty}
                    </p>
                  </div>
                </div>

                {/* Non-urgent reminder */}
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.8rem",
                    color: colors.textMuted,
                  }}
                >
                  Non-urgent messages only
                </p>
              </div>
            )}

            {/* CHAT MESSAGES */}
            <div
              style={{
                marginTop: "0.5rem",
                height: "320px",
                borderRadius: "0.75rem",
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.lgBackground,
                padding: "1rem",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {activeDoctor?.messages.map((msg) => {
                const isPatient = msg.from === "patient";

                return (
                  <div
                    key={msg.id}
                    style={{
                      display: "flex",
                      justifyContent: isPatient ? "flex-end" : "flex-start",
                    }}
                  >
                    <div
                      style={{
                        maxWidth: "70%",
                        padding: "0.6rem 0.9rem",
                        borderRadius: "1rem",
                        borderBottomLeftRadius: isPatient ? "1rem" : "0.25rem",
                        borderBottomRightRadius: isPatient
                          ? "0.25rem"
                          : "1rem",
                        backgroundColor: isPatient
                          ? colors.primary
                          : colors.surface,
                        color: isPatient ? colors.surface : colors.textMain,
                        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                        fontSize: "0.95rem",
                      }}
                    >
                      <div style={{ marginBottom: "0.25rem" }}>{msg.text}</div>
                      <div
                        style={{
                          textAlign: "right",
                          fontSize: "0.75rem",
                          opacity: 0.75,
                        }}
                      >
                        {msg.time}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* INPUT AREA */}
            <form
              onSubmit={handleSend}
              style={{
                display: "flex",
                gap: "0.75rem",
                marginTop: "0.5rem",
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                style={{
                  flex: "1 1 auto",
                  padding: "0.7rem 0.8rem",
                  borderRadius: "0.6rem",
                  border: `1px solid ${colors.border}`,
                  fontSize: "0.95rem",
                }}
              />

              <button
                type="submit"
                style={{
                  padding: "0.65rem 1.3rem",
                  borderRadius: "999px",
                  border: "none",
                  backgroundColor: colors.primaryDark,
                  color: colors.surface,
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                }}
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
    </Card>
  );
}
