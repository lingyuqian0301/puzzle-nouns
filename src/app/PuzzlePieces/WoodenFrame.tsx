// src\app\PuzzlePieces\WoodenFrame.tsx

import React from "react";

interface WoodenFrameProps {
  children: React.ReactNode;
}

const WoodenFrame: React.FC<WoodenFrameProps> = ({ children }) => {
  return (
    <div className="wooden-frame p-8 bg-[#deb887] border-8 border-[#8b4513] rounded-lg shadow-lg">
      {children}
    </div>
  );
};

export default WoodenFrame;
