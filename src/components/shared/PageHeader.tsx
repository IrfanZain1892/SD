import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  background?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, background }) => {
  return (
    <div className={`relative py-20 px-4 text-center overflow-hidden ${background || 'bg-primary'}`}>
      <div className="absolute inset-0 opacity-10">
        {/* Decorative SVG pattern */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4 drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 font-ui font-medium max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
