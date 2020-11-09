import React from "react";
import { toaster } from "evergreen-ui";

export default function Personal(props) {
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
    } = props;
    !email || !contact || !firstName || !lastName || !illness || !age
      ? toaster.warning("Fill out all the Fields")
      : setcouter(counter + 1);
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
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first_name"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          First name <span className={"text-red"}>*</span>
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

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Last name <span className={"text-red"}>*</span>
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

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="illness"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Diet Related Illness
                          <span className={"text-sm text-gray-500"}>
                            (eg diabetes...)
                          </span>{" "}
                          <span className={"text-red"}>*</span>
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

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Phone <span className={"text-red"}>*</span>
                        </label>
                        <input
                          onChange={(e) => props.setContact(e.target.value)}
                          id="phone"
                          required
                          defaultValue={props.contact}
                          value={props.contact}
                          className="mt-1 focus:outline-none form-input border p-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Age <span className={"text-red"}>*</span>
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

                      <div className="col-span-6 sm:col-span-3 lg:col-span-4">
                        <label
                          htmlFor="postal_code"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Email <span className={"text-red"}>*</span>
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
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 space-x-4 text-right sm:px-6">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubmit();
                      }}
                      type={"submit"}
                      className="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-teal-400 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out"
                    >
                      Continue
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
