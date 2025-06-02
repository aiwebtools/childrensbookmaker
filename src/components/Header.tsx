
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-50 px-4 py-6 md:px-6 bg-gradient-to-r from-cyber-dark/80 via-purple-900/40 to-cyber-dark/80 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary/5 via-cyber-secondary/5 to-purple-500/5 animate-pulse"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex flex-col items-center group">
              <div className="flex items-center">
                <div className="mr-3 animate-cosmic-rotate">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 text-cyber-primary">
                    <path fill="currentColor" d="M12,3c-0.6,0-1,0.4-1,1v7H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h7v7c0,0.6,0.4,1,1,1s1-0.4,1-1v-7h7c0.6,0,1-0.4,1-1
                    s-0.4-1-1-1h-7V4C13,3.4,12.6,3,12,3z" className="neon-text-pink"/>
                  </svg>
                </div>
                <h1 className="text-xl md:text-2xl font-cyber font-bold neon-text-pink group-hover:animate-glow transition-all duration-300">
                  Children's Picture Book Maker GPT
                </h1>
              </div>
              <span className="text-xs text-cyber-secondary animate-pulse">Presented by AiWebTools.Ai</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Button asChild variant="ghost" className="text-cyber-secondary hover:text-cyber-accent hover:bg-cyber-dark/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-secondary/20 px-6 py-3">
              <a href="https://chatgpt.com/g/g-681165a604088191843a24502b3988f9-children-s-picture-book-maker-gpt" target="_blank" rel="noopener noreferrer">
                Children's Picture Book Maker GPT
              </a>
            </Button>
            <Button asChild variant="ghost" className="text-cyber-secondary hover:text-cyber-accent hover:bg-cyber-dark/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-secondary/20 px-6 py-3">
              <a href="#faq">FAQ</a>
            </Button>
            <Button asChild variant="ghost" className="text-cyber-secondary hover:text-cyber-accent hover:bg-cyber-dark/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-secondary/20 px-6 py-3">
              <a href="#disclaimer">Disclaimer</a>
            </Button>
            <Button asChild className="bg-gradient-to-r from-cyber-primary via-purple-500 to-cyber-secondary text-white hover:from-cyber-primary/80 hover:via-purple-500/80 hover:to-cyber-secondary/80 neon-border-pink animate-divine-pulse px-8 py-3 transform hover:scale-105 transition-all duration-300">
              <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer">
                ✨ More AI Tools
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" className="text-cyber-secondary hover:bg-cyber-secondary/20 p-3" onClick={toggleMenu}>
              <Menu className="h-6 w-6 animate-pulse" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-panel mt-6 p-6 rounded-xl animate-fade-in shadow-2xl shadow-cyber-secondary/20">
            <nav className="flex flex-col gap-6">
              <Button asChild variant="ghost" className="text-cyber-secondary justify-start hover:bg-cyber-secondary/10 p-4 rounded-lg transition-all duration-300">
                <a href="https://chatgpt.com/g/g-681165a604088191843a24502b3988f9-children-s-picture-book-maker-gpt" target="_blank" rel="noopener noreferrer">
                  Children's Picture Book Maker GPT
                </a>
              </Button>
              <Button asChild variant="ghost" className="text-cyber-secondary justify-start hover:bg-cyber-secondary/10 p-4 rounded-lg transition-all duration-300">
                <a href="#faq" onClick={toggleMenu}>FAQ</a>
              </Button>
              <Button asChild variant="ghost" className="text-cyber-secondary justify-start hover:bg-cyber-secondary/10 p-4 rounded-lg transition-all duration-300">
                <a href="#disclaimer" onClick={toggleMenu}>Disclaimer</a>
              </Button>
              <Button asChild className="bg-gradient-to-r from-cyber-primary via-purple-500 to-cyber-secondary text-white hover:from-cyber-primary/80 hover:via-purple-500/80 hover:to-cyber-secondary/80 justify-start p-4 rounded-lg animate-divine-pulse">
                <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer">
                  ✨ More AI Tools
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
