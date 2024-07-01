// components/HowItWorks.tsx
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-8 sm:py-16 bg-primary">
      <div className="max-w-3xl mx-auto text-center">
        <div className="p-6 bg-primary text-white rounded-lg mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold">How Agent Works</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-white rounded-lg h-full p-6">
              <h3 className="text-xl font-bold mb-4">1. Create your account</h3>
              <p className="text-center">Set up your profile and preferences.</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-white rounded-lg h-full p-6">
              <h3 className="text-xl font-bold mb-4">2. Choose an Agent</h3>
              <p className="text-center">Select from a pool of experienced agents.</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-white rounded-lg h-full p-6">
              <h3 className="text-xl font-bold mb-4">3. Collaborate with Your Agent</h3>
              <p className="text-center">Develop a personalized application strategy.</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-white rounded-lg h-full p-6">
              <h3 className="text-xl font-bold mb-4">4. Agent Submits Applications</h3>
              <p className="text-center">Submit applications on your behalf.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
