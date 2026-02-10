import React from 'react';

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  id, 
  title, 
  subtitle, 
  children,
  className = "" 
}) => {
  return (
    <section id={id} className={`py-20 lg:py-32 relative ${className}`}>
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {(title || subtitle) && (
          <div className="mb-12 lg:mb-20">
            {subtitle && (
              <span className="text-shopify-light font-mono text-sm tracking-wider uppercase mb-2 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
                {title}
                <span className="text-shopify">.</span>
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};