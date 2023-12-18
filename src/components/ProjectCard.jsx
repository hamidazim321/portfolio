import React from "react";

export default function ProjectCard({
  title,
  img,
  description,
  stacks,
  live,
  source,
}) {
  const image = new URL(`../assets/projects/${img}`, import.meta.url).href;
  return (
    <div className="group bg-slate-100 md:flex bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="md:w-1/2 md:group-odd:order-2">
        <img
          className="rounded-lg w-full m-auto"
          src={image}
          alt="project thumbnail"
        />
      </div>
      <div className="p-5  flex flex-col items-center md:items-start gap-3 md:gap-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title && title}
        </h5>
        <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">
          {description && description}
        </p>
        <ul className="flex gap-3 justify-center md:justify-start flex-wrap">
          {stacks &&
            stacks.map((stack) => (
              <li key={stack}>
                <span className="shadow-md bg-blue-100 text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  {stack}
                </span>
              </li>
            ))}
        </ul>
        <div className="flex gap-3">
          <a
            href={source}
            className="w-fit text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            View Source
          </a>
          <a
            href={live}
            className="w-fit text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            See Live
          </a>
        </div>
      </div>
    </div>
  );
}
