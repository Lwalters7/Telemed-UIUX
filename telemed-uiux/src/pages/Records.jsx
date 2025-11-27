import Card from "../components/layout/Card.jsx";
import NavBar from "../components/layout/NavBar.jsx";
import colors from "../theme/colors";
import BackButton from "../components/layout/BackButton.jsx";

export default function Records() {
  const labelStyle = {
    fontSize: "0.78rem",
    fontWeight: 600,
    color: colors.textMuted,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginBottom: "0.1rem",
  };

  const valueStyle = {
    fontSize: "0.92rem",
    color: colors.textMain,
  };

  const sectionStyle = {
    borderRadius: "0.6rem",
    border: `1px solid ${colors.border}`,
    padding: "0.65rem 1rem",
    backgroundColor: colors.surface,
  };

  return (
    <Card size="wide">
      <NavBar />

      <div style={{ padding: ".5rem 1.75rem" }}>
        <BackButton />
        <section
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.9rem",
          }}
        >
          {/* Header row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.3rem",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "1.4rem",
                color: colors.textMain,
              }}
            >
              Your Records
            </h2>

            <button
              type="button"
              style={{
                padding: "0.35rem 1.1rem",
                borderRadius: "999px",
                border: "none",
                backgroundColor: colors.primaryDark,
                color: colors.surface,
                fontWeight: 600,
                fontSize: "0.85rem",
                cursor: "pointer",
                boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
              }}
              onClick={() => alert("Update flow coming soon.")}
            >
              Update
            </button>
          </div>

          {/* Hint text */}
          <p
            style={{
              margin: 0,
              marginBottom: "0.3rem",
              fontSize: "0.85rem",
              color: colors.textMuted,
            }}
          >
            Sensitive details are partially hidden. All data below is placeholder
            information.
          </p>

          {/* Basic Information */}
          <div style={sectionStyle}>
            <h3
              style={{
                margin: 0,
                marginBottom: "0.5rem",
                fontSize: "0.95rem",
                color: colors.textMain,
              }}
            >
              Basic Information
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.6rem 1.8rem",
              }}
            >
              <div>
                <div style={labelStyle}>Full Name</div>
                <div style={valueStyle}>Blorbo McWeeserson</div>
              </div>

              <div>
                <div style={labelStyle}>Date of Birth</div>
                <div style={valueStyle}>09 / 31 / 1997</div>
              </div>

              <div>
                <div style={labelStyle}>Social Security Number</div>
                <div style={valueStyle}>*** - ** - 1337</div>
              </div>

              <div>
                <div style={labelStyle}>Medical Record Number</div>
                <div style={valueStyle}>MRN-FAKE-01</div>
              </div>

              <div>
                <div style={labelStyle}>Phone</div>
                <div style={valueStyle}>(555) 123-4567</div>
              </div>

              <div>
                <div style={labelStyle}>Email</div>
                <div style={valueStyle}>blorbo@example.fake</div>
              </div>
            </div>
          </div>

          {/* Address + Insurance */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1.5fr",
              gap: "0.9rem",
            }}
          >
            <div style={sectionStyle}>
              <h3
                style={{
                  margin: 0,
                  marginBottom: "0.5rem",
                  fontSize: "0.95rem",
                  color: colors.textMain,
                }}
              >
                Address
              </h3>

              <div style={{ ...valueStyle, lineHeight: 1.4 }}>
                404 Imaginary Circle
                <br />
                Madeup City, ZZ 00000
              </div>

              <div style={{ marginTop: "0.4rem" }}>
                <div style={labelStyle}>Preferred Contact</div>
                <div style={valueStyle}>Phone</div>
              </div>
            </div>

            <div style={sectionStyle}>
              <h3
                style={{
                  margin: 0,
                  marginBottom: "0.5rem",
                  fontSize: "0.95rem",
                  color: colors.textMain,
                }}
              >
                Insurance
              </h3>

              <div>
                <div style={labelStyle}>Provider</div>
                <div style={valueStyle}>Real Insurance Co.</div>
              </div>

              <div style={{ marginTop: "0.35rem" }}>
                <div style={labelStyle}>Policy Number</div>
                <div style={valueStyle}>POL-FAKE-777</div>
              </div>

              <div style={{ marginTop: "0.35rem" }}>
                <div style={labelStyle}>Plan</div>
                <div style={valueStyle}>Ultra-Premium Diamond Tier</div>
              </div>
            </div>
          </div>

          {/* Medical Snapshot */}
          <div style={sectionStyle}>
            <h3
              style={{
                margin: 0,
                marginBottom: "0.5rem",
                fontSize: "0.95rem",
                color: colors.textMain,
              }}
            >
              Medical Snapshot
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.6rem 1.8rem",
              }}
            >
              <div>
                <div style={labelStyle}>Primary Provider</div>
                <div style={valueStyle}>Dr. Alice Smith</div>
              </div>

              <div>
                <div style={labelStyle}>Last Telemed Visit</div>
                <div style={valueStyle}>10 / 20 / 2021</div>
              </div>

              <div>
                <div style={labelStyle}>Conditions</div>
                <div style={valueStyle}>Balding, Asthma</div>
              </div>

              <div>
                <div style={labelStyle}>Current Medications</div>
                <div style={valueStyle}>Minoxidil, 1 gummy daily</div>
              </div>

              <div>
                <div style={labelStyle}>Allergies</div>
                <div style={valueStyle}>Dust bunnies</div>
              </div>

              <div>
                <div style={labelStyle}>Primary Location</div>
                <div style={valueStyle}>Nowhere Clinic, Earth</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Card>
  );
}
