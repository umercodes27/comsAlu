import styles from "./LoginPage.module.css";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div className={styles.logo}>
          coms<span>Alu</span>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
