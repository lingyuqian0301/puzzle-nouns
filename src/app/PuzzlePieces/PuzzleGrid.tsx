
import React from "react";
import PuzzleImage from "./PuzzleImage";

interface PuzzlePiece {
  src: string;
  alt: string;
}

interface PuzzleGridProps {
  pieces: PuzzlePiece[];
}

const PuzzleGrid: React.FC<PuzzleGridProps> = ({ pieces }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-10">
        <div className="flex">
          {pieces.slice(0, 3).map((piece, index) => (
            <PuzzleImage key={index} src={piece.src} alt={piece.alt} />
          ))}
        </div>
        <div className="flex">
          <div className="flex flex-col grow shrink-0 basis-0 w-fit">
            <div className="flex">
              {pieces.slice(3, 5).map((piece, index) => (
                <PuzzleImage key={index} src={piece.src} alt={piece.alt} />
              ))}
            </div>
            <div className="flex">
              {pieces.slice(5, 7).map((piece, index) => (
                <PuzzleImage key={index} src={piece.src} alt={piece.alt} />
              ))}
            </div>
          </div>
          <PuzzleImage
            src={pieces[7].src}
            alt={pieces[7].alt}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default PuzzleGrid;
