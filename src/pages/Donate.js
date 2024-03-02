// Donate.js

import React from 'react';
import './Donate.css';

const Donate = () => {
  const upiId = 'your-upi-id@upi';

  const handleDonateMoney = () => {
    window.location.href = `upi://${upiId}`;
  };

  const handleSponsorMeal = () => {
    window.location.href = `upi://${upiId}`;
  };

  return (
    <div className="Donate">
      <h2>Help Animals</h2>    
    <div className="donate-container">
      <div className="card">
        <h2>Donate Money</h2>
        <p>Click the button below to donate money to support our cause.</p>
        <button onClick={handleDonateMoney}>Donate</button>
      </div>
      <div className="card">
        <h2>Sponsor  Meal</h2>
        <p>Click the button below to sponsor a meal for animals in need.</p>
        <button onClick={handleSponsorMeal}>Sponsor</button>
      </div>
    </div>
    </div>
  );
};

export default Donate;
