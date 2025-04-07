import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./SignupForm.module.css";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // For error message
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent form from refreshing

    // Simple client-side validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        firstName,
        lastName,
        username,
        email,
        password,
      });

      console.log(res.data); // You can remove this in production

      // If the response indicates success, redirect to login page
      navigate("/login"); // Redirect to login page after successful signup
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Sign Up</h2>
      <p>Please enter your details below</p>

      {/* Error message */}
      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.nameFields}>
        <input
          type="text"
          placeholder="First Name"
          className={styles.input}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className={styles.input}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <input
        type="text"
        placeholder="Username"
        className={styles.input}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        className={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Create password"
        className={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Confirm password"
        className={styles.input}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button className={styles.signupButton} onClick={handleSignup}>
        Sign Up
      </button>

      <div className={styles.divider}>
        <span>or</span>
      </div>

      <div className={styles.socialLogin}>
        <img src="/google.png" alt="Google" />
        <img src="/linkedin.png" alt="LinkedIn" />
      </div>
    </div>
  );
};

export default SignupForm;
