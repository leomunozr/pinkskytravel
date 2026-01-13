import React from 'react';

interface LelePlaceholderProps {
  className?: string;
  message?: string;
}

const LelePlaceholder: React.FC<LelePlaceholderProps> = ({ className = '', message }) => {
  return (
    <div className={`flex flex-col items-center justify-center p-4 border-2 border-dashed border-pink-dusk rounded-lg bg-pink-50 ${className}`}>
      <div className="w-24 h-24 mb-2 bg-pink-200 rounded-full flex items-center justify-center">
        <span className="text-3xl" role="img" aria-label="Lele Mascot">🎎</span>
      </div>
      <p className="text-midnight-blue font-bold text-center">
        {message || "Aquí va Lele"}
      </p>
      <span className="text-xs text-gray-500 text-center">(Espacio reservado para SVG)</span>
    </div>
  );
};

export default LelePlaceholder;
