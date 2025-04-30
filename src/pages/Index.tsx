
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import DisclaimerSection from '../components/DisclaimerSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import ConsentPopup from '../components/ConsentPopup';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-bg text-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <DisclaimerSection />
        <CTASection />
      </main>
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
