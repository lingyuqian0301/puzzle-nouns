
import React from "react";

interface PuzzleImageProps {
  src: string;
  alt: string;
  className?: string;
}

const PuzzleImage: React.FC<PuzzleImageProps> = ({
  src,
  alt,
  className = "",
}) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-contain shrink-0 max-w-full aspect-[0.98] w-[300px] ${className}`}
    />
  );
};

export default PuzzleImage;
