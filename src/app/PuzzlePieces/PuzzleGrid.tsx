// src/app/PuzzlePieces/PuzzleGrid.tsx

import React from "react";
import PuzzleImage from "./PuzzleImage";

interface PuzzleGridProps {
  pieces: { src: string; alt: string }[];
}

const PuzzleGrid: React.FC<PuzzleGridProps> = ({ pieces }) => {
  if (!pieces || pieces.length === 0) {
    return <div>No puzzle pieces available.</div>;
  }

  return (
    <div className="grid grid-cols-9 gap-2 max-md:grid-cols-3">
      {pieces.map((piece, index) => (
        <PuzzleImage key={index} src={piece.src} alt={piece.alt} />
      ))}
    </div>
  );
};

export default PuzzleGrid;
