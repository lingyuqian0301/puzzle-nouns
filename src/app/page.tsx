
import React from "react";
import Header from "./PuzzleNouns/Header";
import Hero from "./PuzzleNouns/Hero";
import Footer from "./PuzzleNouns/Footer";
import PuzzleSteps from "./PuzzleNouns/PuzzleSteps";
const PuzzleNouns: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Header />
        <Hero />
        <PuzzleSteps />
        <Footer />
      </div>
    </div>
  );
};

export default PuzzleNouns;
