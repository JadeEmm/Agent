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
              Choose the plan that best fits your needs and start leveraging our platform for maximum benefit.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-1">
              <div className="card p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold mb-4">Basic Plan</h3>
                <p className="text-2xl mb-4">$49/month</p>
                <p className="text-left mb-4">Access to basic tools</p>
                <p className="text-left mb-4">10 job applications per month</p>
                <p className="text-left mb-4">Email support</p>
                <p className="text-left mb-4">Basic analytics</p>
                <button className="bg-blue-800 text-white py-3 px-6 rounded-md font-bold text-xl hover:bg-blue-600 transition duration-300">Choose Basic</button>
              </div>
            </div>
            <div className="col-span-1">
              <div className="card p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold mb-4">Premium Plan</h3>
                <p className="text-2xl mb-4">$99/month</p>
                <p className="text-left mb-4">Access to all tools</p>
                <p className="text-left mb-4">Unlimited job applications</p>
                <p className="text-left mb-4">Priority email and chat support</p>
                <p className="text-left mb-4">Advanced analytics</p>
                <p className="text-left mb-4">Personalized coaching</p>
                <button className="bg-blue-800 text-white py-3 px-6 rounded-md font-bold text-xl hover:bg-blue-600 transition duration-300">Choose Premium</button>
              </div>
            </div>
          </div>

          <div className="mt-16 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold theme-text mb-4">How It Works</h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="step-card p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold mb-4">Step 1</h3>
                <p className="text-xl mb-4">Sign up for an account</p>
              </div>
              <div className="step-card p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold mb-4">Step 2</h3>
                <p className="text-xl mb-4">Choose your preferred plan</p>
              </div>
              <div className="step-card p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold mb-4">Step 3</h3>
                <p className="text-xl mb-4">Start using our platform</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg mb-4">
              Not sure which plan is right for you? Contact us for more information and we'll help you choose the best option.
            </p>
            <Link href="/contact">
              <button className="bg-blue-800 text-white py-3 px-6 rounded-md font-bold text-xl hover:bg-blue-600 transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPricing;
