import { useState, useEffect } from 'react';
import OfferCard from "./OfferCard";

const ProfileOffers = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch('http://localhost:5000/offers');
        if (!response.ok) {
          throw new Error('Network response error...');
        }
        const data = await response.json();
        setOffers(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching offers', err)
        setLoading(false)
      }
    };
    fetchOffers();
  }, []);

  if (loading) { 
    return <div>Loading...</div>
  }

  return (
    <div className="offers-container">
      <h3>Current Offers</h3>
      {offers.length === 0 ? (
        <p>No offers available.</p>  // Show message if no offers are available
      ) : (
        offers.map((offer, index) => (
          <OfferCard key={index} offer={offer} />
        ))
      )}
    </div>
  );
};

export default ProfileOffers;
