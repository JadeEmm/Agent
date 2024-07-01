import React from 'react';

interface KeyMetricProps {
  value: string;
  caption: string;
}

const KeyMetric: React.FC<KeyMetricProps> = ({ value, caption }) => {
  return (
    <div className="text-center mb-12">
      <div className="text-6xl font-bold mb-2">{value}</div>
      <div className="text-lg">{caption}</div>
    </div>
  );
};

const KeyMetrics: React.FC = () => {
  const metrics = [
    { value: "500+", caption: "Hired Agents" },
    { value: "10,000+", caption: "Applications Submitted" },
    { value: "+30%", caption: "Application to Interview Conversion Success Rate" },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 gap-8">
          {metrics.map((metric, index) => (
            <KeyMetric key={index} value={metric.value} caption={metric.caption} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
