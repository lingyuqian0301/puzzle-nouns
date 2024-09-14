
import React from "react";
import Header from "./PuzzleNouns/Header";
import Hero from "./PuzzleNouns/Hero";
import PuzzleStep from "./PuzzleNouns/PuzzleStep";
import Footer from "./PuzzleNouns/Footer";
import PuzzleSteps from "./PuzzleNouns/PuzzleSteps";
const PuzzleNouns: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <PuzzleSteps />
      <Footer />
    </div>
  );
};

export default PuzzleNouns;
