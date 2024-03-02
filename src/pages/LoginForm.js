import React, { useState } from 'react';
import './LoginForm.css';
const LoginForm = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Form submission logic here
  };

  return (
    <div className="form-container">
      <div className="image-div">
      <img src="/VFbackground.jpeg" alt="Background" />
      </div>
      <div className="login-form-container">
        <h2 className="form-title">Volunteer Login Form</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" value={form.username} onChange={handleChange} pattern="[A-Za-z0-9_]+" title="Username can include alphabets, digits, and underscores" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={form.password} onChange={handleChange} pattern="^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$" title="Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character (@_$), and be at least  8 characters long" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;