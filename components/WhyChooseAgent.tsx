// components/WhyChooseAgent.tsx
import React from 'react';

const WhyChooseAgent: React.FC = () => {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Agent?</h2>
        <div className="text-lg leading-relaxed mb-12">
          <p className="mb-4"><span className="font-bold">Save time:</span> Skip the tedious application process and let experts handle it for you.</p>
          <p className="mb-4"><span className="font-bold">Access:</span> Tap into a pool of experienced agents specializing in your industry.</p>
          <p className="mb-4"><span className="font-bold">Personalized Search:</span> Be submitted for jobs that fit your unique skills and career goals with professionally crafted applications.</p>
          <p><span className="font-bold">Higher success rate:</span> Benefit from our +30% application-to-interview conversion success rate.</p>
        </div>
        <p className="mt-8">
          Ready to find your Agent? <a href="/browse-agents" className="font-bold text-white underline">Start Now &rarr;</a>
        </p>
      </div>
    </section>
  );
};

export default WhyChooseAgent;
