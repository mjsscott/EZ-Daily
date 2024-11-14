import { useState } from 'react';
import DailyCard from "./DailyCard";
import DailyModal from "./DailyModal";
import PdfIframeViewer from './PdfIframeViewer';



function SearchResults({ results, selectedRole, selectedLocation, startDate, endDate }) {
  const [selectedDaily, setSelectedDaily] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (daily) => {
    setSelectedDaily(daily);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedDaily(null);
  };

  const handleOfferClick = async () => {
    if (!selectedDaily) return;

    const offerData = {
      dailyName: selectedDaily.name,
      location: selectedLocation.value,  // Assuming `location` exists in `selectedDaily`
      role: selectedRole.value,         // Using `selectedRole` passed from props
      startDate: startDate.toISOString(), // Start date from search
      endDate: endDate.toISOString(),    // End date from search
      offerDate: new Date().toISOString(),  // The current date (when offer is made)
      status: 'PENDING',  // Default status for the new offer
    };

    try {
      const response = await fetch('http://localhost:5000/offers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(offerData),
      });
      if (!response.ok) {
        throw new Error('Failed to create offer');
      }
      alert(`Offer successfully sent to ${selectedDaily.name}`);
      closeModal();
    } catch (err) {
      console.error('Error: ', err);
      alert('There was an error sending the offer please try again.')
    }
  }

  if (results.length === 0) { 
    return <h2 style={{textAlign: 'center', color: '#003049' }}>
      No results found...
      </h2>
  }

  return (
    <div className="search-results">
      <div>
        {results.map((result) => (
          <div key={result.id} onClick={() => openModal(result)}>
            <DailyCard result={result} />
          </div>
        ))}
      </div>
      
      <DailyModal isOpen={isModalOpen} onClose={closeModal}>
        {selectedDaily && (
          <div>
            <h2>{selectedDaily.name}</h2>
              {selectedDaily.imdbLink && (
              <p>
                <strong>IMDB:</strong>{' '}
                <a href={selectedDaily.imdbLink} target="_blank" rel="noopener noreferrer">
                  {selectedDaily.imdbLink}
                </a>
              </p>
            )} {selectedDaily.cv && (
                <PdfIframeViewer pdfUrl={selectedDaily.cv} />
            )}
            <div className='button container'>
            <button onClick={() => {
              handleOfferClick();
              alert(`Offer sent to ${selectedDaily.name}`);
              closeModal();
            }}
            className='offer-daily-button'
            >
              Offer Daily
            </button>
            </div>
          </div>
        )}
      </DailyModal>
    </div>
  );
}

export default SearchResults;
