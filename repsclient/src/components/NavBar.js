import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function NavBar({ toggler, setToggler }) {
  const currentUrl = useParams();
  const [toggleMiniNav, setToggleMiniNav] = useState(false);

  console.log(currentUrl);
  const [url, setUrl] = useState("");
  return (
    <React.Fragment>
      <nav className="mt-2" data-aos={"zoom-in"}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={() => setToggleMiniNav(!toggleMiniNav)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1  flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="">
                <img
                  className="block lg:hidden h-16 w-auto rounded-full"
                  src="./logo.jpg"
                  alt="Workflow logo"
                />
                <img
                  className="hidden lg:block h-16 w-auto rounded-full"
                  src="./logo.jpg"
                  alt="Workflow logo"
                />
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                <div className={"flex flex-row justify-center items-center"}>
                  <Link
                    to={"/"}
                    className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-black focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    Home
                  </Link>
                </div>
                <div className={"flex flex-row justify-center items-center"}>
                  <Link
                    to={"/programs"}
                    className="text-black px-3 py-2 rounded-md text-sm font-medium leading-5 text-black hover:text-teal-400 hover:bg-gray-700 focus:outline-none focus:text- focus:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    Programs
                  </Link>
                </div>
                <div className={"flex flex-row justify-center items-center"}>
                  <Link
                    to={"/lifecoaching"}
                    className="text-black px-3 py-2 rounded-md text-sm font-medium leading-5 text-black hover:text-teal-400 hover:bg-gray-700 focus:outline-none focus:text-teal-400 focus:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    Life Coaching
                  </Link>
                </div>
                <div className={"flex flex-row justify-center items-center"}>
                  <Link
                    to={"/accountability"}
                    className="text-black px-3 py-2 rounded-md text-sm font-medium leading-5 text-black hover:text-teal-400 hover:bg-gray-700 focus:outline-none focus:text-teal-400 focus:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    Accountability
                  </Link>
                </div>
                <div className={"flex flex-row justify-center items-center"}>
                  <Link
                    to={"/testimonials"}
                    href="#"
                    className="text-black px-3 py-2 rounded-md text-sm font-medium leading-5 text-black hover:text-teal-400 hover:bg-gray-700 focus:outline-none focus:text-teal-400 focus:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    Testimonies
                  </Link>
                </div>
                <div className={"flex flex-row justify-center items-center"}>
                  <Link
                    onClick={() => {
                      setUrl("support");
                    }}
                    to={"/support"}
                    className={
                      url == "support"
                        ? "text-black px-3 text-teal-400 py-2 rounded-md text-sm font-medium leading-5 hover:text-teal-400 hover:bg-gray-700 focus:outline-none focus:text-teal-400 focus:bg-gray-700 transition duration-150 ease-in-out bg-gray-700"
                        : "text-black px-3 py-2 rounded-md text-sm font-medium leading-5 text-black hover:text-teal-400 hover:bg-gray-700 focus:outline-none focus:text-teal-400 focus:bg-gray-700 transition duration-150 ease-in-out"
                    }
                  >
                    Support Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`hidden sm:hidden bg-gray-800`}
          style={{ display: toggleMiniNav ? "block" : "none" }}
        >
          <div className="px-2 pt-2 pb-3">
            <Link
              to={"/"}
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              Home
            </Link>
            <Link
              to={"/programs"}
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              Programs
            </Link>
            <Link
              to={"/support"}
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              Support Services
            </Link>
            <a
              href="#"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
