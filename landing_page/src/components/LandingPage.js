import React from 'react';
import './LandingPage.css'; // Import the CSS file

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="left-section">
        <h1>AGENT</h1>
        <p>Your job search stops here</p>
        <div className="buttons">
          <button className="login">LOG IN</button>
          <button className="signup">SIGN UP</button>
        </div>
      </div>
      <div className="right-section">
        <div className="steps">
          <div className="step">
            <span className="number">1</span>
            <span className="text">select an agent</span>
          </div>
          <div className="step">
            <span className="number">2</span>
            <span className="text">share your resume</span>
          </div>
          <div className="step">
            <span className="number">3</span>
            <span className="text">collaborate on a custom application strategy</span>
          </div>
        </div>
        <p className="footer-text">we search and apply. you save time and get results.</p>
      </div>
    </div>
  );
}

export default LandingPage;
