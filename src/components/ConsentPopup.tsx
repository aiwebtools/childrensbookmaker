
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const ConsentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const hasConsented = localStorage.getItem('consentAccepted');
    if (!hasConsented) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('consentAccepted', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm">
      <div className="glass-panel max-w-md w-full p-6 rounded-xl animate-fade-in">
        <h3 className="text-xl font-cyber font-semibold mb-4 text-cyber-primary">Important Notice</h3>
        <p className="text-gray-300 mb-4">
          By using Children's Picture Book Maker GPT, you agree to our Terms of Service and Privacy Policy. 
          This service uses AI to generate content, and you are responsible for reviewing all generated content 
          before distribution or publication.
        </p>
        <p className="text-gray-300 mb-6 border-l-4 border-cyber-primary pl-3 bg-cyber-dark/30 py-2">
          <span className="font-bold text-cyber-secondary">Usage Info:</span> Unrestricted usage is free with a 
          ChatGPT Plus account or higher. Free accounts have limited interactions every few hours.
        </p>
        <div className="flex justify-center">
          <Button onClick={handleAccept} className="bg-cyber-primary text-white hover:bg-cyber-primary/80 neon-border-pink">
            I Agree
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;
