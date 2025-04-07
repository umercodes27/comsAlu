import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={styles.formContainer}>
      <h2>Login</h2>
      <p>Please enter your login details below</p>
      <input type="email" placeholder="Email" className={styles.input} />
      <input
        type="password"
        placeholder="Enter password"
        className={styles.input}
      />
      <button className={styles.loginButton}>Login</button>
      <div className={styles.registerPrompt}>Don’t have an Account?</div>
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
