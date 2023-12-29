import React from "react";
import { FaCheck } from "react-icons/fa";
export default function ServiceMaintenance() {
  return (
    <section className="bg-white dark:bg-gray-900 pt-10 fade-in">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div
          className="w-fit mx-auto p-4 mb-4 text-sm md:text-md text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <a href="https://www.fiverr.com/hamid_azim/" target="_blank">
            Want to make a custom offer?
            <span className="font-medium"> Get in touch</span>
          </a>
        </div>
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Website Maintenance
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Is your website not performing up to your expectations? I specialize
            in troubleshooting and customizing websites to meet your specific
            preferences.
          </p>
        </div>
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white w-full">
          <h3 className="mb-4 text-2xl font-semibold">Complete Package</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            Get all services in the best price
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$15</span>
          </div>
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <FaCheck className="flex-shrink-0 text-sm text-green-500 dark:text-green-400" />
              <span>
                Delivery: <span className="font-semibold">1 day</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCheck className="flex-shrink-0 text-sm text-green-500 dark:text-green-400" />
              <span>Styles Update</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCheck className="flex-shrink-0 text-sm text-green-500 dark:text-green-400" />
              <span>Content Update</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCheck className="flex-shrink-0 text-sm text-green-500 dark:text-green-400" />
              <span>Fix Functionality</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCheck className="flex-shrink-0 text-sm text-green-500 dark:text-green-400" />
              <span>Add new features</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCheck className="flex-shrink-0 text-sm text-green-500 dark:text-green-400" />
              <span>Social Media Integration</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCheck className="flex-shrink-0 text-sm text-green-500 dark:text-green-400" />
              <span>Opt-In Form</span>
            </li>
          </ul>
          <a
            href="https://www.fiverr.com/s/3d9YVa"
            target="_blank"
            className="text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}
