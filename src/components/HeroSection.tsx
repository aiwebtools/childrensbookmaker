
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-24 px-4 md:px-6 overflow-hidden">
      <div className="cyber-grid absolute inset-0 z-0 opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-cyber-bg to-cyan-900/20 z-0"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyber-secondary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-cyber font-bold mb-8 animate-glow leading-tight">
            <span className="text-cyber-primary inline-block animate-cosmic-rotate" style={{animationDelay: '0s'}}>Create</span>{' '}
            <span className="text-cyber-secondary inline-block animate-cosmic-rotate" style={{animationDelay: '2s'}}>Magical</span>{' '}
            <span className="text-cyber-accent inline-block animate-cosmic-rotate" style={{animationDelay: '4s'}}>Picture Books</span>{' '}
            <span className="text-purple-400 inline-block animate-cosmic-rotate" style={{animationDelay: '6s'}}>for Children</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-200 mb-12 font-story leading-relaxed animate-float">
            Unleash your creativity with AI-powered children's book creation that brings your stories to life with vibrant illustrations and engaging narratives.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild className="bg-gradient-to-r from-cyber-primary via-purple-500 to-cyber-secondary text-white hover:from-cyber-primary/80 hover:via-purple-500/80 hover:to-cyber-secondary/80 py-8 px-12 text-xl neon-border-pink animate-divine-pulse shadow-2xl transform hover:scale-105 transition-all duration-300">
              <a 
                href="https://chatgpt.com/g/g-681165a604088191843a24502b3988f9-children-s-picture-book-maker-gpt"
                target="_blank" 
                rel="noopener noreferrer"
              >
                ✨ Start Creating Now ✨
              </a>
            </Button>
            <Button asChild variant="outline" className="border-2 border-cyber-secondary text-cyber-secondary hover:text-cyber-secondary/80 hover:bg-cyber-secondary/10 py-8 px-12 text-xl neon-border animate-divine-pulse shadow-lg transform hover:scale-105 transition-all duration-300">
              <a href="#how-it-works">🔮 How It Works</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-24 relative z-10">
        <div className="glass-panel max-w-6xl mx-auto overflow-hidden rounded-3xl animate-float shadow-[0_0_30px_10px_rgba(5,217,232,0.4),_0_0_60px_20px_rgba(255,42,109,0.3)] border-4 border-gradient-to-r from-cyber-secondary via-purple-500 to-cyber-primary">
          <div className="relative aspect-video">
            <a 
              href="https://chatgpt.com/g/g-681165a604088191843a24502b3988f9-children-s-picture-book-maker-gpt"
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full cursor-pointer group"
            >
              <img 
                src="https://ideogram.ai/assets/image/lossless/response/drG-Kl_dRb6ZCXindiwTEA" 
                alt="AI Generated Children's Book" 
                className="object-contain w-full h-full max-h-[600px] bg-gradient-to-br from-purple-900/50 to-cyan-900/50 brightness-110 contrast-110 group-hover:brightness-125 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg/60 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary/10 via-transparent to-cyber-secondary/10 pointer-events-none animate-pulse"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <p className="text-2xl md:text-3xl font-cyber text-cyber-accent font-bold neon-text animate-glow leading-relaxed">
                  ✨ Transform imagination into illustrated stories ✨
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
