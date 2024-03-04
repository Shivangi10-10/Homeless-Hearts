import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VolunteerDashboard.css';

const VolunteerDashboard = () => {
  const navigate = useNavigate();

  const handleTaskListClick = () => {
    navigate('/Todo');
  };

  return (
    <div className="dashboard-container" style={{fontFamily: 'amatic sc'}}>
      <div className="right-panel">
        <div className="top-panel">
          <button className="task-list-btn" onClick={handleTaskListClick}  style={{fontFamily: 'amatic sc'}}>Task List</button>
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
          <div className="dashboard-card" onClick={() => navigate('/Vet')}>
            <h3>Alerts Check</h3>
            <p>Description of Alerts Check</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
