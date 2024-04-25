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

      <div className="main-content">
        <div className="maindiv">
        <div>
          <img className="image1"src="./Rectangle 4.png"></img>
          </div>
          
        <div className='accountdiv'>
          <div className='repark'><img src="./image.png"></img></div>
        <div className="account-balance">
            Account Balance
            
            <div className='amt'>₹ 9000</div>
        </div>
        </div>
        
      </div>
      </div>
      </div>
    </div>
  );
};

export default HomePage;
