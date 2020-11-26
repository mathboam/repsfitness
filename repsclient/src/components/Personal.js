import React, { useState } from "react";
import { toaster } from "evergreen-ui";
import ProgressBar from "./ProgressBar/progressBar";

export default function Personal(props) {
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    const {
      email,
      contact,
      firstName,
      lastName,
      illness,
      age,
      counter,
      setcouter,
      startWeight,
      setStartWeight,
    } = props;
    if (age < 0 || startWeight < 0 || age > 100 || startWeight < 10) {
      toaster.warning("Enter a Valid Age or Weight");
    } else {
      !email ||
      !contact ||
      !firstName ||
      !lastName ||
      !illness ||
      !age ||
      !startWeight
        ? toaster.warning("Fill out all the Fields")
        : setcouter(counter + 1);
    }
  };
  return (
    <React.Fragment>
      <div>
        <div className="mt-10  sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Personal Information
                </h3>
                <p className="mt-1 text-sm leading-5 text-gray-600">
                  Join us now to loose weight without the pain of exercise
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 lg:col-span-4">
                        <label
                          htmlFor="first_name"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          First name <span className={"text-red-800"}>*</span>
                        </label>
                        <input
                          id="first_name"
                          required
                          defaultValue={props.firstName}
                          value={props.firstName}
                          className="mt-1 focus:outline-none form-input block border p-1 w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          onChange={(e) => props.setFirstName(e.target.value)}
                        />
                      </div>

                      <div className="col-span-6 lg:col-span-6">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Last name <span className={"text-red-800"}>*</span>
                        </label>
                        <input
                          onChange={(e) => props.setLastName(e.target.value)}
                          id="last_name"
                          defaultValue={props.lastName}
                          value={props.lastName}
                          required
                          className="mt-1 focus:outline-none form-input border p-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                      </div>

                      <div className="md:col-span-12 col-span-6">
                        <label
                          htmlFor="illness"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Diet Related Illness
                          <span className={"text-sm text-gray-500"}>
                            (eg diabetes...)
                          </span>
                          <span className={"text-red-800"}>*</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={props.illness}
                          value={props.illness}
                          required
                          onChange={(e) => props.setIllness(e.target.value)}
                          id="illness"
                          className="mt-1 focus:outline-none form-input border p-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Age <span className={"text-red-800"}>*</span>
                        </label>
                        <input
                          type={"number"}
                          onChange={(e) => props.setAge(e.target.value)}
                          id="age"
                          required
                          defaultValue={props.age}
                          value={props.age}
                          className="mt-1 focus:outline-none form-input border p-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6  lg:col-span-10 md:col-span-9">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Current Weight
                          <span className={"text-red-800"}>*</span>
                        </label>
                        <input
                          onChange={(e) => props.setStartWeight(e.target.value)}
                          id="start_Weight"
                          required
                          type={"number"}
                          defaultValue={props.startWeight}
                          value={props.startWeight}
                          placeholder={"eg.112.6 kg"}
                          className="mt-1 focus:outline-none form-input border p-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-5">
                        <label
                          htmlFor="postal_code"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Email <span className={"text-red-800"}>*</span>
                        </label>
                        <input
                          onChange={(e) => props.setEmail(e.target.value)}
                          required
                          defaultValue={props.email}
                          value={props.email}
                          id="email_address"
                          className="mt-1 focus:outline-none form-input border p-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-7">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Phone <span className={"text-red-800"}>*</span>
                        </label>
                        <input
                          onChange={(e) => props.setContact(e.target.value)}
                          id="phone"
                          type={`number`}
                          required
                          defaultValue={props.contact}
                          value={props.contact}
                          className="mt-1 focus:outline-none form-input border p-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                      </div>

                      <div className="col-span-6 md:col-span-12">
                        <label
                          htmlFor="cover_photo"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Cover photo
                        </label>

                        <label className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            {file && !props.profile ? (
                              <div>
                                <p>{file.name}</p>
                                <ProgressBar
                                  setFile={setFile}
                                  file={file}
                                  setProfile={props.setProfile}
                                />
                              </div>
                            ) : props.profile ? (
                              <div>
                                <img
                                  src={`${props.profile}`}
                                  className={`mx-auto md:h-24 md:w-24 rounded-full my-4`}
                                />
                                <p className="text-sm text-gray-600">
                                  <span className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Image Uploaded
                                  </span>
                                </p>
                              </div>
                            ) : (
                              <div>
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-400"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                <p className="text-sm text-gray-600">
                                  <span className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Upload a profile picture
                                  </span>
                                  <input
                                    className={`hidden w-full h-full`}
                                    type={"file"}
                                    accept={".jpg,.png"}
                                    onChange={(e) => {
                                      setFile(e.target.files[0]);
                                    }}
                                  />
                                  (preferably headshot)
                                </p>
                                <p className="text-xs text-gray-500">
                                  PNG, JPG up to 10MB
                                </p>
                              </div>
                            )}
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 space-x-4 flex justify-end text-right sm:px-6">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubmit();
                      }}
                      type={"submit"}
                      className="py-2 flex space-x-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-teal-400 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out"
                    >
                      <span>Continue</span>
                      <svg
                        className={`h-5 w-5`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
