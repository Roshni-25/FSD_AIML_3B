
import React, { useState } from "react";
import "./App.css";

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please fill all fields!");
    }
    else if (password.length < 6) {
      setMessage("Password must be at least 6 characters!");
    }
    else {
      setMessage("Login form submitted successfully!");
    }
  };

  return (
    <div className="container">

      <div className="login-card">

        <div className="login-icon">🔐</div>

        <h1>Welcome Back!</h1>
        <p className="subtitle">
          Please login to your account
        </p>

        <form onSubmit={handleLogin}>

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <span onClick={() =>
              setShowPassword(!showPassword)
            }>
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <div className="options">

            <label className="remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember Me
            </label>

            <a href="#forgot">Forgot Password?</a>

          </div>

          <button type="submit">
            Login
          </button>

          <p className="message">{message}</p>

        </form>

        <p className="signup">
          Don't have an account?
          <a href="#signup"> Sign Up</a>
        </p>

      </div>

    </div>
  );
}

export default App;
