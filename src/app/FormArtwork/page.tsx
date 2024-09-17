
import React from "react";
import Header from "./Header";
import ImageSection from "./ImageSection";
import SearchBar from "./SearchBar";
import Footer from "../PuzzleNoun/Footer";
const MyComponent: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col pt-12 bg-white">
      <Header />
      <main>
        <ImageSection />
        <SearchBar />
      </main>
      <Footer />
    </div>
  );
};

export default MyComponent;
