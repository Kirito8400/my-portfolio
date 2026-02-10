import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { RESUME_DATA } from '../constants';
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-900 to-black border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-shopify-light font-mono text-sm tracking-wider uppercase mb-4 block">Get in touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to scale your <span className="text-shopify">Shopify</span> store?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Whether you need a custom theme, a complex app, or performance optimization, I'm here to help you build the best eCommerce experience.
            </p>
            
            <div className="space-y-4">
              <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-shopify group-hover:text-black transition-colors">
                    <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">{RESUME_DATA.contact.email}</span>
              </a>
              <a href={`tel:${RESUME_DATA.contact.phone}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-shopify group-hover:text-black transition-colors">
                    <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg">{RESUME_DATA.contact.phone}</span>
              </a>
              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-500">
                    <MapPin className="w-5 h-5" />
                </div>
                <span className="text-lg">{RESUME_DATA.contact.location}</span>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-shopify/20 blur-[60px] rounded-full" />
            
            <h3 className="text-2xl font-bold text-white mb-6">Connect</h3>
            <div className="grid gap-4">
               <a 
                href={RESUME_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
               >
                 <div className="flex items-center gap-3">
                   <Linkedin className="w-5 h-5 text-blue-400" />
                   <span className="font-medium text-gray-200">LinkedIn</span>
                 </div>
                 <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Arif Khan. Built with React & Tailwind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};