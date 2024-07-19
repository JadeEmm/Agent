import React from 'react';
import TermsConditions from '@/components/Terms_Conditions';
import Footer from '@/components/footer';
import MaxWContainer from '@/components/max-w-container';

const TermsConditionsPage: React.FC = () => {
  return (
    <div>
      <TermsConditions />
      <MaxWContainer>
        {/* Content within MaxWContainer */}
      </MaxWContainer>
      <Footer />
    </div>
  );
};

export default TermsConditionsPage;
