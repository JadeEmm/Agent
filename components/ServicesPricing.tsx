import React from 'react';
import Link from 'next/link';
import './ServicesPricing.css'; // Reusing the same CSS to maintain the theme
import agentLogo from '/logo.png'; // Ensure this path is correct

const ServicesPricing: React.FC = () => {
  return (
    <div>
      <header className="header-banner">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="/">
            <img src='logo.png' alt='logo' className="logo" />
          </Link>
        </div>
      </header>

      <section className="py-16 container-fluid text-black bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold theme-text mb-4">Our Pricing Plans</h2>
            <p className="text-xl mb-8">
              Choose the plan that best fits your needs that your agent will do for you .
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-1">
              <div className="card p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold mb-4">Tier 1</h3>
                <p className="text-2xl mb-4">1 Credit per Application</p>
                <p className="text-left mb-4">Chat with your agent</p>
                <p className="text-left mb-4">Finds your job or internship postings</p>
                <p className="text-left mb-4">Submits your applications</p>
                <p className="text-left mb-4">Application tracking</p>
                <button className="bg-blue-800 text-white py-3 px-6 rounded-md font-bold text-xl hover:bg-blue-600 transition duration-300">Choose Tier 1</button>
              </div>
            </div>
            <div className="col-span-1">
              <div className="card p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold mb-4">Tier 2</h3>
                <p className="text-2xl mb-4">2 Credits per Application</p>
                <p className="text-left mb-4">Chat with your agent</p>
                <p className="text-left mb-4">Finds your job or internship postings</p>
                <p className="text-left mb-4">Tailors and customizes your resume</p>
                <p className="text-left mb-4">Submits your applications</p>
                <p className="text-left mb-4">Application Tracking</p>
                <button className="bg-blue-800 text-white py-3 px-6 rounded-md font-bold text-xl hover:bg-blue-600 transition duration-300">Choose Tier 2</button>
              </div>
            </div>
          </div>

          <div className="mt-10 mb-16">
          <h2 className="text-4xl sm:text-3xl font-bold theme-text mt-16 mb-8">Get more interviews with early applications</h2>
            <h3 className="text-xl mb-8"> Studies show the sooner you apply to a job after it's been posted, the better your chances of landing an interview </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold mb-4">Fast Track Add-On</h3>
                <p className="text-2xl mb-4">10 Credits per Order</p>
                <p className="text-xl mb-4">Add to any plan for:</p>
                <p className="text-left mb-4">Faster application processing.</p>
                <p className="text-left mb-4">Rapid application submission</p>
                <p className="text-left mb-4">Priority handling</p>

                <button className="bg-blue-800 text-white py-3 px-6 rounded-md font-bold text-xl hover:bg-blue-600 transition duration-300">Add Fast Track</button>
              </div>
            </div>
          </div>

          <div className="mt-16 mb-16">
            
            <h2 className="text-4xl sm:text-5xl font-bold theme-text mb-8">How It Works</h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="step-card p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold mb-4">Step 1</h3>
                <p className="text-xl mb-4">Sign up for an account and set your profile and preferences</p>
              </div>
              <div className="step-card p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold mb-4">Step 2</h3>
                <p className="text-xl mb-4">Add to your balance to gain credits for applications</p>
              </div>
              <div className="step-card p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold mb-4">Step 3</h3>
                <p className="text-xl mb-4">Hire an agent and choose your plan</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg mb-4">
              Not sure which plan is right for you? Contact us for more information and we'll help you choose the best option.
            </p>
            <Link href="/contact-us">
              <button className="bg-blue-800 text-white py-3 px-6 rounded-md font-bold text-xl hover:bg-blue-600 transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer-banner">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="/" passHref>
            
            <img src='logo.png' alt='logo' className="logo" />
            
          </Link>
          <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPricing;
