
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between self-end mr-9 w-full max-w-[1168px] max-md:mr-2.5 max-md:max-w-full">
      <nav className="flex flex-wrap gap-10 items-start self-start max-md:max-w-full">
        <h1 className="text-xl font-bold uppercase text-zinc-500">
          Puzzle Nouns
        </h1>
        <ul className="mt-3 text-lg text-black">
          <li className="inline-block mr-4">
            <a href="#" className="text-zinc-500">
              Home
            </a>
          </li>
          <li className="inline-block mr-4">
            <a href="#">About us</a>
          </li>
          <li className="inline-block">
            <a href="#">Event</a>
          </li>
        </ul>
      </nav>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4efa881f390809658c373c41f193a7101d3b49be86d2e68002618c658c1d3b82?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
        alt=""
        className="object-contain shrink-0 aspect-[1.05] w-[45px]"
      />
    </header>
  );
};

export default Header;
