import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setMessage(`Tizimga kirildi: ${userCredential.user.email}`);
      navigate("/"); // login muvaffaqiyatli bo'lsa bosh sahifaga yo'naltiramiz
    } catch (error) {
      setMessage(`Xatolik: ${error.message}`);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2>Tizimga kirish</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Kirish</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f2f2f2",
  },
  form: {
    background: "white",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "300px",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginBottom: "1rem",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
  },
};

export default Login;
