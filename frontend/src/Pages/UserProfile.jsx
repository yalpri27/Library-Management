import React from "react";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="profile-container">
      {/* Profile Banner */}
      <div className="profile-banner">
        <img
          src="https://i.pravatar.cc/150?img=3" // Placeholder profile picture
          alt="User Profile"
          className="profile-image"
        />
        <h2 className="user-name">Rudra Bhaiya</h2>
        <p className="user-role">Student</p>
      </div>

      {/* Profile Details Section */}
      <div className="profile-details">
        <div className="detail-card">
          <h3>Email</h3>
          <p>rudra123@gmail.com</p>
        </div>

        <div className="detail-card">
          <h3>Member Since</h3>
          <p>1890</p>
        </div>

        <div className="detail-card">
          <h3>Books Issued</h3>
          <p>None</p>
        </div>

        <div className="detail-card">
          <h3>Favorite Genre</h3>
          <p>Self help</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="profile-buttons">
        <button className="edit-btn">✏️ Edit Profile</button>
        <button className="logout-btn">🚪 Logout</button>
      </div>
    </div>
  );
};

export default UserProfile;
