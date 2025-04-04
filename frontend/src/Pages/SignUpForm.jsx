"use client";
import * as React from "react";
import "./SignUpForm.css";
import Footer from "../components/Footer";

function FormInput({ label, type, placeholder, required }) {
  return React.createElement(
    "div",
    { className: "input-wrapper" },
    React.createElement("label", { className: "label" }, label),
    React.createElement("input", {
      type,
      placeholder,
      className: "input",
      required: true
    }),
  );
}

function RoleSelect() {
  return React.createElement(
    "div",
    { className: "select-wrapper" },
    React.createElement("label", { className: "label" }, "Select Role"),
    React.createElement(
      "div",
      { className: "select-container" },
      React.createElement(
        "select",
        {
          defaultValue: "User",
          className: "select",
        },
        React.createElement("option", { value: "User" }, "User"),
        React.createElement("option", { value: "Admin" }, "Admin"),
      ),
      React.createElement(
        "svg",
        {
          width: "8",
          height: "7",
          viewBox: "0 0 8 7",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "dropdown-arrow",
        },
        React.createElement("path", {
          d: "M0 0.359863H8L4 6.35986L0 0.359863Z",
          fill: "#8A8A8A",
        }),
      ),
    ),
  );
}

function CountrySelect() {
  return React.createElement(
    "div",
    { className: "select-wrapper" },
    React.createElement("label", { className: "label" }, "Place/Country"),
    React.createElement(
      "div",
      { className: "select-container" },
      React.createElement(
        "select",
        {
          defaultValue: "India",
          className: "select",
        },
        React.createElement("option", { value: "India" }, "India"),
      ),
      React.createElement(
        "svg",
        {
          width: "8",
          height: "7",
          viewBox: "0 0 8 7",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "dropdown-arrow",
        },
        React.createElement("path", {
          d: "M0 0.359863H8L4 6.35986L0 0.359863Z",
          fill: "#8A8A8A",
        }),
      ),
    ),
  );
}

function ContactButton() {
  return React.createElement(
    "button",
    {
      className: "contact-button",
    },
    "Contact-Us",
  );
}

function SignUpForm() {
  return React.createElement(
    "main",
    { className: "main-container" },
    [
      React.createElement(
        "div",
        { className: "contact-button-wrapper" },
        React.createElement(ContactButton),
      ),
      React.createElement(
        "section",
        { className: "content-section" },
        React.createElement(
          "header",
          { className: "header" },
          React.createElement(
            "h1",
            { className: "title" },
            "Sign Up with Archive !",
          ),
          React.createElement(
            "p",
            { className: "subtitle" },
            "Your library catalog is available anywhere, anytime.",
          ),
        ),
        React.createElement(
          "div",
          { className: "form-container" },
          React.createElement(
            "form",
            { className: "form-content" },
            React.createElement(
              "h2",
              { className: "form-title" },
              "Account Information:",
            ),
            React.createElement(
              "div",
              { className: "input-grid" },
              React.createElement(FormInput, {
                label: "First Name",
                type: "text",
                placeholder: "First Name",
              }),
              React.createElement(FormInput, {
                label: "Last Name",
                type: "text",
                placeholder: "Last name",
              }),
              React.createElement(FormInput, {
                label: "E-mail",
                type: "email",
                placeholder: "E-mail",
              }),
              React.createElement(FormInput, {
                label: "Password",
                type: "password",
                placeholder: "Password",
              }),
              React.createElement(RoleSelect),
              React.createElement(CountrySelect),
            ),
            React.createElement(
              "div",
              { className: "submit-section" },
              React.createElement(
                "button",
                {
                  type: "submit",
                  className: "submit-button",
                },
                "Start My Library",
              ),
            ),
          ),
        ),
      ),
      React.createElement(Footer)
    ]
  );
}

export default SignUpForm;
