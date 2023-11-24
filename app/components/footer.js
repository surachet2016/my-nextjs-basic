import React from "react";


export default function Footer() {
  return (
    <div className="flex justify-center space-x-4">
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 px-6 text-center md:justify-between">
        <div color="blue-gray" className="font-normal">
          &copy; 2023 My Website used Tailwind
        </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <div
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </div>
          </li>
          <li>
            <div
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </div>
          </li>
          <li>
            <div
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </div>
          </li>
          <li>
            <div
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
