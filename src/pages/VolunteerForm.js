import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './VolunteerForm.css';
import LoginForm from './LoginForm';

const VolunteerForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [form, setForm] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    availability: [],
    jobPreferences: [],
  });

  const handleForm = (e) => {
    console.log(e.target.value,e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       const response = await fetch('http://localhost:8080/form', {
         method: 'POST',
         body: JSON.stringify(form),
         headers: {
           'Content-Type': 'application/json',
         },
       });
       const data = await response.json();
       navigate('/LoginForm');
    } catch (error) {
       console.error('Fetch error:', error);
    }
   };
   

  return (
    <div className="volunteer-form-container">
      <h2 className="form-title">Volunteer Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={form.name} onChange={handleForm} pattern="[A-Za-z\s]+" title="Only alphabets are allowed" required />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" value={form.username} onChange={handleForm} pattern="[A-Za-z\s]+" title="Only alphabets are allowed" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={form.password} onChange={handleForm} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" name="phoneNumber" id="phoneNumber" value={form.phoneNumber} onChange={handleForm} pattern="^\d{10}$" title="Enter a valid  10 digit phone number" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={form.email} onChange={handleForm} />
        </div>
        <div className="form-group">
          <label>Availability</label>
          <div className="checkbox-group">
            <input type="checkbox" name="availability" value="morning" onChange={handleForm} /> Morning
            <input type="checkbox" name="availability" value="afternoon" onChange={handleForm} /> Afternoon
            <input type="checkbox" name="availability" value="evening" onChange={handleForm} /> Evening
          </div>
        </div>
        <div className="form-group">
          <label>Job Preferences</label>
          <div className="checkbox-group">
            <input type="checkbox" name="jobPreferences" value="collectingFood" onChange={handleForm} /> Collecting Food
            <input type="checkbox" name="jobPreferences" value="distributingFood" onChange={handleForm} /> Distributing Food
            <input type="checkbox" name="jobPreferences" value="vetVisit" onChange={handleForm} /> Vet Visit
          </div>
        </div>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default VolunteerForm;
