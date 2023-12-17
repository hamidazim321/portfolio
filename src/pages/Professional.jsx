import React from "react";
import Overlay from "../components/Overlay";

export default function Professional() {
  return (
    <div className="relative bg-black/50">
      <div className="relative z-10 p-4 flex flex-col items-center justify-center gap-3">
        <p className="dark:text-white font-mono font-black text-3xl sm:text-4xl md:text-5xl">
          <span className="me-2 dark:text-white/50 text-black/50">01</span>Professional
        </p>
        <p className="font-sans font-normal dark:text-white text-xl sm:text-2xl md:text-2xl">
          My Knowledge level in tech stacks
        </p>
      </div>
      <Overlay />
    </div>
  );
}
