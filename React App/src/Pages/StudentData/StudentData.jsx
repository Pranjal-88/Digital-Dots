import React, { useState } from 'react';
import './StudentData.css';

const StudentData = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [students] = useState([
    { id: 1, name: 'Alice Johnson', college: 'University A', phone: '123-456-7890', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', college: 'University B', phone: '987-654-3210', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', college: 'University C', phone: '555-555-5555', email: 'charlie@example.com' }
  ]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="student-data">
      <h1>Student Data</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </div>
      <table className="student-table">
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
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.college}</td>
              <td>{student.phone}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentData;
