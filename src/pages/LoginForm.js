import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginForm.css';

const LoginForm = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Form submission logic here
    // After successful submission, navigate to VolunteerDashboard.js
    navigate('/VolunteerDashboard');
  };

  return (
    <div className="form-container">
      <div className="image-div">
        <img src="https://cdn.dribbble.com/users/1730991/screenshots/9889980/media/e1012f983af16ed28e2254591135feb1.gif" alt="Background" />
      </div>
      <div className="login-form-container">
        <h2 className="form-title">Volunteer Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" value={form.username} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={form.password} onChange={handleChange} required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
