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
import InputDesigns from "./Pages/adminLibrary";
import BookForm from "./Pages/addBooks";
import ProtectedRoute from "./components/ProtectedRoute"; // <-- Import protected wrapper
import IssuedBooks from "./Pages/IssuedBooks";
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
              <BookForm />
            </ProtectedRoute>
          }
        />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/library" element={<InputDesign />} />
        <Route path="/addbooks" element={<AddBooksAntD />} />
        <Route path="/issuedbooks" element={<IssuedBooks />} />

        <Route path="/addbooks" element={<BookForm />} />
        <Route path="/adminlibrary" element={<InputDesigns />} />
        
      </Routes>
    </Router>
  );
};

export default App;
