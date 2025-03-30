import React from "react";
import "./BookPage.css";

const BookPage = () => {
  return (
    <div className="book-page">
      {/* Sidebar with Book Cover */}
      <div className="sidebar">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg"
          alt="Atomic Habits"
          className="book-cover"
        />
        <div className="book-rating">⭐ 4.8/5</div>
      </div>

      {/* Main Book Details */}
      <div className="book-content">
        <h1>Atomic Habits</h1>
        <h3>James Clear</h3>
        <p className="book-description">
          Transform your life with small, daily changes. *Atomic Habits* explores how tiny adjustments can 
          lead to remarkable results through the science of habit formation.
        </p>
        <p className="book-meta">📖 Self-help | 📅 2018</p>

        {/* Buttons */}
        <div className="book-buttons">
          <button className="issue-btn">📚 Issue Now</button>
          <button className="explore-btn">🔍 Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
