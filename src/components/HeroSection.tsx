
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 md:px-6 overflow-hidden">
      <div className="cyber-grid absolute inset-0 z-0 opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/0 via-cyber-bg to-cyber-dark z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-cyber font-bold mb-6 animate-glow">
            <span className="text-cyber-primary">Create Magical</span> <span className="text-cyber-secondary">Picture Books</span> <span className="text-cyber-accent">for Children</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-story">
            Unleash your creativity with AI-powered children's book creation that brings your stories to life with vibrant illustrations and engaging narratives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-cyber-primary text-white hover:bg-cyber-primary/80 py-6 px-8 text-lg neon-border-pink">
              <a 
                href="https://chatgpt.com/g/g-681165a604088191843a24502b3988f9-children-s-picture-book-maker-gpt"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Start Creating Now
              </a>
            </Button>
            <Button asChild variant="outline" className="border-cyber-secondary text-cyber-secondary hover:text-cyber-secondary/80 py-6 px-8 text-lg neon-border">
              <a href="#how-it-works">How It Works</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-20 relative z-10">
        <div className="glass-panel max-w-5xl mx-auto overflow-hidden rounded-2xl animate-float">
          <div className="relative aspect-video">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
              alt="AI Generated Children's Book" 
              className="object-cover w-full h-full mix-blend-lighten opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <p className="text-lg md:text-xl font-cyber text-cyber-accent">Transform imagination into illustrated stories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
