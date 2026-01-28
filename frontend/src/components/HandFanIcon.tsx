interface HandFanIconProps {
  className?: string;
}

export function HandFanIcon({ className = "w-16 h-16" }: HandFanIconProps) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Traditional Hand Fan Design */}
      <g>
        {/* Fan Blades */}
        <path d="M100 140 L60 60 Q100 50 140 60 L100 140 Z" opacity="0.9" />
        <path d="M100 140 L50 80 Q100 65 150 80 L100 140 Z" opacity="0.7" />
        <path d="M100 140 L45 100 Q100 80 155 100 L100 140 Z" opacity="0.5" />
        <path d="M100 140 L40 120 Q100 95 160 120 L100 140 Z" opacity="0.3" />
        
        {/* Fan Ribs */}
        <line x1="100" y1="140" x2="60" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <line x1="100" y1="140" x2="80" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <line x1="100" y1="140" x2="100" y2="55" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <line x1="100" y1="140" x2="120" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <line x1="100" y1="140" x2="140" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        
        {/* Handle */}
        <rect x="95" y="135" width="10" height="50" rx="5" fill="currentColor" />
        <ellipse cx="100" cy="185" rx="8" ry="12" fill="currentColor" />
        
        {/* Decorative elements */}
        <circle cx="100" cy="140" r="6" fill="currentColor" />
      </g>
    </svg>
  );
}
