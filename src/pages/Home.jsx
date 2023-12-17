import React from "react";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div className="bg-headshot relative bg-no-repeat bg-cover md:bg-contain md:bg-right bg-fixed">
      <div className="dark:bg-slate-600/75 h-full relative z-10 w-full ps-8 sm:ps-16 pt-10 pb-20 sm:ps-20% md:ps-64">
        <p className="font-mono font-black text-8xl sm:text-9xl md:text-9xl tracking-wide dark:text-white">
          I<span className="text-lime-400">&#39;</span>M <br />
          Hamid
          <br />
          Azim<span className="text-lime-400">&#x2e;</span>
        </p>
        <p className="font-sans dark:text-slate-100 text-xl sm:text-2xl md:text-2xl antialiased">
          Front End Web developer <span>&#x26;</span> <br />
          Freelancer
        </p>
      </div>
      <div className="dark:bg-slate-600/75 pb-10 relative z-10">
        <Intro className="md:w-3/4 mx-auto dark:bg-slate-600 flex flex-col items-center justify-center p-4 gap-3 md:gap-5 md:shadow-black/50 md:shadow-md"/>
      </div>
      <div className="absolute w-full h-full dark:bg-slate-600/25 left-0 right-0 top-0 bottom-0 z-0"></div>
    </div>
  );
}
