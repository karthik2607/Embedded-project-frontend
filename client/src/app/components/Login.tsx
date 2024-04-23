// pages/login.js or components/Login.js
"use client"
import React, { useState } from 'react';

const LoginPage = () => {
  // States for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-form">
          <h2>CUSTOMER LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <i className="icon-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <i className="icon-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
