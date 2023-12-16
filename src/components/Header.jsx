import React, { useState } from "react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

export default function Header() {
  const [menuOn, setMenuOn] = useState(false);

  const handleMenu = () => {
    setMenuOn((prev) => !prev);
  };

  return (
      <nav className="bg-white dark:bg-slate-600 border-gray-200 w-full shadow-md md:shadow-lg dark:shadow-slate-800 relative z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-4 md:px-24">
          <a
          href="https://www.linkedin.com/in/hamid-azim/"
          className="select-none"
          >
            {/* <img
            Logo
          /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Hamid
            </span>
          </a>
          <DarkThemeToggle className="dark:text-white text-yellow-300 border-2 md:order-3"/>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={handleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5 text-black dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${!menuOn && "hidden"} w-full md:block md:w-auto relative`}
            id="navbar-default"
          >
            <ul className={`${menuOn && 'absolute w-full'} md:static font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700`}>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Professional
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}