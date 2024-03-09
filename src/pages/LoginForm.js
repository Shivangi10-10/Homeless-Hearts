import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginForm.css';
import axios from 'axios';


const LoginForm = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email,password})
      .then(result =>{
         console.log(result)
         if(result.data === "Success"){
      navigate("/VolunteerDashboard")
         }
      })
      .catch(err => console.log(err))
  };

  return (
    <div className='amatic-sc-regular'>
    <div className="form-container">
      <div className="image-div">
        <img src="https://cdn.dribbble.com/users/1730991/screenshots/9889980/media/e1012f983af16ed28e2254591135feb1.gif" alt="Background" />
      </div>
      <div className="login-form-container">
        <h2 className="form-title">Volunteer Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input type="text" name="email" id="email"  onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" style={{fontFamily: 'amatic sc'}}>Login</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
