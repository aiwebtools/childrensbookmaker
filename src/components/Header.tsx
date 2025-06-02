
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
    <header className="relative z-50 px-4 py-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex flex-col items-center">
              <div className="flex items-center">
                <div className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-cyber-primary">
                    <path fill="currentColor" d="M12,3c-0.6,0-1,0.4-1,1v7H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h7v7c0,0.6,0.4,1,1,1s1-0.4,1-1v-7h7c0.6,0,1-0.4,1-1
                    s-0.4-1-1-1h-7V4C13,3.4,12.6,3,12,3z" className="neon-text-pink"/>
                  </svg>
                </div>
                <h1 className="text-xl md:text-2xl font-cyber font-bold neon-text-pink">Children's Picture Book Maker GPT</h1>
              </div>
              <span className="text-xs text-cyber-secondary">Presented by AiWebTools.Ai</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Button asChild variant="ghost" className="text-cyber-secondary hover:text-cyber-accent hover:bg-cyber-dark">
              <a href="https://chatgpt.com/g/g-681165a604088191843a24502b3988f9-children-s-picture-book-maker-gpt" target="_blank" rel="noopener noreferrer">
                Children's Picture Book Maker GPT
              </a>
            </Button>
            <Button asChild variant="ghost" className="text-cyber-secondary hover:text-cyber-accent hover:bg-cyber-dark">
              <a href="#faq">FAQ</a>
            </Button>
            <Button asChild variant="ghost" className="text-cyber-secondary hover:text-cyber-accent hover:bg-cyber-dark">
              <a href="#disclaimer">Disclaimer</a>
            </Button>
            <Button asChild className="bg-cyber-primary text-white hover:bg-cyber-primary/80 neon-border-pink">
              <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer">
                More AI Tools
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" className="text-cyber-secondary" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-panel mt-4 p-4 rounded-lg animate-fade-in shadow-lg">
            <nav className="flex flex-col gap-4">
              <Button asChild variant="ghost" className="text-cyber-secondary justify-start">
                <a href="https://chatgpt.com/g/g-681165a604088191843a24502b3988f9-children-s-picture-book-maker-gpt" target="_blank" rel="noopener noreferrer">
                  Children's Picture Book Maker GPT
                </a>
              </Button>
              <Button asChild variant="ghost" className="text-cyber-secondary justify-start">
                <a href="#faq" onClick={toggleMenu}>FAQ</a>
              </Button>
              <Button asChild variant="ghost" className="text-cyber-secondary justify-start">
                <a href="#disclaimer" onClick={toggleMenu}>Disclaimer</a>
              </Button>
              <Button asChild className="bg-cyber-primary text-white hover:bg-cyber-primary/80 justify-start">
                <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer">
                  More AI Tools
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
