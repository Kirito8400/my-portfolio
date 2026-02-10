import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-shopify/10 rounded-full blur-[120px] opacity-30 animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] opacity-20" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-shopify-light text-sm font-medium mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-shopify opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-shopify"></span>
            </span>
            Available for freelance projects
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight animate-fade-in-up [animation-delay:200ms]">
            <span className="block text-white">I build high-performance</span>
            <span className="block gradient-accent">eCommerce experiences.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
            {RESUME_DATA.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-in-up [animation-delay:600ms]">
            <a 
              href="#contact"
              className="px-8 py-4 bg-shopify text-white rounded-full font-semibold flex items-center gap-2 hover:bg-shopify-dark transition-all transform hover:scale-105 shadow-lg shadow-shopify/25"
            >
              Let's Talk <ArrowRight className="w-4 h-4" />
            </a>
            
            <a 
              href={RESUME_DATA.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 text-white hover:bg-white/10 border border-white/5 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a 
              href={`mailto:${RESUME_DATA.contact.email}`} 
              className="p-4 rounded-full bg-white/5 text-white hover:bg-white/10 border border-white/5 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
};