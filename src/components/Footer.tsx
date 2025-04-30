
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 px-4 md:px-6 bg-cyber-dark/60">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex flex-col items-start">
              <h2 className="text-xl font-cyber font-bold neon-text-pink">Children's Picture Book Maker GPT</h2>
              <span className="text-xs text-cyber-secondary">Presented by AiWebTools.Ai</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-md">
              Create magical picture books for children with the help of AI. Bring your stories to life with custom illustrations and engaging narratives.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-cyber font-semibold mb-4 text-cyber-secondary">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://chatgpt.com/g/g-681165a604088191843a24502b3988f9-children-s-picture-book-maker-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyber-secondary transition-colors">
                  Children's Picture Book Maker GPT
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-cyber-secondary transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-cyber-secondary transition-colors">Disclaimer</a>
              </li>
              <li>
                <a href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyber-secondary transition-colors">
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-cyber font-semibold mb-4 text-cyber-secondary">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <a href="tel:+14758008096" className="text-gray-400 hover:text-cyber-secondary transition-colors">
                  (475) 800-8096
                </a>
              </li>
              <li className="flex items-center">
                <a href="mailto:Contact@ai-webtools.com" className="text-gray-400 hover:text-cyber-secondary transition-colors">
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-cyber font-semibold mb-2 text-cyber-secondary">Legal</h3>
              <div className="flex space-x-4">
                <a href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-gray-400 hover:text-cyber-secondary transition-colors">
                  Privacy Policy
                </a>
                <a href="https://aiwebtools.ai/terms-of-services" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-gray-400 hover:text-cyber-secondary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer">
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded-full bg-cyber-primary/20 border border-cyber-primary text-cyber-primary hover:bg-cyber-primary/30 transition-colors"
            >
              More AI Tools
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
