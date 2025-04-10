import React, { useState } from "react";
import "./login.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom"; // ✅ For navigation

import {
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { auth, provider } from "../../firebase"; // ✅ Your firebase.js

const InputField = ({
  type = "text",
  placeholder,
  rightContent,
  value,
  onChange,
}) => {
  return (
    <div className="input-container">
      <div className="input-wrapper">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="input-field"
        />
        {rightContent && (
          <div className="input-right-content">{rightContent}</div>
        )}
      </div>
    </div>
  );
};

const CheckboxField = ({ label, checked, onChange }) => {
  return (
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="checkbox-input"
        />
        <span className="checkbox-text">{label}</span>
      </label>
    </div>
  );
};

const LoginButton = ({ onClick }) => {
  return (
    <div className="button-container">
      <button onClick={onClick} className="login-button">
        Login
      </button>
    </div>
  );
};

const GoogleButton = ({ onClick }) => {
  return (
    <div className="button-container">
      <button onClick={onClick} className="google-button">
        Sign in with Google
      </button>
    </div>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate(); // ✅ React Router navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Logged in:", user.email);
      alert(`Welcome, ${user.email}`);
      navigate("/library"); // ✅ Redirect to /library
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Login failed: " + error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google login successful:", user.displayName);
      alert(`Signed in with Google: ${user.displayName}`);
      navigate("/library"); // ✅ Redirect to /library
    } catch (error) {
      console.error("Google login error:", error.message);
      alert("Google login failed: " + error.message);
    }
  };

  return (
    <div className="login-footer">
      <div className="login-page-container">
        <form onSubmit={handleSubmit} className="login-form">
          <header className="form-header">
            <h1 className="login-title">
              <span className="login-title-text">Login</span>
            </h1>

            <InputField
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={setEmail}
            />

            <InputField
              type="password"
              placeholder="Password"
              value={password}
              onChange={setPassword}
              rightContent={<button className="forgot-button">Forgot?</button>}
            />

            <CheckboxField
              label="Remember me"
              checked={rememberMe}
              onChange={setRememberMe}
            />

            <LoginButton onClick={handleSubmit} />

            <GoogleButton onClick={handleGoogleLogin} />
          </header>

          <p className="signup-text">
            Don't have an account?{" "}
            <a href="signup" className="signup-link">
              Sign Up!
            </a>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
