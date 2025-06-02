
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 px-4 md:px-6 bg-gradient-to-b from-cyber-dark/60 via-purple-900/20 to-cyber-dark/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary/5 via-cyber-secondary/5 to-purple-500/5 animate-pulse"></div>
      <div className="cyber-grid absolute inset-0 z-0 opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex flex-col items-start">
              <h2 className="text-xl font-cyber font-bold neon-text-pink animate-glow">Children's Picture Book Maker GPT</h2>
              <span className="text-xs text-cyber-secondary animate-pulse">Presented by AiWebTools.Ai</span>
            </Link>
            <p className="text-sm text-gray-300 max-w-md leading-relaxed">
              Create magical picture books for children with the help of AI. Bring your stories to life with custom illustrations and engaging narratives.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-cyber font-semibold mb-6 text-cyber-secondary neon-text">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://chatgpt.com/g/g-681165a604088191843a24502b3988f9-children-s-picture-book-maker-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-cyber-secondary transition-all duration-300 hover:shadow-lg hover:shadow-cyber-secondary/20 block p-2 rounded-lg hover:bg-cyber-secondary/10">
                  Children's Picture Book Maker GPT
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-cyber-secondary transition-all duration-300 hover:shadow-lg hover:shadow-cyber-secondary/20 block p-2 rounded-lg hover:bg-cyber-secondary/10">FAQ</a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-300 hover:text-cyber-secondary transition-all duration-300 hover:shadow-lg hover:shadow-cyber-secondary/20 block p-2 rounded-lg hover:bg-cyber-secondary/10">Disclaimer</a>
              </li>
              <li>
                <a href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-cyber-secondary transition-all duration-300 hover:shadow-lg hover:shadow-cyber-secondary/20 block p-2 rounded-lg hover:bg-cyber-secondary/10">
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-cyber font-semibold mb-6 text-cyber-secondary neon-text">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <a href="tel:+14758008096" 
                   className="text-gray-300 hover:text-cyber-secondary transition-all duration-300 hover:shadow-lg hover:shadow-cyber-secondary/20 p-2 rounded-lg hover:bg-cyber-secondary/10">
                  (475) 800-8096
                </a>
              </li>
              <li className="flex items-center">
                <a href="mailto:Contact@ai-webtools.com" 
                   className="text-gray-300 hover:text-cyber-secondary transition-all duration-300 hover:shadow-lg hover:shadow-cyber-secondary/20 p-2 rounded-lg hover:bg-cyber-secondary/10">
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <h3 className="text-lg font-cyber font-semibold mb-4 text-cyber-secondary neon-text">Legal</h3>
              <div className="flex flex-col space-y-2">
                <a href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-gray-300 hover:text-cyber-secondary transition-all duration-300 hover:shadow-lg hover:shadow-cyber-secondary/20 p-2 rounded-lg hover:bg-cyber-secondary/10">
                  Privacy Policy
                </a>
                <a href="https://aiwebtools.lovable.app/disclaimers" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-gray-300 hover:text-cyber-secondary transition-all duration-300 hover:shadow-lg hover:shadow-cyber-secondary/20 p-2 rounded-lg hover:bg-cyber-secondary/10">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gradient-to-r from-cyber-primary/30 via-cyber-secondary/30 to-purple-500/30">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-400 italic">
              This service is provided for informational, educational, and research purposes only.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              <a href="https://www.aiwebtools.ai" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-cyber-secondary transition-colors duration-300">
                © 2025 AI WEB TOOLS LLC All rights reserved.
              </a>
            </p>
            <div className="mt-4 md:mt-0">
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyber-primary/20 via-purple-500/20 to-cyber-secondary/20 border border-cyber-primary text-cyber-primary hover:bg-gradient-to-r hover:from-cyber-primary/30 hover:via-purple-500/30 hover:to-cyber-secondary/30 transition-all duration-300 neon-border-pink shadow-lg hover:shadow-cyber-primary/30"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
