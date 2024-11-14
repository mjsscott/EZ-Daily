import { useState } from 'react';
import ProfileSection from './ProfileSection';
import ProfileJobs from './ProfileJobs';
import ProfileOffers from './ProfileOffers';
import './ProfilePage.css'

function ProfilePage() {
  const [user, setUser] = useState({
    profilePic: '/images/GOOSE.jpg', // You'd fetch this from a database or API
    username: 'mjsscott',
    name: 'Mikey Gillespie',
    email: 'Mikey@Gillespie.com',
  });

  const handleSignOut = () => {
    // Clear the user session or token, then redirect
    console.log('User signed out');
    setUser(null);  // Optionally reset the user state or redirect
  };

  return (
  <div>
    <div className="home-container">
    <div className="navbar">

      <div className="navbar-left">
        <span className="app-name">EZ-Daily</span>
      </div>


      <div className="navbar-center">
        <a href="/profile" className="nav-link">Profile</a>
        <a href="/" className="nav-link">Jobs</a>
        <a href="/search" className="nav-link">Search</a>
        <a href="/" className="nav-link">Signout</a>
      </div>

      <div className="navbar-right">
      <a href="/" className="nav-link">Are you a daily?</a>
      </div>
    </div>

    <div className="info-container">
      <div className="profile">
      {user ? (
        <ProfileSection user={user} onSignOut={handleSignOut} />
      ) : (
        <p>Please log in</p>
      )}
      </div>
      <div className="jobs-offers">
        <div className="offers">
          <ProfileOffers/>
        </div>
        <div className="jobs">
          <ProfileJobs/>
        </div>
      </div>
    </div>

    </div>  
  </div>  
  )
}

export default ProfilePage;