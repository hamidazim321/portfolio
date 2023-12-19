import React from "react";
import Overlay from "../components/Overlay";

export default function Contact() {
  return (
    <section className="bg-headshot h-full relative bg-no-repeat bg-cover md:bg-contain md:bg-right bg-fixed dark:bg-slate-600">
      <div className="dark:bg-slate-600/75 pb-10 relative z-10 py-20">
        <div
          id="contact"
          className="md:w-3/4 mx-auto dark:bg-slate-600/75 bg-slate-100/75 md:py-20 flex flex-col items-center justify-center p-4 md:p-20 gap-3 md:gap-5 md:shadow-black/50 md:shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col w-full items-center md:items-start md:w-1/2 gap-3 md:gap-7 ">
              <p className="font-sans dark:text-white font-normal text-3xl md:text-4xl">
                Contact
              </p>
              <p className="dark:text-white/75 font-sans text-sm md:text-md">
                I'M A PARAGRAPH. CLICK HERE TO ADD YOUR OWN TEXT AND EDIT ME.
                IT’S EASY. JUST CLICK “EDIT TEXT” OR DOUBLE CLICK ME TO ADD YOUR
                OWN CONTENT AND MAKE CHANGES TO THE FONT. FEEL FREE TO DRAG AND
                DROP ME ANYWHERE YOU LIKE ON YOUR PAGE.
              </p>
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <form className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row gap-3">
                  <div>
                    <label
                      htmlFor="name"
                      className="block  text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Hammad"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Hammad"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
                <div>
                  <button className="relative w-full inline-flex items-center justify-center  overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                      Send
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            Social Icons
          </div>
        </div>
      </div>
      <Overlay darkColor={"slate-600/25"} />
    </section>
  );
}
