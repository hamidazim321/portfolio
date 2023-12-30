import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "./useScroll";
import { MdLightMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowRedoSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

export default function Header() {
  const menuBar = useRef();
  const dropDownServices = useRef();
  const dropDownAbout = useRef();
  const { scrollDirection } = useScroll();

  const handleDropDown = (e, ref) => {
    e.stopPropagation();
    ref.current.classList.toggle("hidden");
  };

  const handleTheme = (e) => {
    e.stopPropagation();
    const elem = document.querySelector("html");
    elem.classList.toggle("dark");
  };

  useEffect(() => {
    const handleClick = () => {
      menuBar.current.classList.add("hidden");
      dropDownServices.current.classList.add("hidden");
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <header
      className={`bg-white dark:bg-gray-900 border-gray-200 w-full shadow-md md:shadow-lg dark:shadow-gray-950 z-20 transition-all fixed delay-200 duration-500 ${
        scrollDirection === "down" ? "" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-4 md:px-8">
        <div>
          <span className="select-none self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Hamid
          </span>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 md:hidden dark:text-gray-400 "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={(e) => {
            handleDropDown(e, menuBar);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <FaBars className="text-2xl text-gray-700 dark:text-gray-400 " />
        </button>
        <div
          ref={menuBar}
          className={`hidden group w-full md:block md:w-auto relative ms-auto me-2`}
          id="navbar-default"
        >
          <ul
            className={`absolute w-full md:static font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md: md:flex-row gap-3 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700`}
          >
            <li className="md:dark:hover:bg-slate-900/50 md:hover:bg-slate-100/75 rounded">
              <NavLink
                to="/"
                className="md:p-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </NavLink>
            </li>

            <li className="group/about md:relative md:dark:hover:bg-slate-900/50 md:hover:bg-slate-100/75 rounded">
              <span
                onClick={(e) => handleDropDown(e, dropDownAbout)}
                className="cursor-pointer flex items-center gap-1 md:p-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <span>About</span>
                <IoIosArrowDown
                  className={`dark:text-white/50 text-black/50 font-semibold transition ease-in-out duration-200`}
                />
              </span>
              <ul
                ref={dropDownAbout}
                className={`
              md:absolute lg:group-hover/about:block hidden md:w-max w-full md:bg-white md:dark:bg-gray-900 shadow-md dark:shadow-slate-900 ps-2
              `}
              >
                <li>
                  <NavLink
                    to="/professional"
                    className="md:p-2 block py-2 px-3 text-gray-600 rounded hover:text-black md:p-0 dark:text-slate-300 dark:hover:text-white"
                  >
                    Professional
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/portfolio"
                    className="md:p-2 block py-2 px-3 text-gray-600 rounded hover:text-black md:p-0 dark:text-slate-300 dark:hover:text-white"
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/certificates"
                    className="md:p-2 block py-2 px-3 text-gray-600 rounded hover:text-black md:p-0 dark:text-slate-300 dark:hover:text-white"
                  >
                    Certificates
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="group/services md:relative md:dark:hover:bg-slate-900/50 md:hover:bg-slate-100/75 rounded">
              <span
                onClick={(e) => handleDropDown(e, dropDownServices)}
                className="cursor-pointer flex items-center gap-1 md:p-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <span>Services</span>
                <IoIosArrowDown
                  className={`dark:text-white/50 text-black/50 font-semibold transition ease-in-out duration-200`}
                />
              </span>
              <ul
                ref={dropDownServices}
                className={`
              md:absolute lg:group-hover/services:block hidden md:w-max w-full md:bg-white md:dark:bg-gray-900 shadow-md dark:shadow-slate-900 ps-2
              `}
              >
                <li>
                  <NavLink
                    to="/services/front-end"
                    className="md:p-2 block py-2 px-3 text-gray-600 rounded hover:text-black md:p-0 dark:text-slate-300 dark:hover:text-white"
                  >
                    Website
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/personal-project"
                    className="md:p-2 block py-2 px-3 text-gray-600 rounded hover:text-black md:p-0 dark:text-slate-300 dark:hover:text-white"
                  >
                    Personal Project
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/site-maintenance"
                    className="md:p-2 block py-2 px-3 text-gray-600 rounded hover:text-black md:p-0 dark:text-slate-300 dark:hover:text-white"
                  >
                    Site Maintenance
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="md:dark:hover:bg-slate-900/50 md:hover:bg-slate-100/75 rounded md:border-e-2 md:rounded-e-none">
              <NavLink
                to="/contact"
                className="md:p-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </NavLink>
            </li>
            <li className="md:dark:hover:bg-slate-900/50 md:hover:bg-slate-100/75 rounded">
              <a
                href="https://www.upwork.com/freelancers/~01092fc3fde6f6e78c"
                target="_blank"
                className="md:p-2 flex items-center gap-1 block py-2 px-3 text-gray-900 rounded bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br md:p-0 text-white"
              >
                <span>Hire Me</span>
                <IoArrowRedoSharp />
              </a>
            </li>
            <li className="flex items-center border-t-2 md:border-0">
              <button
                onClick={handleTheme}
                className="flex items-center border-0 dark:text-white text-xl md:text-2xl outline-0 text-gray-500 dark:text-white"
              >
                <span className="md:hidden text-sm block py-2 px-3 text-gray-900 dark:text-white">
                  Set Theme
                </span>
                <MdLightMode />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
