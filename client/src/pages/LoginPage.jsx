// import { useState } from "react";
// import styles from "./LoginPage.module.css";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div className={styles.loginContainer}>
//       <div className={styles.loginBox}>
//         <h1 className={styles.brandTitle}>
//           Coms<strong>Alu</strong>
//         </h1>
//         <h2>Login</h2>
//         <p className="login-description">
//           Please enter your login details below
//         </p>
//         <form
//           className="login-form"
//           onSubmit={(e) => {
//             e.preventDefault();
//             console.log("Email:", email, "Password:", password);
//           }}
//         >
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//             />
//           </div>
//           <button type="submit" className="login-button">
//             Login
//           </button>
//           <p className="signup-text">Dont have an account?</p>
//           <div className="divider">
//             <hr />
//             <p>or</p>
//             <hr />
//           </div>
//           <div className="social-buttons">
//             <button className="social-button google">Login with Google</button>
//             <button className="social-button linkedin">
//               Login with LinkedIn
//             </button>
//           </div>
//         </form>
//       </div>
//       <div className="horizontal-row"></div>
//     </div>
//   );
// }

import styles from "./LoginPage.module.css";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div className={styles.logo}>
          coms<span>Alu</span>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
