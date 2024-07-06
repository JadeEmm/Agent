// pages/services-and-pricing.tsx
import React from 'react';
import Head from 'next/head';
import Header from '@/components/header';
      
const ServicesAndPricing: React.FC = () => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet" />
      </Head>
      <div className="container mx-auto py-8 px-4 sm:px-0 bg-cover bg-center" style={{ backgroundImage: "url('/blob-scene-haikei.svg')" }}>
        <h1 className="text-center mt-5 text-3xl sm:text-5xl font-bold">
          Pricing <span className="theme-text">Plans</span>
        </h1>
        <hr className="mx-auto mb-5 w-1/4" />
        <div className="max-w-7xl mx-auto mt-10 flex justify-center gap-8">
          {/* Left Pricing Box - Standard Plan */}
          <div className="pricing-box">
            <div className="pricing-box-inner shadow-lg">
              <div className="pricing-box-content">
                <h3 className="text-xl font-bold text-center">Standard Plan</h3>
                <hr className="mx-auto w-3/4 my-4" />
                <ul className="text-center">
                  <li className="mb-2">Access to our pool of job search agents</li>
                  <li className="mb-2">Unlimited job applications per month</li>
                  <li className="mb-2">Basic application tracking</li>
                </ul>
                <p className="text-center mt-6">
                  <strong>Price:</strong> $49.99 per month
                </p>
                <p className="text-center">
                  <small>Equivalent to 4999 credits</small>
                </p>
                <p className="text-center mt-4">
                  Use your credits to subscribe and maintain a balance for applying to jobs under this plan.
                </p>
              </div>
            </div>
          </div>
          {/* Middle Pricing Box - Premium Plan */}
          <div className="pricing-box">
            <div className="pricing-box-inner shadow-lg">
              <div className="pricing-box-content">
                <h3 className="text-xl font-bold text-center">Premium Plan</h3>
                <hr className="mx-auto w-3/4 my-4" />
                <ul className="text-center">
                  <li className="mb-2">Access to our pool of job search agents</li>
                  <li className="mb-2">Priority job applications</li>
                  <li className="mb-2">Advanced application tracking</li>
                  <li className="mb-2">Resume optimization</li>
                </ul>
                <p className="text-center mt-6">
                  <strong>Price:</strong> $79.99 per month
                </p>
                <p className="text-center">
                  <small>Equivalent to 7999 credits</small>
                </p>
                <p className="text-center mt-4">
                  Upgrade to the Premium Plan for enhanced features and priority applications, using your credits effectively.
                </p>
              </div>
            </div>
          </div>
          {/* Right Pricing Box - Fast Track Add-on */}
          <div className="pricing-box">
            <div className="pricing-box-inner shadow-lg">
              <div className="pricing-box-content">
                <h3 className="text-xl font-bold text-center">Fast Track Add-on</h3>
                <hr className="mx-auto w-3/4 my-4" />
                <p className="text-center mb-4">
                  Ensure your applications are prioritized to beat deadlines and increase your chances of landing your dream job.
                </p>
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-4">$19.99 per month</h4>
                  <p className="text-center">
                    <small>Equivalent to 1999 credits</small>
                  </p>
                  <p className="text-center mt-4">
                    Add the Fast Track feature to your chosen plan to gain a competitive edge in job applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Nunito", sans-serif;
        }

        .theme-text {
          color: #474af0;
        }

        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .bg-cover {
          background-size: cover;
          background-position: center;
        }

        ul {
          list-style-type: none;
        }

        li {
          margin-bottom: 1rem;
        }

        .rounded-lg {
          border-radius: 0.5rem;
        }

        .shadow-lg {
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

        .pricing-box {
          flex: 1;
          max-width: 20rem;
          transition: transform 0.3s ease;
        }

        .pricing-box:hover {
          transform: translateY(-10px);
        }

        .pricing-box-inner {
          overflow: hidden;
          position: relative;
          border-radius: 0.5rem;
          background-color: #ffffff;
          transition: background-color 0.3s ease;
        }

        .pricing-box:hover .pricing-box-inner {
          background-color: #474af0;
        }

        .pricing-box-content {
          padding: 1.5rem;
        }

        .pricing-box-content hr {
          border-color: #474af0;
        }

        .text-center {
          text-align: center;
        }

        .text-xl {
          font-size: 1.25rem;
        }

        .font-bold {
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default ServicesAndPricing;
