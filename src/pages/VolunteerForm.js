import React, { useState } from 'react';
import './VolunteerForm.css';

const VolunteerForm = () => {
  const [form, setForm] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    availability: [],
    jobPreferences: [],
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm({
        ...form,
        [name]: [...form[name], value],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="volunteer-form-container">
      <h2 className="form-title">Volunteer Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={form.name} onChange={handleChange} pattern="[A-Za-z\s]+" title="Only alphabets are allowed" required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" name="phoneNumber" id="phoneNumber" value={form.phoneNumber} onChange={handleChange} pattern="^\d{10}$" title="Enter a valid  10 digit phone number" required />
        </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={form.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Availability</label>
        <div className="checkbox-group">
          <input type="checkbox" name="availability" value="morning" onChange={handleChange} /> Morning
          <input type="checkbox" name="availability" value="afternoon" onChange={handleChange} /> Afternoon
          <input type="checkbox" name="availability" value="evening" onChange={handleChange} /> Evening
        </div>
      </div>
      <div className="form-group">
        <label>Job Preferences</label>
        <div className="checkbox-group">
          <input type="checkbox" name="jobPreferences" value="collectingFood" onChange={handleChange} /> Collecting Food
          <input type="checkbox" name="jobPreferences" value="distributingFood" onChange={handleChange} /> Distributing Food
          <input type="checkbox" name="jobPreferences" value="vetVisit" onChange={handleChange} /> Vet Visit
        </div>
      </div>
      <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default VolunteerForm;
