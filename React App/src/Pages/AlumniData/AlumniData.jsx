import React, { useState } from 'react';
import './AlumniData.css';

const AlumniData = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [alumni] = useState([
    { id: 1, name: 'David Wright', college: 'University A', phone: '123-456-7890', email: 'david@example.com' },
    { id: 2, name: 'Eva Green', college: 'University B', phone: '987-654-3210', email: 'eva@example.com' },
    { id: 3, name: 'Frank White', college: 'University C', phone: '555-555-5555', email: 'frank@example.com' }
  ]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredAlumni = alumni.filter((alumnus) =>
    alumnus.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="alumni-data">
      <h1>Alumni Data</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </div>
      <table className="alumni-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>College</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredAlumni.map((alumnus) => (
            <tr key={alumnus.id}>
              <td>{alumnus.id}</td>
              <td>{alumnus.name}</td>
              <td>{alumnus.college}</td>
              <td>{alumnus.phone}</td>
              <td>{alumnus.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlumniData;
