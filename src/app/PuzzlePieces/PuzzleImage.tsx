// src\app\PuzzlePieces\PuzzleImage.tsx

import React from "react";

interface PuzzleImageProps {
  src: string;
  alt: string;
  className?: string;
}

const PuzzleImage: React.FC<PuzzleImageProps> = ({ src, alt, className }) => {
  return (
    <div className={`w-36 h-36 flex items-center justify-center overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default PuzzleImage;
