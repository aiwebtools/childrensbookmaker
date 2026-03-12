
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const AIWEBTOOLS_URL = "https://aiwebtools.lovable.app/?via=aiwebtools";
const GPT_URL = "https://chatgpt.com/g/g-681165a604088191843a24502b3988f9-children-s-picture-book-maker-gpt";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="relative z-50 px-4 py-3 md:py-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center min-w-0 flex-shrink">
            <Link to="/" className="flex flex-col items-start min-w-0">
              <div className="flex items-center min-w-0">
                <div className="mr-2 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 text-cyber-primary">
                    <path fill="currentColor" d="M12,3c-0.6,0-1,0.4-1,1v7H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h7v7c0,0.6,0.4,1,1,1s1-0.4,1-1v-7h7c0.6,0,1-0.4,1-1
                    s-0.4-1-1-1h-7V4C13,3.4,12.6,3,12,3z" className="neon-text-pink"/>
                  </svg>
                </div>
                <h1 className="text-base sm:text-lg md:text-2xl font-cyber font-bold neon-text-pink truncate">Children's Picture Book Maker GPT</h1>
              </div>
              <span className="text-[10px] sm:text-xs text-cyber-secondary ml-9 md:ml-10">Presented by AiWebTools.Ai</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
            <Button asChild variant="ghost" className="text-cyber-secondary hover:text-cyber-accent hover:bg-cyber-dark text-sm">
              <a href={GPT_URL} target="_blank" rel="noopener noreferrer">
                Picture Book Maker GPT
              </a>
            </Button>
            <Button asChild variant="ghost" className="text-cyber-secondary hover:text-cyber-accent hover:bg-cyber-dark text-sm">
              <a href="#faq">FAQ</a>
            </Button>
            <Button asChild variant="ghost" className="text-cyber-secondary hover:text-cyber-accent hover:bg-cyber-dark text-sm">
              <a href="#disclaimer">Disclaimer</a>
            </Button>
            <Button asChild className="bg-cyber-primary text-white hover:bg-cyber-primary/80 neon-border-pink text-sm">
              <a href={AIWEBTOOLS_URL} target="_blank" rel="noopener noreferrer">
                More AI Tools
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex-shrink-0">
            <button
              onClick={toggleMenu}
              className="text-cyber-secondary p-2 -mr-2 active:scale-95 transition-transform duration-100"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-200 ease-out ${
            isMenuOpen ? 'max-h-[400px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <nav className="glass-panel p-4 rounded-lg shadow-lg flex flex-col gap-2">
            <a
              href={GPT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-secondary hover:text-cyber-accent px-3 py-3 rounded-md hover:bg-white/5 transition-colors text-sm font-medium active:bg-white/10"
            >
              Children's Picture Book Maker GPT
            </a>
            <a
              href="#faq"
              onClick={closeMenu}
              className="text-cyber-secondary hover:text-cyber-accent px-3 py-3 rounded-md hover:bg-white/5 transition-colors text-sm font-medium active:bg-white/10"
            >
              FAQ
            </a>
            <a
              href="#disclaimer"
              onClick={closeMenu}
              className="text-cyber-secondary hover:text-cyber-accent px-3 py-3 rounded-md hover:bg-white/5 transition-colors text-sm font-medium active:bg-white/10"
            >
              Disclaimer
            </a>
            <a
              href={AIWEBTOOLS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyber-primary text-white hover:bg-cyber-primary/80 px-3 py-3 rounded-md text-sm font-medium text-center neon-border-pink active:scale-[0.98] transition-transform"
            >
              More AI Tools
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
