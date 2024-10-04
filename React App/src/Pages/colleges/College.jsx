import React, { useState } from 'react';
import './college.css';
import { college } from '../../data/colleges';

const College = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data] = useState(college);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleStatusClick = (status) => {
    if (status !== 'Connected' && status !== 'Not Started') {
      alert(`Status:'Follow Up email has been send to the university'`);
    }
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard">
      <h1>Colleges Data</h1>
      <div className="container">
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
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                {item.status === 'Connected' || item.status === 'Not Started' ? (
                  <span>{item.status}</span>
                ) : (
                  <span 
                    onClick={() => handleStatusClick(item.status)}
                    style={{ cursor: 'pointer' }}
                    className="status-link"
                  >
                    {item.status}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default College;
