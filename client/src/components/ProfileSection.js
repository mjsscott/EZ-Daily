import ProfileInfo from "./ProfileInfo";
import SignOutButton from "./SignoutButton";
import './ProfileSection.css';

const ProfileSection = ({ user, onSignOut }) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-pic">
          <img src={user.profilePic} alt="Profile" />
        </div>
        <ProfileInfo user={user} />
      </div>
      <SignOutButton onSignOut={onSignOut} />
    </div>
  );
};

export default ProfileSection;