import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css'; // Assuming your CSS is in this file

const MainSection = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    // Redirect the user to the signup page (or handle signup logic)
    navigate('/signup');
  };

  return (
    <section className="main-section">
      <div className="content">
        <h1>Welcome to Our Platform!</h1>
        <p>Sign up for free and start exploring our amazing products!</p>
        <button onClick={handleSignUpClick} className="signup-btn">
          Sign Up for Free
        </button>
      </div>
    </section>
  );
};

export default MainSection;
