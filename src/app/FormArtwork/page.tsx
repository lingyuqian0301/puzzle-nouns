// src/app/FormArtwork/FormArtwork.tsx

"use client"; // Marking this file as a Client Component

import React, { useState } from "react";
import Header from "./Header";
import Footer from "../PuzzleNoun/Footer";
import PuzzleGrid from "../PuzzlePieces/PuzzleGrid";
import WoodenFrame from "../PuzzlePieces/WoodenFrame"; // Adjust the import path as necessary
import Artwork from "./Artwork";

interface PuzzlePiece {
  src: string;
  alt: string;
}

const FormArtwork: React.FC = () => {
  const [showArtwork, setShowArtwork] = useState<boolean>(false);
  const smallPuzzlePieces: PuzzlePiece[] = [];

  // Create 19 blank puzzle pieces
  const blankPuzzlePieces: PuzzlePiece[] = Array.from({ length: 27 }, (_, index) => ({
    src: "https://via.placeholder.com/150?text=Blank",
    alt: `Blank puzzle piece ${index + 1}`,
  }));

  const allPuzzlePieces: PuzzlePiece[] = [...smallPuzzlePieces, ...blankPuzzlePieces];

  const [selectedPieces, setSelectedPieces] = useState<Set<number>>(new Set());

  const handleSelect = (index: number) => {
    setSelectedPieces((prev) => {
      const newSelected = new Set(prev);
      if (newSelected.has(index)) {
        newSelected.delete(index);
      } else {
        newSelected.add(index);
      }
      return newSelected;
    });
  };

  // Handler to select all pieces
  const handleSelectAll = () => {
    const allIndices = allPuzzlePieces.map((_, index) => index);
    setSelectedPieces(new Set(allIndices));
  };

  // Check if all 27 pieces are selected
  const allSelected = selectedPieces.size === allPuzzlePieces.length;

  // Handler for "Form an Artwork" button
  const handleFormArtwork = () => {
    // Placeholder for future functionality
    // For example, opening a modal or navigating to another page
    setShowArtwork(true);
    console.log("Form an Artwork button clicked!");
    alert("Form an Artwork functionality to be implemented.");
  };

  return (
    <div className="flex overflow-hidden flex-col bg-white min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center px-4 pt-12 pb-24">
        <section className="w-full max-w-6xl">
          <h1 className="text-center text-2xl font-bold mb-4">
            Puzzle pieces (27/27)
          </h1>
          {/* "Select All" Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={handleSelectAll}
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${allSelected
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600 text-white"
                }`}
              disabled={allSelected}
            >
              {allSelected ? "All Selected" : "Select All"}
            </button>
          </div>
          <WoodenFrame>
            <PuzzleGrid
              pieces={allPuzzlePieces}
              selectedPieces={selectedPieces}
              onSelect={handleSelect}
            />
          </WoodenFrame>
          <div className="mt-4 text-center text-lg">
            Selected Pieces: {selectedPieces.size}/{allPuzzlePieces.length}
          </div>
          {allSelected && (
            <button
              onClick={handleFormArtwork}
              className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              Form an Artwork
            </button>
          )}
        </section>
      </main>
      {showArtwork && <Artwork />}
      <Footer />
    </div>
  );
};

export default FormArtwork;
