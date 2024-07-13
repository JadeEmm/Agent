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
          {/* Left contact page */}
          <form id="contact-form" className="form-horizontal" role="form">
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" id="name" placeholder="NAME" name="name" required />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" required />
              </div>
            </div>

            <textarea className="form-control" rows={10} placeholder="MESSAGE" name="message" required></textarea>

            <button className="btn btn-primary send-button" id="submit" type="submit">
              <div className="alt-send-button">
                <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
              </div>
            </button>
          </form>

          {/* Right contact page */}
          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">San Francisco, California</span></i></li>
              <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:XX" title="Give me a call">(XXX) XXX-XXXX</a></span></i></li>
              <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">helloagent@mail.com</a></span></i></li>
            </ul>

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
