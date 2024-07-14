import React from 'react';
import Link from 'next/link';
import './ContactUs.css';
import agentLogo from '/logo.png'; // Replace with the actual path to your logo image

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
          

          {/* Right contact page */}
          <div className="direct-contact-container">
            {/*
            <ul className="contact-list">
              <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">San Francisco, California</span></i></li>
              <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:XX" title="Give me a call">(XXX) XXX-XXXX</a></span></i></li>
              <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">helloagent@mail.com</a></span></i></li>
            </ul>
  */}

{/* 
<hr />
<ul className="social-media-list">
  <li><a href="#" target="_blank" className="contact-icon">
    <i className="fa fa-github" aria-hidden="true"></i></a>
  </li>
  <li><a href="#" target="_blank" className="contact-icon">
    <i className="fa fa-codepen" aria-hidden="true"></i></a>
  </li>
  <li><a href="#" target="_blank" className="contact-icon">
    <i className="fa fa-twitter" aria-hidden="true"></i></a>
  </li>
  <li><a href="#" target="_blank" className="contact-icon">
    <i className="fa fa-instagram" aria-hidden="true"></i></a>
  </li>
</ul>
<hr />
*/}

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
