import React from "react";

interface BatInsigniaProps {
  className?: string;
  size?: number;
}

export const BatInsignia: React.FC<BatInsigniaProps> = ({
  className = "w-6 h-6 text-bat-gold",
  size = 24,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 50"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block transition-transform ${className}`}
    >
      <path
        d="M50,15 C47,7 44,2 42,0 C42,7 39,12 30,12 C18,12 8,24 0,32 C6,34 14,35 20,33 C18,38 22,42 28,43 C23,46 30,50 38,48 C43,44 47,38 50,32 C53,38 57,44 62,48 C70,50 77,46 72,43 C78,42 82,38 80,33 C86,35 94,34 100,32 C92,24 82,12 70,12 C61,12 58,7 58,0 C56,2 53,7 50,15 Z"
      />
    </svg>
  );
};

export const WayneTechSeal: React.FC<{ className?: string; size?: number }> = ({
  className = "w-8 h-8 text-bat-gold",
  size = 32,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <polygon
        points="50,4 94,28 94,76 50,96 6,76 6,28"
        stroke="currentColor"
        strokeWidth="3"
        fill="rgba(245, 197, 24, 0.05)"
      />
      <polygon
        points="50,14 84,33 84,71 50,86 16,71 16,33"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 2"
        opacity="0.6"
      />
      {/* Wayne 'W' Geometric Logo */}
      <path
        d="M26 34 L38 68 L50 44 L62 68 L74 34 L66 34 L58 58 L50 40 L42 58 L34 34 Z"
        fill="currentColor"
      />
    </svg>
  );
};
