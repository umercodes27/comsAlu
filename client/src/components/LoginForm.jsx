import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      console.log(res.data); // check response in console

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/homepage"); // Redirect to HomePage after successful login
      }
    } catch (err) {
      console.log(err.response.data.message);
      alert(err.response.data.message); // optional
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Login</h2>
      <p>Please enter your login details below</p>

      <input
        type="email"
        placeholder="Email"
        className={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        className={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className={styles.loginButton} onClick={handleLogin}>
        Login
      </button>

      <div className={styles.registerPrompt}>
        Don’t have an Account?{" "}
        <a href="/signup" className={styles.signupLink}>
          Sign up
        </a>
      </div>

      <div className={styles.divider}>
        <span>or</span>
      </div>

      <div className={styles.socialLogin}>
        <img src="/google.png" alt="Google Login" />
        <img src="/linkedin.png" alt="LinkedIn Login" />
      </div>
    </div>
  );
};

export default LoginForm;
