import { useState } from 'react';
import JobCard from './JobCard';

const ProfileJobs = () => {
  const [jobs] = useState([
    {
      filmTitle: 'Bongo Horse 6',
      location: 'London',
      role: 'Design',
      startDate: '2024-12-01',
      endDate: '2024-12-15',
    },
    {
      filmTitle: 'The Matrix Rererebooted',
      location: 'Manchester',
      role: 'Set',
      startDate: '2024-11-20',
      endDate: '2024-12-05',
    },
    {
      filmTitle: 'Titanic III',
      location: 'London',
      role: 'Buyer',
      startDate: '2024-12-10',
      endDate: '2024-12-20',
    }
  ]);
  return (
    <div className="jobs-container">
      <h3>Current Jobs</h3>
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default ProfileJobs;