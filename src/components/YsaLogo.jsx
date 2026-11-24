import React from 'react';
import { Link } from 'react-router-dom';

export const YsaLogo = ({ className = '', size = 'md', isDark = true, linkTo = '/' }) => {
  const scaleConfig = {
    sm: { height: 'h-6' },
    md: { height: 'h-8 sm:h-9' },
    lg: { height: 'h-10 sm:h-12' },
    xl: { height: 'h-14 sm:h-16' },
  };

  const current = scaleConfig[size] || scaleConfig.md;

  const logoContent = (
    <div 
      className={`inline-flex items-center select-none transition-transform duration-300 hover:opacity-95 ${className}`}
      aria-label="YSA MEDIA"
    >
      <img
        src="/logo.png"
        alt="YSA MEDIA"
        className={`${current.height} w-auto object-contain`}
      />
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-signature-red">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default YsaLogo;
