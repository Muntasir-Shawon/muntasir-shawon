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
      viewBox="0 0 100 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block transition-transform ${className}`}
    >
      <path
        d="M50 8 C48 14 47 18 45 20 C42 16 38 12 30 12 C18 12 8 24 2 34 C6 37 14 39 20 37 C18 42 22 46 28 47 C24 50 30 54 38 52 C42 48 46 44 50 38 C54 44 58 48 62 52 C70 54 76 50 72 47 C78 46 82 42 80 37 C86 39 94 37 98 34 C92 24 82 12 70 12 C62 12 58 16 55 20 C53 18 52 14 50 8 Z"
        fillRule="evenodd"
        clipRule="evenodd"
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
