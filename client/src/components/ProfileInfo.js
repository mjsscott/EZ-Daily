import React from 'react';

const ProfileInfo = ({ user }) => {
  return (
    <div className="profile-info">
      <h2>{user.username}</h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default ProfileInfo;