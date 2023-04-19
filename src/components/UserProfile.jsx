import React from 'react';


const UserProfile = ({ user }) => {
  return (
    <div className="profile">
      <div className="avatar">
        <img src={user.avatarUrl} alt={`${user.name}'s avatar`} />
      </div>
      <div className="info">
        <h1>{user.name}</h1>
        <p>{user.bio}</p>
        <ul>
          <li><strong>Username:</strong> {user.username}</li>
          <li><strong>Email:</strong> {user.email}</li>
          <li><strong>Location:</strong> {user.location}</li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
