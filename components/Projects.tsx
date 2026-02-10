import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { RESUME_DATA } from '../constants';
import { Badge } from './ui/Badge';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="Featured Projects" subtitle="Code in Action">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {RESUME_DATA.projects.map((project, idx) => (
          <div 
            key={idx}
            className="group relative flex flex-col h-full glass-panel rounded-2xl overflow-hidden hover:border-shopify/40 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-shopify via-white/20 to-shopify opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-lg text-shopify group-hover:bg-shopify group-hover:text-black transition-colors duration-300">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="View Source"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-shopify-light transition-colors"
                      aria-label="Visit Site"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <span className="text-xs font-mono text-shopify-light uppercase tracking-wider mb-2 block">
                  {project.type}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-shopify-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto pt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs py-0.5 px-2 bg-black/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};