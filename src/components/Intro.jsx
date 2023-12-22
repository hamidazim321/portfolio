import React from "react";

export default function Intro({ className }) {
  const resume = new URL("../assets/Resume.pdf", import.meta.url).href;
  return (
    <div className={className}>
      <p className="font-sans text-center dark:text-white font-semibold text-4xl md:text-5xl">
        I'm a Software Developer
      </p>
      <p className="dark:text-white font-sans text-lg md:text-2xl sm:text-xl">
        I can help you build a product , feature or website Look through some of
        my work and experience! If you like what you see and have a project you
        need coded, don’t hesitate to contact me.
      </p>
      <a
        href={resume}
        download="Hamid-Resume.pdf"
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Get My Resume
        </span>
      </a>
    </div>
  );
}
