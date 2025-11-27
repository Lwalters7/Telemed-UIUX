import { useState } from "react";
import Card from "../components/layout/Card.jsx";
import NavBar from "../components/layout/NavBar.jsx";
import colors from "../theme/colors";
import BackButton from "../components/layout/BackButton.jsx";

// Use the same doctor photos as Chatroom
import docSmith from "../assets/doc_smith.avif";
import docNguyen from "../assets/doc_nguyen.jpg";
import docPatel from "../assets/doc_patel.avif";

const doctors = [
  {
    id: "smith",
    name: "Dr. Alice Smith",
    specialty: "Family Medicine",
    photo: docSmith,
  },
  {
    id: "nguyen",
    name: "Dr. Minh Nguyen",
    specialty: "Cardiology",
    photo: docNguyen,
  },
  {
    id: "patel",
    name: "Dr. Rina Patel",
    specialty: "Mental Health",
    photo: docPatel,
  },
];

// Fake random-ish schedule data
const scheduleData = {
  smith: [
    { date: "Mon, Oct 6", slots: ["9:00 AM", "10:30 AM", "2:00 PM"] },
    { date: "Tue, Oct 7", slots: ["11:15 AM", "1:00 PM"] },
    { date: "Thu, Oct 9", slots: ["8:45 AM", "3:30 PM", "4:15 PM"] },
  ],
  nguyen: [
    { date: "Wed, Oct 8", slots: ["9:30 AM", "10:00 AM"] },
    { date: "Fri, Oct 10", slots: ["1:30 PM", "2:15 PM", "3:45 PM"] },
  ],
  patel: [
    { date: "Mon, Oct 6", slots: ["3:00 PM", "4:00 PM"] },
    { date: "Tue, Oct 7", slots: ["9:15 AM", "10:45 AM"] },
    { date: "Thu, Oct 9", slots: ["11:00 AM", "1:30 PM"] },
  ],
};

