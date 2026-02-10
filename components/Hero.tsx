import React from 'react';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden selection:bg-shopify selection:text-black">
      {/* Background - Clean & Modern */}
      <div className="absolute inset-0 z-0 bg-dark-900">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] pointer-events-none" />
        
        {/* Ambient Glows */}
        <div className="absolute top-[-20%] right-[-5%] w-[600px] h-[600px] bg-shopify/10 rounded-full blur-[120px] opacity-30 animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] opacity-30 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:items-start items-center text-center md:text-left">
            
            {/* Status Badge */}
            <div className="mb-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/5 backdrop-blur-md text-shopify-light text-sm font-medium hover:bg-white/10 transition-colors cursor-default ring-1 ring-white/5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-shopify opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-shopify"></span>
                </span>
                Available for freelance projects
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] animate-fade-in-up [animation-delay:200ms]">
              <span className="block text-white">Building scalable</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-shopify via-white to-shopify-light pb-2">
                eCommerce solutions.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
              Senior Shopify Developer specializing in high-performance custom themes, headless storefronts, and seamless app integrations that drive growth.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-5 animate-fade-in-up [animation-delay:600ms] w-full sm:w-auto">
              <a 
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-shopify text-black rounded-full font-bold text-base flex items-center justify-center gap-2 hover:bg-shopify-light transition-all transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(149,191,71,0.3)]"
              >
                Start a Project <ArrowRight className="w-5 h-5" />
              </a>
              
              <div className="flex items-center gap-3">
                <a 
                  href={RESUME_DATA.contact.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5 transition-all hover:scale-110 hover:border-white/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                
                <a 
                  href={`mailto:${RESUME_DATA.contact.email}`} 
                  className="p-4 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5 transition-all hover:scale-110 hover:border-white/20"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-3 hidden md:flex opacity-50 animate-pulse">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
};