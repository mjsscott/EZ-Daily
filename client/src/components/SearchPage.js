import { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import SearchResults from './SearchResults';
import 'react-datepicker/dist/react-datepicker.css';
import './SearchPage.css';


const roles = [
  {value:"admin", label:"Admin"},
  {value:"buyer", label:"Buyer"},
  {value:"design", label:"Design"},
  {value:"set", label:"Set"}
]

const locations = [
  {value:"london", label:"London"},
  {value:"manchester", label:"Manchester"},
  {value:"birmingham", label:"Birmingham"},
  {value:"liverpool", label:"Liverpool"}
]

function SearchPage() {
  const[selectedRole, setSelectedRole] = useState(null);
  const[selectedLocation, setSelectedLocation] = useState(null);
  const handleChange = (selectedRole) => {setSelectedRole(selectedRole)};
  const handleLocationChange = (selectedLocation) => {setSelectedLocation(selectedLocation)};
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [results, setResults] = useState([]);

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      width: '100%',
      minHeight: '40px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      padding: '0 8px',
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '2px 8px',
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: '16px',
    })
  };

  //ADD LOCATION QUERY BACK AFTER UPDATING DATABASE WITH LOCATIONS!!
  const handleSearch = async () => {
    const roleQuery = selectedRole  ? `role=${selectedRole.value}` : '';
    const locationQuery = selectedLocation  ? `role=${selectedLocation.value}` : '';
    const startDateQuery = startDate ? `startDate=${startDate.toISOString()}` : '0';
    const endDateQuery = endDate ? `endDate=${endDate.toISOString()}` : '0';
    const query = [roleQuery, startDateQuery, endDateQuery].filter(Boolean).join('&');
    const response = await fetch(`http://localhost:5000/dailies/search?${query}`);
    const contentType = response.headers.get('Content-Type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error('Response is not JSON:', contentType);
      return; // Stop further processing if response is not JSON
    }
    const data = await response.json();
    setResults(data);
  }

  return (
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

    <div className='search'>
      <div className='search-inputs'>
        <Select 
        options={roles} 
        value={selectedRole} 
        onChange={handleChange} 
        styles={customSelectStyles}
        />
        <Select 
        options={locations} 
        value={selectedLocation} 
        onChange={handleLocationChange} 
        styles={customSelectStyles}
        />
        <DatePicker 
        selected={startDate} 
        onChange={(startDate) => setStartDate(startDate)} 
        className="custom-datepicker"
        dateFormat="MM/dd/yyyy"
        />
        <DatePicker 
        selected={endDate} 
        onChange={(endDate) => setEndDate(endDate)} 
        className="custom-datepicker"
        dateFormat="MM/dd/yyyy"
        />
      </div>
      <button className='search-button' onClick={handleSearch}>Search</button>
    </div>
      <SearchResults
        className="search-results"
        results={results}
        selectedRole={selectedRole}
        selectedLocation={selectedLocation}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  )
}

export default SearchPage;