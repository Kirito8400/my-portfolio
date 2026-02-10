import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { RESUME_DATA } from '../constants';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <SectionWrapper id="education" className="py-10">
      <div className="flex flex-col md:flex-row gap-6">
        {RESUME_DATA.education.map((edu, idx) => (
            <div key={idx} className="flex-1 glass-panel p-6 rounded-xl flex items-start gap-4 hover:border-shopify/20 transition-colors">
            <div className="p-3 bg-white/5 rounded-lg text-shopify">
                <GraduationCap className="w-6 h-6" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                <p className="text-shopify-light text-sm mb-1">{edu.institution}</p>
                <p className="text-gray-500 text-xs uppercase tracking-wide">{edu.location}</p>
            </div>
            </div>
        ))}
      </div>
    </SectionWrapper>
  );
};