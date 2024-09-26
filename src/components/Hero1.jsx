
import React from 'react';
import './Hero1.css'; 


function Hero1() {
  return (
    <div className="hero1-container">
      <h1>Welcome to My Portfolio</h1>
      {/* <p>Discover my projects and skills</p> */}
      <img 
        src="src/assets/self.png" 
        alt="Placeholder" 
        style={{ justifyContent: "flex-end", width: '350px', height: '350px', borderRadius: '50%', margin: '0' }}
      />
      {/* <button className="hero-button">Learn More</button> */}
    </div>
  );
}

export default Hero1;