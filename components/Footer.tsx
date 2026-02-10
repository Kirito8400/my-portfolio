import React from 'react';
import { RESUME_DATA } from '../constants';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href={RESUME_DATA.contact.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-shopify transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href={`mailto:${RESUME_DATA.contact.email}`}
            className="text-gray-500 hover:text-shopify transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
           {/* Placeholder for future links */}
          <a href="#" className="text-gray-500 hover:text-shopify transition-colors">
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};