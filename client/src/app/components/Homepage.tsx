// pages/index.js
import React from 'react';
import '../designcss/home.css'; // Make sure to link to the correct path of your CSS file

const HomePage = () => {
  return (
    <div className="background">
      <div className="layouter">
      <nav className="navbar">
        {/* Add navigation items here */}
        <div className="nav-item">Home</div>
        <div className="nav-item">Parking</div>
        <div className="nav-item">Payments</div>
        <div className="nav-user">Username</div>
      </nav>

      <main className="main-content">
        <section className="map-section">
          {/* The map component goes here. You might use a library like react-google-maps */}
        </section>
        <section className="account-balance">
          <h1>Account Balance</h1>
          <span className="balance">₹ 9000</span>
        </section>
      </main>
      </div>
    </div>
  );
};

export default HomePage;
