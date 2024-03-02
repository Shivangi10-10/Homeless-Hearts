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
    <div className='amatic-sc-regular'>
      <div className="donate">
        <div className='donate-header'>
          <h2>A small click...A big difference</h2>
          </div>
        
        <div className="donate-container">

          <div className="card">
            <h2>Donate Food</h2>
            <button onClick={handleDonateMoney}>Donate</button>
          </div>

          <div className="card">
            <h2>Donate Money</h2>
            <button onClick={handleSponsorMeal}>Sponsor</button>
          </div>

          <div className="card">
            <h2>Donate Necessities</h2>
            <button onClick={handleSponsorMeal}>Sponsor</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Donate;
