import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1>
        This is our Landing Page where the User will Land to as soon as
        <em>ComsAlu is visited</em>
      </h1>
      <p>Welcome to your professional community</p>
      <p>
        Sign in with email By clicking Continue to join or sign in,<br></br> you
        agree to LinkedIn’s User Agreement, Privacy Policy, and Cookie Policy.
        New to LinkedIn? Join now
      </p>
      <Link to="/login" className="cta">
        Login
      </Link>
      <Link to="/login" className="cta">
        Sign Up
      </Link>
    </div>
  );
}
