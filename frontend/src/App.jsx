import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

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
import ProtectedRoute from "./components/ProtectedRoute"; // <-- Import protected wrapper

import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />

        {/* Protected Routes */}
        <Route
          path="/contact"
          element={
            <ProtectedRoute user={user}>
              <ContactForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/books"
          element={
            <ProtectedRoute user={user}>
              <BookPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/footer"
          element={
            <ProtectedRoute user={user}>
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sidebar"
          element={
            <ProtectedRoute user={user}>
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute user={user}>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/library"
          element={
            <ProtectedRoute user={user}>
              <InputDesign />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addbooks"
          element={
            <ProtectedRoute user={user}>
              <AddBooksAntD />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
