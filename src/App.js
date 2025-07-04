 import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Mobile Logo */}
 <div className="mobile-logo">
  <a href="/">
    <img
      src="https://simplify.jobs/favicon.svg"
      alt="Simplify Jobs Logo"
      width="132"
      height="32"
      loading="eager"
      style={{ objectFit: "contain" }}
    />
  </a>
</div>


      <form className="login-form">
        <h2 className="heading">Apply to jobs in 1-click.</h2>
        <p className="subheading">
          Power your entire job search, with our recruiter-approved AI.
        </p>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Email Address" autoComplete="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            autoComplete="current-password"
          />
        </div>

        <div className="options">
          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember this device</label>
          </div>
          <a href="/auth/forgot">Forgot your password?</a>
        </div>

        <button type="submit" className="login-btn">
          Sign In
        </button>

        <p className="register">
          Don't have an account? <a href="/auth/register">Register</a>
        </p>

        <div className="divider">Or log in with</div>

        <div className="social-buttons">
          {/* Google Button */}
          <button className="social-btn">
            <img
  src="https://developers.google.com/identity/images/g-logo.png"
  alt="Google Logo"
  className="icon"
  width="20"
  height="20"
/>

            Continue with Google
          </button>

          {/* LinkedIn Button */}
          <button className="social-btn">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn Logo"
              className="icon"
              width="20"
              height="20"
            />
            Continue with LinkedIn
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
