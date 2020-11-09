import React, { useState } from "react";
import { Dialog, Pane } from "evergreen-ui";

export default function Packages(props) {
  const { offer, payment, counter, setCounter } = props;

  const [toggleVip, setToggleVip] = useState(false);
  const [toggleGroup, setToggleGroup] = useState(false);
  const [toggleLife, setToggleLife] = useState(false);
  const [loading, setLoading] = useState(false);
  const [momo, setMomo] = useState("");

  const handleBack = () => {
    if (counter === 1) {
      setCounter(counter - 1);
    }
  };

  const handleVipToggle = () => {
    setToggleVip(!toggleVip);
  };
  //stepping only 160 a month, 40 a week for Ghana

  // meal plans only a month, 40 a week for Ghana

  //please call for uk prices

  // 400 for a month 300 for 3 months

  return (
    <React.Fragment>
      <div>
        <div class="bg-gray-900">
          <div class="px-4 sm:px-6 lg:px-8 lg:pt-20">
            <div class="text-center">
              <h2 class="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
                Select Package
              </h2>
              <p class="mt- text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
                The right price for you, whoever you are
              </p>
              <p class="mt-3 max-w-4xl mx-auto text-xl leading-7 text-gray-300 sm:mt-5 sm:text-2xl sm:leading-8">
                All new members pay 100 cedis for registration independent of
                the package.
              </p>
            </div>
          </div>

          <div class="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
            <div class="relative z-0">
              <div class="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3"></div>
              <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="relative lg:grid lg:grid-cols-7">
                  <div class="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                    <div class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                      <div class="flex-1 flex flex-col">
                        <div class="bg-white px-6 py-10">
                          <div>
                            <h3
                              class="text-center text-2xl leading-8 font-medium text-gray-900"
                              id="tier-hobby"
                            >
                              VIP/SOLO
                            </h3>
                            <div class="mt-4 flex items-center justify-center">
                              <span class="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900">
                                <span class="mt-2 mr-2 text-4xl font-medium">
                                  &#x20B5;
                                </span>
                                <span class="font-extrabold">200</span>
                              </span>
                              <span class="text-xl leading-7 font-medium text-gray-500">
                                /week
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                          <ul>
                            <li class="flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-green-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                Weekly face to face / zoom meetings with Reps
                                Life coach
                              </p>
                            </li>
                            <li class="mt-4 flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-green-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                Direct interaction with Reps diet coach
                              </p>
                            </li>
                            <li class="mt-4 flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-green-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                Personalised meal plans
                              </p>
                            </li>
                            <li class="mt-4 flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-green-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                Phone contact with diet coach
                              </p>
                            </li>
                          </ul>
                          <div class="mt-8">
                            <div class="rounded-lg shadow-md">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleVipToggle();
                                }}
                                class="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base leading-6 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                                aria-describedby="tier-hobby"
                              >
                                Start your trial
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                    <div class="relative z-10 rounded-lg shadow-xl">
                      <div class="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"></div>
                      <div class="absolute inset-x-0 top-0 transform translate-y-px">
                        <div class="flex justify-center transform -translate-y-1/2">
                          <span class="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white">
                            Most popular
                          </span>
                        </div>
                      </div>
                      <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
                        <div>
                          <h3
                            class="text-center text-3xl leading-9 font-semibold text-gray-900 sm:-mx-6"
                            id="tier-growth"
                          >
                            Group Membership
                          </h3>
                          <div class="mt-4 flex items-center justify-center">
                            <span class="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900 sm:text-6xl">
                              <span class="mt-2 mr-2 text-4xl font-medium">
                                &#x20B5;
                              </span>
                              <span class="font-extrabold">95</span>
                            </span>
                            <span class="text-2xl leading-8 font-medium text-gray-500">
                              /week
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                        <ul>
                          <li class="flex items-start">
                            <div class="flex-shrink-0">
                              <svg
                                class="h-6 w-6 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                              Weekly zoom meeting
                            </p>
                          </li>
                          <li class="mt-4 flex items-start">
                            <div class="flex-shrink-0">
                              <svg
                                class="h-6 w-6 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                              Weekly meal plans
                            </p>
                          </li>
                          <li class="mt-4 flex items-start">
                            <div class="flex-shrink-0">
                              <svg
                                class="h-6 w-6 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                              Tracking of activities
                            </p>
                          </li>
                          <li class="mt-4 flex items-start">
                            <div class="flex-shrink-0">
                              <svg
                                class="h-6 w-6 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                              Daily activities and challenges
                            </p>
                          </li>
                          <li class="mt-4 flex items-start">
                            <div class="flex-shrink-0">
                              <svg
                                class="h-6 w-6 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                              Weekly weigh-in
                            </p>
                          </li>
                          <li class="mt-4 flex items-start">
                            <div class="flex-shrink-0">
                              <svg
                                class="h-6 w-6 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                              Phone contact with the diet coach
                            </p>
                          </li>
                          <li class="mt-4 flex items-start">
                            <div class="flex-shrink-0">
                              <svg
                                class="h-6 w-6 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                              Walk with Reps fun day
                            </p>
                          </li>
                        </ul>
                        <div class="mt-10">
                          <div class="rounded-lg shadow-md">
                            <a
                              href="#"
                              class="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150"
                              aria-describedby="tier-growth"
                            >
                              Start your trial
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                    <div class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                      <div class="flex-1 flex flex-col">
                        <div class="bg-white px-6 py-10">
                          <div>
                            <h3
                              class="text-center text-2xl leading-8 font-medium text-gray-900"
                              id="tier-scale"
                            >
                              Life Coaching
                            </h3>
                            <div class="mt-4 flex items-center justify-center">
                              <span class="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900">
                                <span class="mt-2 mr-2 text-4xl font-medium">
                                  &#x20B5;
                                </span>
                                <span class="font-extrabold">250</span>
                              </span>
                              <span class="text-xl leading-7 font-medium text-gray-500">
                                /week
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                          <ul>
                            <li class="flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-green-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                Face to face/zoom/phone meeting with Reps life
                                coach
                              </p>
                            </li>
                            <li class="mt-4 flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-green-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                Weekly consultations
                              </p>
                            </li>
                            <li class="mt-4 flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-green-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                Specializing in emotional eating
                              </p>
                            </li>
                            <li class="mt-4 flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-green-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                Control of negative eating patterns
                              </p>
                            </li>
                          </ul>
                          <div class="mt-8">
                            <div class="rounded-lg shadow-md">
                              <a
                                href="#"
                                class="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base leading-6 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                                aria-describedby="tier-scale"
                              >
                                Start your trial
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 space-x-4 text-right sm:px-6">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleBack();
            }}
            type={"submit"}
            className="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-teal-400 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out"
          >
            Back
          </button>
        </div>
        <Dialog
          isShown={toggleVip}
          title="Payment"
          onCloseComplete={() => {
            setToggleVip(false);
            setLoading(false);
          }}
          isConfirmLoading={loading}
          onConfirm={() => setLoading(true)}
          confirmLabel={loading ? "Loading..." : "Confirm Loading"}
        >
          <div>
            <label
              htmlFor="phone_number"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Mobile Money Number
              <span className={"text-gray-400"}>(verify your momo number)</span>
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <select
                  aria-label="Country"
                  className="form-select h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm sm:leading-5"
                >
                  <option>GH</option>
                </select>
              </div>
              <input
                id="phone_number"
                defaultValue={props.contact}
                onChange={(e) => {
                  setMomo(e.target.value);
                }}
                className="form-input border p-1 focus:outline-none block w-full pl-16 sm:text-sm sm:leading-5"
                placeholder="+233 244 292 2323"
              />
            </div>
          </div>
        </Dialog>
      </div>
    </React.Fragment>
  );
}
