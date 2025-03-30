import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookPage from "./Pages/BookPage";
import UserProfile from "./Pages/UserProfile";


const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar">
          <h2>📚 Library System</h2>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<BookPage />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
