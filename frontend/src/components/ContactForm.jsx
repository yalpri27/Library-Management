import background from "../assets/back.png"; // Adjust the path if needed
import Sidebar from "./sidebar"; // Import Sidebar component
import Footer from "./Footer";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import { db } from "../../firebase.js"; // Import the db from firebase.js

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        name: name,
        email: email,
        message: message,
        timestamp: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
      }}
    >
      <div
        style={{
          height: "150vh",
          width: "170px",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "rgba(194, 232, 242, 0.7)",
          boxShadow: "2px 0 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Sidebar />
      </div>
      <div
        style={{
          flex: 1,
          marginLeft: "170px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#1a1a1a",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Contact-Us
          </h1>
          <p
            style={{ color: "#555", marginBottom: "20px", textAlign: "center" }}
          >
            Our attendants are prepared to help you!
          </p>
          <form
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              width: "350px",
            }}
          >
            <label
              style={{ fontSize: "14px", color: "#555", fontWeight: "bold" }}
            >
              Name
            </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Enter your name"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontWeight: "bold",
                backgroundColor: "#f9f9f9",
              }}
            />

            <label
              style={{ fontSize: "14px", color: "#555", fontWeight: "bold" }}
            >
              E-mail
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontWeight: "bold",
                backgroundColor: "#f9f9f9",
              }}
            />

            <label
              style={{ fontSize: "14px", color: "#555", fontWeight: "bold" }}
            >
              Comment / Question
            </label>
            <textarea
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                height: "80px",
                fontWeight: "bold",
                backgroundColor: "#f9f9f9",
              }}
            ></textarea>

            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault(); // Prevent the default form submission
                handleSubmit().then(() => {
                  setEmail("");
                  setName("");
                  setMessage("");
                });
              }}
              style={{
                backgroundColor: "#36b5d8",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
                fontWeight: "bold",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#2a92a8")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#36b5d8")}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;   