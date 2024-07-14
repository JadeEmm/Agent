import React from 'react';

interface KeyMetricProps {
  value: string;
  caption: string;
}

const KeyMetric: React.FC<KeyMetricProps> = ({ value, caption }) => {
  return (
    <div className="text-center mb-8">
      <div className="flex flex-col h-full p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <div className="flex-1">
          <div className="text-4xl font-bold mb-2">{value}</div>
          <div className="text-lg">{caption}</div>
        </div>
      </div>
    </div>
  );
};

const KeyMetrics: React.FC = () => {
  const metrics = [
    { value: "1+", caption: "Hired Agents" },
    { value: "50+", caption: "Applications Submitted" }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {metrics.map((metric, index) => (
            <KeyMetric key={index} value={metric.value} caption={metric.caption} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
