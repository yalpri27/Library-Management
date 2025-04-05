import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import LoginForm from "./pages/LoginForm";
import BookPage from "./Pages/BookPage";
import ProfilePage from "./pages/Profile";
import Footer from "./components/Footer";
import Sidebar from "./components/sidebar";
import ContactForm from "./components/ContactForm";
import LandingPage from "./Pages/LandinPage";
 // Profile Page

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/" element={<LandingPage />} />
        
      </Routes>
    </Router>
  );
};

export default App;