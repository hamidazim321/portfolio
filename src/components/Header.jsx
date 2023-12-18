import React, { useState, useEffect } from "react";
import { DarkThemeToggle } from "flowbite-react";
import { useScroll } from "./useScroll";

export default function Header() {
  const [menuOn, setMenuOn] = useState(false);
  const { y, x, scrollDirection } = useScroll(); 

  const handleMenu = () => {
    setMenuOn((prev) => !prev);
  };

  const navigate = (id) => {
    const elem = document.querySelector(`#${id}`);
    elem.scrollIntoView({ behavior: "smooth" });
    setMenuOn(false);
  };


  return (
    <header className={`bg-white dark:bg-slate-800/75 border-gray-200 w-full shadow-md md:shadow-lg dark:shadow-slate-800 z-20 transition-all fixed delay-200 duration-500 ${scrollDirection === "down" ? '' : '-translate-y-full'}`}>
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-4 md:px-24">
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
        <DarkThemeToggle className="dark:text-white text-yellow-300 border-2 md:order-3" />
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
          className={`${
            !menuOn && "hidden"
          } w-full md:block md:w-auto relative`}
          id="navbar-default"
        >
          <ul
            className={`${
              menuOn && "absolute w-full"
            } md:static font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700`}
          >
            <li className="md:dark:hover:bg-slate-900/50 rounded">
              <a
                href="#"
                className="md:p-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => navigate("home")}
              >
                Home
              </a>
            </li>

            <li className="md:dark:hover:bg-slate-900/50 rounded">
              <a
                href="#"
                className="md:p-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => navigate("professional")}
              >
                Professional
              </a>
            </li>
            <li className="md:dark:hover:bg-slate-900/50 rounded">
              <a
                href="#"
                className="md:p-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => navigate("portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li className="md:dark:hover:bg-slate-900/50 rounded">
              <a
                href="#"
                className="md:p-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => navigate("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
