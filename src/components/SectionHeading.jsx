import React from "react";

export default function SectionHeading({headingIndex, heading, desc }) {
  return (
    <div className="relative z-10 p-4 flex flex-col items-center justify-center gap-3">
      <p className="dark:text-white font-mono font-black text-3xl sm:text-4xl md:text-5xl">
        {headingIndex && (
          <span className="me-2 dark:text-white/50 text-black/50">01</span>
        )}
        {heading}
      </p>
      {desc && (
        <p className="font-sans font-normal dark:text-white text-xl sm:text-2xl md:text-2xl">
          My Knowledge level in tech stacks
        </p>
      )}
    </div>
  );
}
