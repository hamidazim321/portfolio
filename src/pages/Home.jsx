import React from "react";
import Intro from "../components/Intro";
import Overlay from "../components/Overlay";

export default function Home() {
  return (
    <div id="home" className="bg-headshot h-full relative bg-no-repeat bg-cover md:bg-contain md:bg-right bg-fixed dark:bg-slate-600">
      <div className="dark:bg-slate-600/75 bg-slate-100/75 h-full relative z-10 w-full ps-8 sm:ps-16 pt-10 pb-20 md:ps-64 pt-20">
        <p className="font-mono font-black text-8xl sm:text-9xl md:text-9xl dark:text-white lineUp">
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
      <div className="dark:bg-slate-600/75 bg-slate-100/75 pb-10 relative z-10">
        <Intro className="md:w-3/4 mx-auto dark:bg-slate-600/75 bg-slate-100/75 md:py-20 flex flex-col items-center justify-center p-4 gap-3 md:gap-5 md:shadow-black/50 md:shadow-md"/>
      </div>
    </div>
  );
}
