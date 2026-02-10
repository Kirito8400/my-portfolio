import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { RESUME_DATA } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" title="Work History" subtitle="Professional Journey">
      <div className="relative space-y-8 lg:space-y-12">
        {/* Vertical Line */}
        <div className="absolute left-4 lg:left-0 top-0 bottom-0 w-px bg-gradient-to-b from-shopify/50 via-gray-800 to-transparent lg:hidden" />

        {RESUME_DATA.experience.map((job, idx) => (
          <div key={idx} className="relative pl-12 lg:pl-0">
            {/* Timeline Dot (Mobile) */}
            <div className="absolute left-[11px] top-2 w-2.5 h-2.5 rounded-full bg-shopify ring-4 ring-black lg:hidden" />

            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              {/* Period & Company (Left side on desktop) */}
              <div className="lg:col-span-4 lg:text-right mb-4 lg:mb-0">
                <div className="sticky top-28">
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-shopify transition-colors">
                    {job.company}
                  </h4>
                  <div className="flex flex-col lg:items-end gap-2 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector (Desktop) */}
              <div className="hidden lg:flex col-span-1 justify-center relative">
                <div className="h-full w-px bg-gray-800 relative">
                  <div className={`absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${idx === 0 ? 'bg-shopify border-shopify shadow-[0_0_10px_rgba(149,191,71,0.5)]' : 'bg-dark-900 border-gray-600'}`} />
                </div>
              </div>

              {/* Details (Right side on desktop) */}
              <div className="lg:col-span-7">
                <div className="glass-panel p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-colors border-l-4 border-l-shopify/50 lg:border-l lg:border-white/5">
                  <h3 className="text-xl font-bold text-shopify-light mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-gray-500" />
                    {job.role}
                  </h3>
                  <ul className="space-y-3">
                    {job.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed group">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-shopify transition-colors flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};