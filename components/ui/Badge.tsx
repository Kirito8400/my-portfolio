import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'shopify';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const baseStyles = "px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-colors duration-200";
  
  const variants = {
    default: "bg-white/10 text-white hover:bg-white/20 border border-white/5",
    outline: "border border-white/20 text-gray-300 hover:border-white/40",
    shopify: "bg-shopify/10 text-shopify-light border border-shopify/20 hover:bg-shopify/20"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};