// pages/index.js
import React from 'react';
import '../designcss/parking.css'; // Make sure to link to the correct path of your CSS file

const Parking = () => {
  return (
    <div className="background">
      <div className="layouter">
      <nav className="navbar">
        {/* Add navigation items here */}
        <div className="nav-item">Home</div>
        <div className="nav-item">Parking</div>
        <div className="nav-item">Payments</div>
       {/* <div className="nav-user">Username</div>*/}
      </nav>

      <div className="main-content">
        <div className="maindiv">
        

        <div>
        <div className="container">
  <button className="btn">
    <span>View Parking Location</span>
    <i className="material-icons"></i>
    <ul className="dropdown">
      <li><a href="#">Previous parking Location</a></li>
      <li><a href="#">Current Parking Location</a></li>
      <li><a href="#">View Parking Lot</a></li>
    </ul>
  </button>
</div>

        
          <img className="image"src="./Rectangle 4.png"></img>
          </div>
          
        <div className='accountdiv'>
        <div className="account-balance">
            New Parking Slot Available in 
            
            <div className='amt'>03:40</div>
        </div>
        </div>
        
      </div>
      </div>
      </div>
    </div>
  );
};

export default Parking;
