import React from 'react';
import './ContactUs.css';

const ContactUs: React.FC = () => {
  return (
    <div>
      <header className="header-banner">
        <div className="container mx-auto flex items-center justify-between p-4">
          <img src='/logo.png' alt='logo' className="logo" />
        </div>
      </header>

      <section className="py-16 container-fluid text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold theme-text mb-4">Contact Us</h2>
            <p className="text-xl">We'd love to hear from you. Please fill out the form below or reach out to us directly via the contact information provided.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="mb-4">Feel free to get in touch with us via the following contact details:</p>
              <p><strong>Email:</strong> contact@company.com</p>
              <p><strong>Phone:</strong> (123) 456-7890</p>
              <p><strong>Address:</strong> 1234 Street Name, City, State, ZIP</p>
            </div>
            <div className="card p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Contact Form</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg mb-2">Name</label>
                  <input type="text" id="name" className="w-full p-2 border rounded-md" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-lg mb-2">Email</label>
                  <input type="email" id="email" className="w-full p-2 border rounded-md" placeholder="Your Email" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-lg mb-2">Message</label>
                  <textarea id="message" className="w-full p-2 border rounded-md" placeholder="Your Message" rows={5}></textarea>
                </div>
                <button type="submit" className="bg-blue-800 text-white py-3 px-6 rounded-md font-bold text-xl hover:bg-blue-600 transition duration-300">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;