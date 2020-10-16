import React from "react";

export default function Footer(props) {
  return (
    <React.Fragment>
      <footer
        className={"flex mt-12 items-center bg-darkgray flex-col"}
        data-aos={"fade-up"}
      >
        <div className={"mt-8"}>
          <a
            href={"#"}
            className={
              "text-white hover:text-fadedwhite text-sm font-bold transition duration-150 ease-in-out"
            }
          >
            Terms and conditions
          </a>
        </div>
        <div
          className={
            "xl:flex xl:flex-row sm:flex sm:flex-col xl:justify-center sm:justify-center md:flex md:flex-col md:justify-center  lg:flex lg:flex-col lg:justify-center"
          }
        >
          <div className={"flex flex-col p-10 w-full"}>
            <a href="#" aria-label="Home">
              <img
                className="h-16 md:h-16 w-auto sm:h-16 rounded-full"
                src="./logo.jpg"
                alt="Logo"
              />
            </a>
            <p
              className={
                "mt-2 text-base text-white sm:mt-5 font-light sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0"
              }
            >
              LOOSE WEIGHT AND OR KEEP IT OFF LOOSE WEIGHT AND OR KEEP IT OFF
            </p>
            <p
              className={
                "mt-1 text-base text-white sm:mt-5 font-light sm:text-base sm:max-w-xl sm:mx-auto md:mt-2 md:text-base lg:mx-0"
              }
            >
              MEASURE IT TO MANAGE IT
            </p>
            <p
              className={
                "mt-1 text-base text-white sm:mt-5 font-light sm:text-base sm:max-w-xl sm:mx-auto md:mt-2 md:text-base lg:mx-0"
              }
            >
              LOSE IT SHAPE IT KEEP IT
            </p>
          </div>
          <div className={"flex flex-col p-10 w-full"}>
            <h3
              className={
                "text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-2xl sm:leading-none md:text-2xl md:font-extrabold"
              }
            >
              {" "}
              Contact Us
            </h3>
            <div className={"h-1 bg-brown w-12 mt-4"}></div>

            <p
              className={
                "mt-2 text-sm font-light text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-sm lg:mx-0"
              }
            >
              repsfitness00@gmail.com
            </p>
            <p
              className={
                "text-sm text-white font-light md:font-light sm:mt-0 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-0 md:text-sm lg:mx-0"
              }
            >
              +233(0) 55 070 2382
            </p>

            <p
              className={
                "mt-3 font-light text-sm text-white sm:mt-0 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-0 md:text-sm lg:mx-0"
              }
            >
              Ablekuma (Accra-Ghana)
            </p>
          </div>
          <div className={"flex flex-col p-10 w-full"}>
            <h3
              className={
                "text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-2xl sm:leading-none md:text-2xl md:font-extrabold"
              }
            >
              Sign Up
            </h3>

            <div className={"h-1 bg-brown w-12 mt-4"}></div>

            <p
              className={
                "mt-2 text-sm text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-sm lg:mx-0"
              }
            >
              Keep me up to date with new product uploads and content updates
            </p>
          </div>
        </div>
        <div>
          <p
            className={
              "mt-2 text-sm text-lightgray text-gray-500 sm:mt-5 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-sm lg:mx-0"
            }
          >
            &#169; {new Date().getFullYear()} . All Rights Reserved.
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
}
