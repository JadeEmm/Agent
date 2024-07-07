import React from 'react';
import './BecomeAnAgent.css';
import agentLogo from '/logo.png'; // Make sure to replace with the actual path to your logo image

const BecomeAnAgent: React.FC = () => {
  return (
    <div>
      <header className="header-banner">
        <div className="container mx-auto flex items-center justify-between p-4">
          <img src='logo.png' alt='logo' className="logo" />
        </div>
      </header>

      <section className="py-16 container-fluid text-black bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold theme-text mb-4">Join Us as an Agent</h2>
            <p className="text-xl mb-4">
              Become a key player in connecting job seekers with their dream jobs.
            </p>
            <p className="text-xl">
              Search and Apply to jobs on behalf of job seekers and earn competitive compensation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Lucrative Earnings</h3>
              <p>
                Earn fast and boost your income as you submit applications.
              </p>
            </div>
            <div className="card p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Efficient Workflow</h3>
              <p>
                Utilize our platform to seamlessly manage and track client applications, maximizing your productivity and earnings.
              </p>
            </div>
            <div className="card p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Flexibility & Autonomy</h3>
              <p>
                Work independently, managing your schedule and workload to maximize your earnings potential.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="card p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Market Demand</h3>
              <p>
                Tap into a growing demand for expert agents who can deliver swift and effective job search solutions.
              </p>
            </div>
            <div className="card p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Professional Growth</h3>
              <p>
                Enhance your skills and stay updated with industry trends while maximizing your earning potential.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-3xl sm:text-4xl font-bold theme-text mb-8">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold mb-4">Profile Setup</h4>
                <p>
                  Create a compelling profile to attract clients looking for job application expertise.
                </p>
              </div>
              <div className="card p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold mb-4">Application Execution</h4>
                <p>
                  Execute client-selected plans to submit applications based on their preferences and job specifications.
                </p>
              </div>
              <div className="card p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold mb-4">Client Success</h4>
                <p>
                  Ensure client satisfaction by delivering results promptly and effectively, enhancing your reputation and earning potential.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg mb-4">
              Ready to leverage your expertise and our platform to accelerate your earnings? Join us today and become a pivotal part of our mission to transform job searches.
            </p>
            <p className="text-2xl mb-8">
              Click below to create your Agent profile and start maximizing your earnings with us.
            </p>
            <button className="bg-blue-800 text-white py-3 px-6 rounded-md font-bold text-xl hover:bg-blue-600 transition duration-300">Get Started as An Agent</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeAnAgent;
