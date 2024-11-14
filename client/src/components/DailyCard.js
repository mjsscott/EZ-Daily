import './DailyCard.css';

function DailyCard( { result } ) {
  const roles = result.roles.join(', ');


  return( 
    <div className='card-container'>
      <div className='card-info'>
        <h2>{result.name}</h2>
        <p><strong>Roles: </strong>{roles}</p>
        <p><strong>Location: </strong>{result.location}</p>
        {result.imdbLink && (
          <p>
            <strong>IMDB:</strong>{' '}
            <a href={result.imdbLink} target="_blank" rel="noopener noreferrer">
              {result.imdbLink}
            </a>
          </p>
        )}
      </div>
    </div>
  )
}

export default DailyCard;