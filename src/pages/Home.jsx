import React from "react";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div
      id="home"
      className="bg-headshot relative bg-no-repeat bg-cover md:bg-contain md:bg-right bg-fixed fade-in"
    >
      <div className="dark:bg-gray-900/75 bg-gray-300/75 h-full relative z-10 w-full ps-8 sm:ps-16 pt-10 pb-20 md:ps-64 pt-20">
        <p className="font-mono font-black text-8xl sm:text-9xl md:text-9xl dark:text-white line-up">
          I<span className="text-lime-400">'</span>M <br />
          Hamid
          <br />
          Azim<span className="text-lime-400">.</span>
        </p>
        <p className="font-sans dark:text-slate-100 text-xl sm:text-2xl md:text-2xl antialiased">
          Front End Web developer <span>&</span> <br />
          Freelancer
        </p>
      </div>
      <div className="dark:bg-gray-900/75 bg-gray-300/75 pb-10 relative z-10">
        <Intro className="md:w-3/4 mx-auto dark:bg-gray-900 bg-gray-100 md:py-20 flex flex-col items-center justify-center p-4 gap-3 md:gap-5 shadow-gray-900 dark:shadow-black md:shadow-md" />
      </div>
    </div>
  );
}
