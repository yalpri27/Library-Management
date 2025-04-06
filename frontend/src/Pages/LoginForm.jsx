"use client";
import * as React from "react";
import "./login.css";
import Footer from "../components/Footer";

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

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
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
              rightContent={<button className="forgot-button">Forgot ?</button>}
            />

            <CheckboxField
              label="Remember me"
              checked={rememberMe}
              onChange={setRememberMe}
            />

            <LoginButton onClick={handleSubmit} />
          </header>

          <p className="signup-text">
            Don't have an account?{" "}
            <a href="#" className="signup-link">
              Sign Up!
            </a>
          </p>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default LoginForm;
