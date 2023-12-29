import React, { useState } from "react";
import { useScroll } from "./useScroll";
import { MdLightMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  const [dropdown, setDropdown] = useState([false, false]);
  const { scrollDirection } = useScroll();

  const handleDropdown = (n) => {
    setDropdown((prev) =>
      prev.map((value, index) => (index === n ? !value : value))
    );
  };

  const handleTheme = () => {
    const elem = document.querySelector("html");
    elem.classList.toggle("dark");
  };

  return (
    <header
      className={`bg-white dark:bg-gray-900 border-gray-200 w-full shadow-md md:shadow-lg dark:shadow-gray-950 z-20 transition-all fixed delay-200 duration-500 ${
        scrollDirection === "down" ? "" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-4 md:px-24">
        <a
          href="https://www.linkedin.com/in/hamid-azim/"
          className="select-none"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Hamid
          </span>
        </a>
        <button
          onClick={handleTheme}
          className="border-0 dark:text-white text-xl md:text-2xl outline-0 text-yellow-300  md:order-3"
        >
          <MdLightMode />
        </button>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => handleDropdown(0)}
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
            !dropdown[0] && "hidden"
          } w-full md:block md:w-auto relative`}
          id="navbar-default"
        >
          <ul
            className={`${
              dropdown[0] && "absolute w-full"
            } md:static font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row gap-3 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700`}
          >
            <li className="md:dark:hover:bg-slate-900/50 md:hover:bg-slate-100/75 rounded">
              <NavLink
                onClick={() => handleDropdown(0)}
                to="/"
                className="md:p-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </NavLink>
            </li>

            <li className="md:dark:hover:bg-slate-900/50 md:hover:bg-slate-100/75 rounded">
              <NavLink
                onClick={() => handleDropdown(0)}
                to="/professional"
                className="md:p-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Professional
              </NavLink>
            </li>
            <li className="md:dark:hover:bg-slate-900/50 md:hover:bg-slate-100/75 rounded">
              <NavLink
                onClick={() => handleDropdown(0)}
                to="/portfolio"
                className="md:p-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="md:dark:hover:bg-slate-900/50 md:hover:bg-slate-100/75 rounded">
              <NavLink
                onClick={() => handleDropdown(0)}
                to="/contact"
                className="md:p-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </NavLink>
            </li>
            <li className="md:relative md:dark:hover:bg-slate-900/50 md:hover:bg-slate-100/75 rounded">
              <span
                onClick={() => handleDropdown(1)}
                className="cursor-pointer flex items-center gap-1 md:p-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <span >Services</span>
                <IoIosArrowDown 
                className={`${dropdown[1] && "rotate-180"} dark:text-white/50 text-black/50 font-semibold transition ease-in-out duration-200`} />
              </span>
              <ul
                className={`
              ${!dropdown[1] && "hidden"}
              md:absolute md:w-max w-full md:bg-white md:dark:bg-gray-900 shadow-md dark:shadow-slate-900 ps-2
              `}
              >
                <li>
                  <NavLink
                    onClick={() => {
                      handleDropdown(0);
                      handleDropdown(1);
                    }}
                    to="services/front-end"
                    className="md:p-2 block py-2 px-3 text-gray-600 rounded hover:text-black md:p-0 dark:text-slate-300 dark:hover:text-white"
                  >
                    Website
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      handleDropdown(0);
                      handleDropdown(1);
                    }}
                    className="md:p-2 block py-2 px-3 text-gray-600 rounded hover:text-black md:p-0 dark:text-slate-300 dark:hover:text-white"
                  >
                    Personal Project
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
