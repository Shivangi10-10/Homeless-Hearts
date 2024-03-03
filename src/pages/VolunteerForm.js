// VolunteerDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './VolunteerDashboard.css';

const VolunteerDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleTaskListClick = () => {
    navigate('/Todo'); // Navigate to the Todo component when the button is clicked
  };

  return (
    <div className="dashboard-container">
      <div className="right-panel">
        <div className="top-panel">
          {/* Call handleTaskListClick when the button is clicked */}
          <button className="task-list-btn" onClick={handleTaskListClick}>Task List</button>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          {/* Add search icon here if needed */}
        </div>
        <div className="dashboard-options">
          <div className="dashboard-card" onClick={() => navigate('/VetVisit')}>
            <h3>Vet Visit</h3>
            <p>Description of Vet Visit</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate('/Food')}>
            <h3>Food Collection & Distribution</h3>
            <p>Description of Food Collection & Distribution</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate('/AlertsCheck')}>
            <h3>Alerts Check</h3>
            <p>Description of Alerts Check</p>
          </div>
          {/* Add more dashboard options/icons here */}
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
