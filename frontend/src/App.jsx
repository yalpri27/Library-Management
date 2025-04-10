import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from "./Pages/SignUpForm";
import LoginForm from "./Pages/LoginForm";
import BookPage from "./Pages/BookPage";
import ProfilePage from "./pages/Profile";
import Footer from "./components/Footer";
import Sidebar from "./components/sidebar";
import ContactForm from "./components/ContactForm";
import LandingPage from "./Pages/LandinPage";
import Wishlist from "./components/Wishlist";
import InputDesign from "./Pages/Library";
import AddBooksAntD from "./Pages/addBooks";
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
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/library" element={<InputDesign />} />
        <Route path="/addbooks" element={<AddBooksAntD />} />
        
      </Routes>
    </Router>
  );
};

export default App;