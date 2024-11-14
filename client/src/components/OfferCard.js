import './OfferCard.css';

const OfferCard = ({ offer }) => {
  const { dailyName, location, role, startDate, endDate, status } = offer;

  const capitalizeWords = (str) => {
    return str
      .split(' ')  // Split string by spaces
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize first letter of each word
      .join(' ');  // Join the words back together with a space
  };
  

  return (
    <div className="offer-card">
      <div className="offer-header">
        <h4>{capitalizeWords(dailyName)}</h4>
        <span className={`status ${status.toLowerCase()}`}>{status}</span>
      </div>
      <div className="offer-details">
        <div><strong>Location:</strong> {capitalizeWords(location)}</div>
        <div><strong>Role:</strong> {capitalizeWords(role)}</div>
        <div><strong>Start Date:</strong> {new Date(startDate).toLocaleDateString()}</div>
        <div><strong>End Date:</strong> {new Date(endDate).toLocaleDateString()}</div>
      </div>
    </div>
  );
};

export default OfferCard;