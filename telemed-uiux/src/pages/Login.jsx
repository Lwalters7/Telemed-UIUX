import { useNavigate } from "react-router-dom";
import colors from "../theme/colors";

function Login() {
  const navigate = useNavigate();

  const handleFakeLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <section style={{ maxWidth: "420px", margin: "2rem auto" }}>
      <h2 style={{ marginBottom: "1rem", color: colors.textMain }}>
        Login
      </h2>

      <form
        onSubmit={handleFakeLogin}
        style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}
      >
        <label style={{ fontSize: "0.9rem", color: colors.textMain }}>
          Email
          <input
            type="email"
            required
            style={{
              width: "100%",
              marginTop: "0.25rem",
              padding: "0.5rem 0.6rem",
              borderRadius: "0.45rem",
              border: `1px solid ${colors.border}`,
            }}
          />
        </label>

        <label style={{ fontSize: "0.9rem", color: colors.textMain }}>
          Password
          <input
            type="password"
            required
            style={{
              width: "100%",
              marginTop: "0.25rem",
              padding: "0.5rem 0.6rem",
              borderRadius: "0.45rem",
              border: `1px solid ${colors.border}`,
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            marginTop: "0.5rem",
            padding: "0.6rem 1.4rem",
            borderRadius: "999px",
            border: "none",
            backgroundColor: colors.primary,
            color: colors.surface,
            fontWeight: 600,
          }}
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
