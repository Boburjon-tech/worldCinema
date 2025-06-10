import React, { useState } from "react";
import { auth, provider } from "../../firebase/config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setMessage(`Muvaffaqiyatli ro'yxatdan o'tildi: ${userCredential.user.email}`);
      navigate("/");
    } catch (error) {
      setMessage(`Xatolik: ${error.message}`);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setMessage(`Google orqali tizimga kirildi: ${result.user.email}`);
      navigate("/");
    } catch (error) {
      setMessage(`Google bilan xatolik: ${error.message}`);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleRegister} style={styles.form}>
        <h2>Ro'yxatdan o'tish</h2>
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
        <button type="submit" style={styles.button}>Ro'yxatdan o'tish</button>

        <hr style={{ margin: "1rem 0" }} />

        <button type="button" onClick={handleGoogleRegister} style={styles.googleButton}>
          Google bilan ro'yxatdan o'tish
        </button>

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
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    marginBottom: "10px"
  },
  googleButton: {
    padding: "10px",
    backgroundColor: "#db4437",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
  }
};

export default Register;
