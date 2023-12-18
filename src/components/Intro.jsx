import React from "react";

export default function Intro({ className }) {
  return (
    <div className={className}>
      <p className="font-sans dark:text-white font-semibold text-4xl md:text-5xl">
        Intro
      </p>
      <p className="dark:text-white font-sans text-lg md:text-2xl sm:text-xl">
        I'M A PARAGRAPH. CLICK HERE TO ADD YOUR OWN TEXT AND EDIT ME. IT’S EASY.
        JUST CLICK “EDIT TEXT” OR DOUBLE CLICK ME TO ADD YOUR OWN CONTENT AND
        MAKE CHANGES TO THE FONT. FEEL FREE TO DRAG AND DROP ME ANYWHERE YOU
        LIKE ON YOUR PAGE.
      </p>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Get My Resume
        </span>
      </button>
    </div>
  );
}
