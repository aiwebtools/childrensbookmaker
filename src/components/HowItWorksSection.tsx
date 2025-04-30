
import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Share Your Vision",
      description: "Start by answering questions about your story idea, including theme, characters, art style, and tone."
    },
    {
      number: "02",
      title: "Review Your Outline",
      description: "The AI creates a complete outline with a title, summary, character list, and page-by-page plan for your approval."
    },
    {
      number: "03",
      title: "Create Page by Page",
      description: "For each page, the AI describes the scene, writes the text, and generates a custom illustration based on your story."
    },
    {
      number: "04",
      title: "Customize as Needed",
      description: "Review each page and request changes to the text or illustrations until they match your vision perfectly."
    },
    {
      number: "05",
      title: "Complete Your Book",
      description: "Once all pages are created, the AI compiles your finished book into a beautiful PDF ready to share or print."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 relative overflow-hidden" id="how-it-works">
      <div className="cyber-grid absolute inset-0 z-0 opacity-10"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-cyber font-bold text-center mb-16 neon-text-pink">
          How It Works
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start mb-12 last:mb-0 relative">
              {/* Step number */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center bg-cyber-dark border border-cyber-primary mb-4 md:mb-0 md:mr-6">
                <span className="text-2xl font-cyber font-bold text-cyber-primary">{step.number}</span>
              </div>
              
              {/* Step content */}
              <div className="flex-grow">
                <h3 className="text-xl font-cyber font-semibold mb-2 text-cyber-secondary">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
              
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-cyber-primary to-cyber-secondary opacity-50 hidden md:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
