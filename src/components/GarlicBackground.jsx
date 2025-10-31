// Decorative garlic SVG component for background
export const GarlicBackground = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Garlic bulb illustration */}
      <g opacity="0.5">
        {/* Main bulb body */}
        <ellipse cx="100" cy="120" rx="50" ry="55" fill="currentColor" />
        
        {/* Individual cloves */}
        <path d="M100,70 Q85,85 85,105 Q85,115 95,120 Q100,122 100,70 Z" fill="currentColor" opacity="0.8" />
        <path d="M100,70 Q115,85 115,105 Q115,115 105,120 Q100,122 100,70 Z" fill="currentColor" opacity="0.8" />
        
        {/* Stem/sprout at top */}
        <path d="M95,65 Q95,40 90,30 Q88,25 90,20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M105,65 Q105,45 108,35 Q110,28 108,22" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
        
        {/* Root base */}
        <ellipse cx="100" cy="165" rx="35" ry="12" fill="currentColor" opacity="0.6" />
        
        {/* Texture lines on bulb */}
        <path d="M75,110 Q100,115 125,110" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
        <path d="M70,130 Q100,135 130,130" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
        <path d="M75,145 Q100,150 125,145" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
};

// Small garlic icon for logo
export const GarlicIcon = ({ className = "", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {/* Simplified garlic bulb */}
        <ellipse cx="12" cy="14" rx="5.5" ry="6" fill="currentColor" />
        
        {/* Clove division */}
        <line x1="12" y1="9" x2="12" y2="19" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
        
        {/* Stem */}
        <path d="M11,9 Q11,5 10,3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M13,9 Q13,6 14,4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
};
