import React, { useState } from 'react';
import './student.css';
import { STUDENTS } from '../../data/students';

const Student = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data] = useState(STUDENTS);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard">
      <h1>Enrolled Students</h1>
      <div class="container">
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-bar"
      />
      </div>
      <table className="university-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Attandence(%)</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>{item.contact}</td>
              <td>{item.email}</td>
              <td>{item.perc}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
