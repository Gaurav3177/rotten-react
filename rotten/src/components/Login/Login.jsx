import React, { useState } from 'react';
import './Login.css';
import 'boxicons/css/boxicons.min.css';
import handleSignUp from './signup.js'; // Import signup function
import handleLogin from './login.js'; // Import login function

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleRegisterClick = () => {
    setIsLogin(false);
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (isLogin) {
      handleLogin(email, password); // Call login function
    } else {
      handleSignUp(email, password); // Call signup function
    }
  };

  // Function to interact with the database
  const handleDatabaseInteraction = () => {
    // Perform database operations here
  };

  return (
    <div className="wrapper">
      <nav className="nav">
        {/* Your navigation JSX */}
      </nav>
      <div className="form-box">
        {/* Login and signup forms */}
        <form onSubmit={handleLoginFormSubmit}>
          {/* Input fields for email and password */}
          {/* Login/Signup button */}
        </form>
      </div>
      {/* Placeholder for database interaction */}
      <div>
        <button onClick={handleDatabaseInteraction}>Interact with Database</button>
      </div>
    </div>
  );
};

export default Login;
