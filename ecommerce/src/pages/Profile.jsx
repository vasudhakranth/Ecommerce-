import React, { useState } from "react";
import "../styles/Profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Vasudha Kranthi",
    email: "vasudha@example.com",
    phone: "9876543210",
    address: "Hyderabad, India",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile Updated Successfully!");
  };

  const handleLogout = () => {
    alert("Logged Out!");
    // You can add navigation logic here
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
          className="profile-image"
        />

        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
            />
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address}</p>

            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
