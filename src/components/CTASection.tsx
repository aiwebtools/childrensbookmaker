
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-4 md:px-6 relative overflow-hidden">
      <div className="cyber-grid absolute inset-0 z-0 opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/50 via-cyber-bg to-cyber-dark z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-cyber font-bold mb-6 animate-glow">
            <span className="text-cyber-primary">Start Creating</span> <span className="text-cyber-secondary">Your Book</span> <span className="text-cyber-accent">Today</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your story ideas into beautifully illustrated picture books that children will love to read over and over again.
          </p>
          <Button asChild className="bg-cyber-primary text-white hover:bg-cyber-primary/80 py-6 px-8 text-lg neon-border-pink">
            <a 
              href="https://chatgpt.com/g/g-681165a604088191843a24502b3988f9-children-s-picture-book-maker-gpt"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Create Your Picture Book
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
