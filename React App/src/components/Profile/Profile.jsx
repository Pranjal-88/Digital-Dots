import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Profile.css';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const Profile = () => {
  const data = {
    labels: ['DSA', 'Frontend', 'Backend'],
    datasets: [
      {
        label: 'Progress',
        data: [30, 50, 20], // temporary data
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="profile">
      <h1 className="profile-name">sumith</h1>
      <p className="profile-attendance">Attendance: 85%</p>
      <div className="profile-chart">
        <h2>Progress</h2>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default Profile;
