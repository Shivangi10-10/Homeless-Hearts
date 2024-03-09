import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './VolunteerForm.css';
import axios from 'axios';

const VolunteerForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [dayPreference, setDayPreference] = useState()
  const [availability, setAvailability] = useState()
  const [jobPreferences, setJobPreferences] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/Volunteer', { name, email, password, phoneNumber, dayPreference, availability, jobPreferences })
      .then(result =>{ console.log(result)
      navigate("/LoginForm")
      })
      .catch(err => console.log(err))
  };
  

  return (
    <div className="volunteer-form-container">
      <h2 className="form-title">Volunteer Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} pattern="[A-Za-z\s]+" title="Only alphabets are allowed" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" name="phoneNumber" id="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} pattern="^\d{10}$" title="Enter a valid  10 digit phone number" required />
        </div>
        <div className="form-group">
          <label htmlFor="dayPreference">Day's Preference</label>
          <div className="checkbox-group">
            <input type="checkbox" name="dayPreference" value="weekdays" onChange={(e) => setDayPreference(e.target.value)}/> Weekdays
            <input type="checkbox" name="dayPreference" value="weekends"  onChange={(e) => setDayPreference(e.target.value)}/> Weekends
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="avalaibility">Availability</label>
          <div className="checkbox-group">
            <input type="checkbox" name="availability" value="morning" onChange={(e) => setAvailability(e.target.value)}/> Morning
            <input type="checkbox" name="availability" value="afternoon" onChange={(e) => setAvailability(e.target.value)} /> Afternoon
            <input type="checkbox" name="availability" value="evening" onChange={(e) => setAvailability(e.target.value)}/> Evening
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="jobPreferences">Job Preferences</label>
          <div className="checkbox-group">
            <input type="checkbox" name="jobPreferences" value="collectingFood" onChange={(e) => setJobPreferences(e.target.value)} /> Collecting Food
            <input type="checkbox" name="jobPreferences" value="distributingFood" onChange={(e) => setJobPreferences(e.target.value)}/> Distributing Food
            <input type="checkbox" name="jobPreferences" value="vetVisit" onChange={(e) => setJobPreferences(e.target.value)}/> Vet Visit
          </div>
        </div>
        <button type="submit">Register</button>
        </form>
        <p className="login">Already have an Account?</p>
       <a href="/LoginForm"><button >Login</button></a>
    </div>
  );
};

export default VolunteerForm;
