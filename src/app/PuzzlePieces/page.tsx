import React from "react";
import PuzzleGrid from "./PuzzleGrid";
import PuzzleImage from "./PuzzleImage";
import Header from "../FormArtwork/Header";
import Footer from "../PuzzleNoun/Footer";

interface PuzzlePiecesProps {}

const PuzzlePieces: React.FC<PuzzlePiecesProps> = () => {
  const smallPuzzlePieces = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ee26f0ea7b344b2983fa75d0cb08b222468584704e848236f4688ba31c7cb62?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      alt: "Puzzle piece 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8cff8cadd4a4d75179a5d78551b1b06dbf6d7c30d1ae25c0872c079a2702dfc?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      alt: "Puzzle piece 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/212aded32f1371145e656efa1d4561e8048b389afc1bf9ca2f20cae639407721?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      alt: "Puzzle piece 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cddd32dddba7eff772dcd4cdab72c0f005e8158167e59b8eb162a35eb230044?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      alt: "Puzzle piece 4",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f76aa15190eeee5f35e7654e189a0d1e5cf9126e3ea162bcc7418dc74d0166fc?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      alt: "Puzzle piece 5",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/40031fd16db51cb37727b9b867aa25a07ca8c24f0e13b50a37a5a3359320393e?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      alt: "Puzzle piece 6",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/62bf56ce33ff4332799a6161cc47e8cae3e9c60a16256207f3a25561d56397ab?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      alt: "Puzzle piece 7",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1572ef675b1be4ebcf87f8c4d3751853271b44c0fb2f329be8b4292f1bc693af?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      alt: "Puzzle piece 8",
    },
  ];

  const largePuzzlePieces = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ff2343cdd19432a08e94ddba1d66f2ae2fd55c0bd3316f074af344985b8333d?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      alt: "Large puzzle piece 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3564e2d0150f83f4272b80ae42bf0960b7c8de1d881710d3621a81b5021bd4d4?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      alt: "Large puzzle piece 2",
    },
  ];

  return (
    <>
      <Header />
      <main className="flex overflow-hidden flex-col items-center px-0 pt-32 bg-white pb-[300px] max-md:px-5 max-md:py-16">
        <section className="flex flex-col w-full max-w-[1600px] max-md:max-w-full">
          <h1 className="self-center max-md\:pt-24  font-bold text-black">
            Puzzle pieces(26/27)
          </h1>
          <div className="mt-12 w-full max-md:mt-6 max-md:max-w-full">
            <div className="flex gap-6 max-md:flex-col">
              <PuzzleGrid pieces={smallPuzzlePieces} />
              <div className="flex flex-col ml-5 w-[80%] max-md:ml-0 max-md:w-full">
                <div className="grow max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-8 max-md:flex-col">
                    {largePuzzlePieces.map((piece, index) => (
                      <PuzzleImage key={index} src={piece.src} alt={piece.alt} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PuzzlePieces;
