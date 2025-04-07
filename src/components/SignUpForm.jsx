import styles from "./SignupForm.module.css";

const SignupForm = () => {
  return (
    <div className={styles.formContainer}>
      <h2>Sign up</h2>
      <p>Please enter your details below</p>
      <div className={styles.nameFields}>
        <input type="text" placeholder="First Name" className={styles.input} />
        <input type="text" placeholder="Last Name" className={styles.input} />
      </div>
      <input type="text" placeholder="Username" className={styles.input} />
      <input type="email" placeholder="Email" className={styles.input} />
      <input
        type="password"
        placeholder="Create password"
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Confirm password"
        className={styles.input}
      />
      <button className={styles.signupButton}>Sign Up</button>
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
