
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
        <div className="glass-panel max-w-5xl mx-auto overflow-hidden rounded-2xl animate-float shadow-[0_0_15px_5px_rgba(5,217,232,0.3)] border-2 border-cyber-secondary/30">
          <div className="relative aspect-video">
            <a 
              href="https://chatgpt.com/g/g-681165a604088191843a24502b3988f9-children-s-picture-book-maker-gpt"
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full cursor-pointer"
            >
              <img 
                src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-5478-622f-8e5d-2014fa3631d2/raw?se=2025-04-30T01%3A03%3A30Z&sp=r&sv=2024-08-04&sr=b&scid=bf4a4086-c0da-5529-bcfc-71fd10a679fd&skoid=d958ec58-d47c-4d2f-a9f2-7f3e03fdcf72&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-29T22%3A35%3A54Z&ske=2025-04-30T22%3A35%3A54Z&sks=b&skv=2024-08-04&sig=ZHzPWCHigp%2BjSHqOEzvB5bbXW7drCUzeHqA28WB0cfk%3D" 
                alt="AI Generated Children's Book" 
                className="object-contain w-full h-full max-h-[500px] bg-black brightness-125 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg/80 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="text-lg md:text-xl font-cyber text-cyber-accent font-bold">Transform imagination into illustrated stories</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
