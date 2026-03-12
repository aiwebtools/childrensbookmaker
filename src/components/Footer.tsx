
import React from 'react';
import { Link } from 'react-router-dom';

const AIWEBTOOLS_URL = "https://aiwebtools.lovable.app/?via=aiwebtools";

const Footer = () => {
  return (
    <footer className="py-10 md:py-12 px-4 md:px-6 bg-cyber-dark/60">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex flex-col items-start">
              <h2 className="text-lg md:text-xl font-cyber font-bold neon-text-pink">Children's Picture Book Maker GPT</h2>
              <span className="text-xs text-cyber-secondary">Presented by AiWebTools.Ai</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-md">
              Create magical picture books for children with the help of AI. Bring your stories to life with custom illustrations and engaging narratives.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-cyber font-semibold mb-4 text-cyber-secondary">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://chatgpt.com/g/g-681165a604088191843a24502b3988f9-children-s-picture-book-maker-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyber-secondary transition-colors text-sm">
                  Children's Picture Book Maker GPT
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-cyber-secondary transition-colors text-sm">FAQ</a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-cyber-secondary transition-colors text-sm">Disclaimer</a>
              </li>
              <li>
                <a href={AIWEBTOOLS_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyber-secondary transition-colors text-sm">
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-cyber font-semibold mb-4 text-cyber-secondary">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+14758008096" 
                   className="text-gray-400 hover:text-cyber-secondary transition-colors text-sm">
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a href="mailto:Contact@ai-webtools.com" 
                   className="text-gray-400 hover:text-cyber-secondary transition-colors text-sm break-all">
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-cyber font-semibold mb-2 text-cyber-secondary">Legal</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <a href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-gray-400 hover:text-cyber-secondary transition-colors">
                  Privacy Policy
                </a>
                <a href="https://aiwebtools.lovable.app/disclaimers" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-gray-400 hover:text-cyber-secondary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            <a href={AIWEBTOOLS_URL} 
               target="_blank" 
               rel="noopener noreferrer">
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </p>
          <a 
            href={AIWEBTOOLS_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-full bg-cyber-primary/20 border border-cyber-primary text-cyber-primary hover:bg-cyber-primary/30 transition-colors text-sm"
          >
            More AI Tools
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
