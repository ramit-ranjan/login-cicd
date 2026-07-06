import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (email === "test@gmail.com" && password === "123456") {
      alert("Login successful ✅");
    } else {
      alert("Invalid email or password ❌");
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f2f2f2",
  },
  card: {
    width: "300px",
    padding: "25px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 0 10px gray",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "blue",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default App;