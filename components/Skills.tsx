import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { Badge } from './ui/Badge';
import { RESUME_DATA } from '../constants';
import { Layout, ShoppingBag, Server, Database } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'layout': <Layout className="w-6 h-6" />,
  'shopping-bag': <ShoppingBag className="w-6 h-6" />,
  'server': <Server className="w-6 h-6" />,
  'database': <Database className="w-6 h-6" />,
};

export const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="Technical Expertise" subtitle="My Arsenal">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {RESUME_DATA.skills.map((category, idx) => (
          <div 
            key={idx}
            className="group p-8 glass-panel rounded-2xl hover:border-shopify/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-white/5 text-shopify group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {iconMap[category.icon]}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-shopify-light transition-colors">
                {category.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant={category.title.includes("Shopify") ? "shopify" : "default"}
                  className="bg-black/40 backdrop-blur-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};