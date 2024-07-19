import React from 'react';
import Link from 'next/link';
import './Terms_Conditions.css';
import agentLogo from '/logo.png'; // Replace with the actual path to your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TermsConditions: React.FC = () => {
  return (
    <div className="terms-conditions-page">
      <header className="header-banner">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="/" passHref>
            <div className="logo-container">
              <img src='logo.png' alt='logo' className="logo" />
            </div>
          </Link>
        </div>
      </header>

      <section id="contact" className="container text-dark">
        <h1 className="section-header">Terms & Conditions</h1>
        </section>


      {/*
      <footer className="footer-banner">
        <div className="container mx-auto flex items-center justify-center p-4">
          <Link href="/" passHref>
            <div className="logo-container">
              <img src='logo.png' alt='logo' className="logo" />
            </div>
          </Link>
          <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
        </div>
      </footer> */}
    </div>
  );
};

export default TermsConditions;