import React, { Fragment, useState } from "react";
import ProgressBar from "../../comps/ProgressBar/progressBar";
import useStorage from "../../comps/Hooks/useStorage";

export default function Steps() {
  const [todaySteps, setTodayStep] = useState(null);
  const [yeststeps, setYestSteps] = useState(null);
  return (
    <Fragment>
      <div className="pt-2 pb-6 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Steps</h1>
        </div>
        <div className="max-w-7xl h-screen mx-auto px-4 py-4 sm:px-6 md:px-8">
          {/*Replace with your content*/}
          <div className=" lg:flex lg:flex-row lg:space-x-6">
            <form className="py-4  w-full flex lg:w-1/2  space-y-4 items-center flex-col h-auto mb-24">
              <label className="border-4 flex-col w-full lg:w-full py-4 items-center justify-center flex border-dashed border-gray-200 rounded-lg h-96">
                <h1 className={`text-base font-bold`}>Upload Today's Steps</h1>
                <input
                  className={`hidden`}
                  onChange={(e) => setTodayStep(e.target.files[0])}
                  type={"file"}
                  accept={".jpg,.png"}
                />
                <div className={`text-gray-300`}>
                  <svg
                    className={`h-36 w-36`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className={`flex justify-center items-center`}>
                  {todaySteps && todaySteps.name}
                </span>
                {todaySteps && (
                  <ProgressBar
                    file={todaySteps}
                    setFile={setTodayStep}
                    category={"steps"}
                  />
                )}
                <span className="inline-flex rounded-md shadow-sm">
                  <span
                    type="button"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                  >
                    <svg
                      className={`h-4 mr-2 w-4`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                    Upload Image
                  </span>
                </span>
              </label>
            </form>
            <form
              className={`py-4 w-full flex space-y-4 lg:w-1/2 items-center flex-col h-auto mb-24`}
            >
              <label className="border-4 lg:w-full w-full flex-col py-4 items-center justify-center flex border-dashed border-gray-200 rounded-lg h-96">
                <h1 className={`text-base font-bold`}>
                  Upload yesterday's Steps
                </h1>
                <input className={`hidden`} type={"file"} />
                <div className={`text-gray-300`}>
                  <svg
                    className={`h-36 w-36`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="inline-flex rounded-md shadow-sm">
                  <span
                    type="button"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                  >
                    <svg
                      className={`h-4 mr-2 w-4`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                    Upload Image
                  </span>
                </span>
              </label>
            </form>
          </div>
          {/*End replace */}
        </div>
      </div>
    </Fragment>
  );
}
