// pages/index.js
import React from 'react';
import '../designcss/payment.css'; // Make sure to link to the correct path of your CSS file

const Payment = () => {
  return (
    <div className="background">
      <div className="layouter">
      <nav className="navbar">
        {/* Add navigation items here */}
        <div className="nav-item">Home</div>
        <div className="nav-item">Parking</div>
        <div className="nav-item">Accounts</div>
       {/* <div className="nav-user">Username</div>*/}
      </nav>

      <div className="main-content">
        <div className="maindiv">
        

        <div>
        

        
          <img className="image"src="./image copy.png"></img>
          </div>
          
        <div className='rechargediv'>
        <div className="account-balance">
            Account Balance
            
            <div className='amt'>₹ 9000</div>
            <div className='blank'></div>

            <div className='recharge'>Recharge Amount</div>
            <div className='rechargeamt'>
                <div><button className='btn'>250</button></div>
                <div><button className='btn'>500</button></div>
                <div><button className='btn'>1000</button></div>
            </div>
        </div>
        </div>
        
      </div>
      </div>
      </div>
    </div>
  );
};

export default Payment;
