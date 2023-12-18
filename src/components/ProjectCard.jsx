import React from "react";

export default function ProjectCard({img}) {
  const image = new URL(img, import.meta.url).href
  return (
      <div className="group md:flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="md:w-1/2 md:group-odd:order-2">
          <img
            className="rounded-lg"
            src={image}
            alt=""
          />
        </div>
        <div className="p-5 flex-grow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Project Title
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Project Description
          </p>
          <ul className="flex gap-3">
            <li>
              Tech Stack
            </li>
            <li>
              Tech Stack
            </li>
            <li>
              Tech Stacks
            </li>
          </ul>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Link 1
          </a>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Link 2
          </a>
        </div>
      </div>
  );
}
