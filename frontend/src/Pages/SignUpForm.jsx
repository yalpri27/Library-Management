"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpForm.css";
import Footer from "../components/Footer";

function FormInput({ label, type, placeholder, required }) {
  return (
    <div className="input-wrapper">
      <label className="label">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="input"
        required={required}
      />
    </div>
  );
}

function RoleSelect() {
  return (
    <div className="select-wrapper">
      <label className="label">Select Role</label>
      <div className="select-container">
        <select defaultValue="User" className="select">
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <svg
          width="8"
          height="7"
          viewBox="0 0 8 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="dropdown-arrow"
        >
          <path d="M0 0.359863H8L4 6.35986L0 0.359863Z" fill="#8A8A8A" />
        </svg>
      </div>
    </div>
  );
}

function CountrySelect() {
  return (
    <div className="select-wrapper">
      <label className="label">Place/Country</label>
      <div className="select-container">
        <select defaultValue="India" className="select">
          <option value="India">India</option>
        </select>
        <svg
          width="8"
          height="7"
          viewBox="0 0 8 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="dropdown-arrow"
        >
          <path d="M0 0.359863H8L4 6.35986L0 0.359863Z" fill="#8A8A8A" />
        </svg>
      </div>
    </div>
  );
}

function ContactButton({ onClick }) {
  return (
    <button className="contact-button" onClick={onClick}>
      Contact-Us
    </button>
  );
}

function SignUpForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement actual signup logic here
    console.log("Signup submitted");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <main className="main-container">
      <div className="contact-button-wrapper">
        <ContactButton onClick={handleContactClick} />
      </div>

      <section className="content-section">
        <header className="header">
          <h1 className="title">Sign Up with Archive !</h1>
          <p className="subtitle">Your library catalog is available anywhere, anytime.</p>
        </header>

        <div className="form-container">
          <form className="form-content" onSubmit={handleSubmit}>
            <h2 className="form-title">Account Information:</h2>

            <div className="input-grid">
              <FormInput label="First Name" type="text" placeholder="First Name" required />
              <FormInput label="Last Name" type="text" placeholder="Last Name" required />
              <FormInput label="E-mail" type="email" placeholder="E-mail" required />
              <FormInput label="Password" type="password" placeholder="Password" required />
              <RoleSelect />
              <CountrySelect />
            </div>

            <div className="submit-section">
              <button type="submit" className="submit-button">
                Start My Library
              </button>
              <p className="login-redirect">
                Already have an account?{" "}
                <span className="login-link" onClick={handleLoginRedirect}>
                  Log in
                </span>
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default SignUpForm;
