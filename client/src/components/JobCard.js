import { useNavigate } from 'react-router-dom';
import './JobCard.css';


const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const { filmTitle, location, role, startDate, endDate} = job;

  const handleViewJob = () => {
    navigate(`/jobs`)
  }

  return (
    <div className="job-card">
      <div className="job-header">
        <h4>{filmTitle}</h4>
        <button className="view-button" onClick={handleViewJob}>View</button>
      </div>
      <div className="job-details">
        <div><strong>Location:</strong> {location}</div>
        <div><strong>Role:</strong> {role}</div>
        <div><strong>Start Date:</strong> {new Date(startDate).toLocaleDateString()}</div>
        <div><strong>End Date:</strong> {new Date(endDate).toLocaleDateString()}</div>
      </div>
    </div>
  );
};

export default JobCard;
