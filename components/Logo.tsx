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
      <text
        x="0"
        y="18"
        fill="currentColor"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="18"
        letterSpacing="0.8"
      >
        NOVAMIR
      </text>
    </svg>
  );
};