export default function Schedule() {
  const [activeDoctorId, setActiveDoctorId] = useState(doctors[0].id);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingMessage, setBookingMessage] = useState("");

  const activeDoctor = doctors.find((d) => d.id === activeDoctorId);
  const activeSchedule = scheduleData[activeDoctorId] || [];

  const handleSelectSlot = (day, time) => {
    setSelectedSlot({
      doctorId: activeDoctorId,
      doctorName: activeDoctor.name,
      date: day.date,
      time,
    });
    setBookingMessage(""); // clear any old message when changing time
  };

  const handleBook = () => {
    if (!selectedSlot) return;
    setBookingMessage(
      "An email has been sent to your email with the appointment information."
    );
  };

  const labelStyle = {
    fontSize: "0.78rem",
    fontWeight: 600,
    color: colors.textMuted,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginBottom: "0.1rem",
  };

  return (
    <Card size="wide">
      <NavBar />

      <div style={{ padding: "1.5rem 2rem" }}>
        <BackButton />
        <section
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "1.4rem",
                  color: colors.textMain,
                }}
              >
                Schedule an Appointment
              </h2>
              <p
                style={{
                  margin: 0,
                  marginTop: "0.25rem",
                  fontSize: "0.85rem",
                  color: colors.textMuted,
                }}
              >
                Choose a doctor and select one of the available times below.
                This is demo data only.
              </p>
            </div>
          </div>

          {/* Layout: left doctor selector, right schedule */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 230px) minmax(0, 1fr)",
              gap: "1.25rem",
            }}
          >
            {/* LEFT: doctors list with PFPS */}
            <aside
              style={{
                borderRadius: "0.75rem",
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.surface,
                padding: "0.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <div style={labelStyle}>Choose a Doctor</div>

              {doctors.map((doc) => {
                const isActive = doc.id === activeDoctorId;
                return (
                  <button
                    key={doc.id}
                    onClick={() => {
                      setActiveDoctorId(doc.id);
                      setSelectedSlot(null);
                      setBookingMessage("");
                    }}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      borderRadius: "0.6rem",
                      border: "none",
                      padding: "0.45rem 0.6rem",
                      backgroundColor: isActive
                        ? colors.primaryLight
                        : "transparent",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                    }}
                  >
                    <img
                      src={doc.photo}
                      alt={doc.name}
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: `2px solid ${colors.border}`,
                        backgroundColor: colors.primaryLight,
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.05rem",
                      }}
                    >
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
                        style={{
                          fontSize: "0.8rem",
                          color: colors.textMuted,
                        }}
                      >
                        {doc.specialty}
                      </span>
                    </div>
                  </button>
                );
              })}
            </aside>

            {/* RIGHT: schedule for selected doctor */}
            <div
              style={{
                borderRadius: "0.75rem",
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.surface,
                padding: "0.9rem 1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                height: "420px", // fixed height so card doesn't jump
                overflow: "hidden",
              }}
            >
              {/* Doctor summary + selected time + book button */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div>
                  <div style={labelStyle}>Selected Doctor</div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: colors.textMain,
                    }}
                  >
                    {activeDoctor.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: colors.textMuted,
                    }}
                  >
                    {activeDoctor.specialty}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "0.3rem",
                    maxWidth: "280px",
                  }}
                >
                  {selectedSlot && (
                    <>
                      <div style={labelStyle}>Selected Time</div>
                      <div
                        style={{
                          fontSize: "0.9rem",
                          color: colors.textMain,
                        }}
                      >
                        {selectedSlot.date} at {selectedSlot.time}
                      </div>
                    </>
                  )}

                  <button
                    type="button"
                    onClick={handleBook}
                    disabled={!selectedSlot}
                    style={{
                      marginTop: "0.25rem",
                      padding: "0.45rem 1.1rem",
                      borderRadius: "999px",
                      border: "none",
                      backgroundColor: selectedSlot
                        ? colors.primaryDark
                        : "#CBD5E1",
                      color: colors.surface,
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      cursor: selectedSlot ? "pointer" : "not-allowed",
                      boxShadow: selectedSlot
                        ? "0 4px 10px rgba(0,0,0,0.15)"
                        : "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>

              {/* Available times area with internal scroll */}
              <div
                style={{
                  marginTop: "0.25rem",
                  flex: "1 1 auto",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={labelStyle}>Available Times</div>

                {activeSchedule.length === 0 ? (
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9rem",
                      color: colors.textMuted,
                    }}
                  >
                    No available times are listed for this doctor yet.
                  </p>
                ) : (
                  <div
                    style={{
                      marginTop: "0.25rem",
                      flex: "1 1 auto",
                      overflowY: "auto",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                    }}
                  >
                    {activeSchedule.map((day) => (
                      <div
                        key={day.date}
                        style={{
                          borderRadius: "0.6rem",
                          border: `1px solid ${colors.border}`,
                          padding: "0.6rem 0.7rem",
                          backgroundColor: "#F7F9FC",
                          maxWidth: "100%",
                          boxSizing: "border-box",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            color: colors.textMain,
                            marginBottom: "0.35rem",
                          }}
                        >
                          {day.date}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.4rem",
                          }}
                        >
                          {day.slots.map((time) => {
                            const isSelected =
                              selectedSlot &&
                              selectedSlot.doctorId === activeDoctorId &&
                              selectedSlot.date === day.date &&
                              selectedSlot.time === time;

                            return (
                              <button
                                key={time}
                                type="button"
                                onClick={() => handleSelectSlot(day, time)}
                                style={{
                                  padding: "0.35rem 0.7rem",
                                  borderRadius: "999px",
                                  border: isSelected
                                    ? `2px solid ${colors.primaryDark}`
                                    : `1px solid ${colors.border}`,
                                  backgroundColor: isSelected
                                    ? colors.primaryLight
                                    : colors.surface,
                                  fontSize: "0.85rem",
                                  cursor: "pointer",
                                }}
                              >
                                {time}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Booking confirmation message */}
              {bookingMessage && (
                <div
                  style={{
                    marginTop: "0.25rem",
                    paddingTop: "0.25rem",
                    borderTop: `1px solid ${colors.border}`,
                    fontSize: "0.85rem",
                    color: colors.textMain,
                  }}
                >
                  {bookingMessage}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </Card>
  );
}
