
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex relative flex-col px-12 pt-32 pb-10 mt-2 w-full text-6xl font-bold text-white min-h-[359px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:pt-24 max-md:max-w-full max-md:text-4xl">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/27ee40145b747cf2f2cce1954a62f6867c48715e264061ef02a0b318245f30b0?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <h2>
        "Create your Nous NFT with AI <br /> Art created by countless Nouns."
      </h2>
    </section>
  );
};

export default Hero;
