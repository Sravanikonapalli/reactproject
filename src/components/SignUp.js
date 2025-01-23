import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css'; 

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate signup success and navigate to home
    alert('Signup successful!');
    navigate('/home');
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input 
          name="username" 
          placeholder="Username" 
          onChange={handleChange} 
          required 
          className="input-field"
        />
        <input 
          name="email" 
          type="email" 
          placeholder="Email" 
          onChange={handleChange} 
          required 
          className="input-field"
        />
        <input 
          name="password" 
          type="password" 
          placeholder="Password" 
          onChange={handleChange} 
          required 
          className="input-field"
        />
        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
