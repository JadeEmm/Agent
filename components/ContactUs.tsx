import React from 'react';
import Link from 'next/link';
import './ContactUs.css';
import agentLogo from '/logo.png'; // Replace with the actual path to your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUs: React.FC = () => {
  return (
    <div className="contact-us-page">
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
        <h1 className="section-header">Contact Us</h1>

        <div className="contact-wrapper">
          <div className="direct-contact-container">
            <div className="email-section">
              <h2 className="email-subheading">
                <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
                Email Us
              </h2>
              <div className="email-address"> </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-banner">
        <div className="container mx-auto flex items-center justify-center p-4">
          <Link href="/" passHref>
            <div className="logo-container">
              <img src='logo.png' alt='logo' className="logo" />
            </div>
          </Link>
          <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
