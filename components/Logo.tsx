import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-6 w-auto" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Novamir Logo"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/>
      <text x="28" y="18" fill="currentColor" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="18">NOVAMIR</text>
    </svg>
  );
};