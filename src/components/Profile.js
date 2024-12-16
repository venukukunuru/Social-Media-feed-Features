import React from "react";

function Profile() {
  return (
    <div>
      <h2>Your Profile</h2>
      <div className="profile-info">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="profile-image-large"
        />
        <p>
          <strong>Name:</strong> John Doe
        </p>
        <p>
          <strong>Email:</strong> johndoe@example.com
        </p>
        <p>
          <strong>Bio:</strong> This is a sample user bio.
        </p>
      </div>
    </div>
  );
}

export default Profile;
