import React, { Fragment, Suspense } from "react";
import { useQuery } from "@apollo/client";
import { GET_MEMBERS } from "../../gql/queryJutsu/membersJutsu";
import { BeatLoader } from "react-spinners";
import { toaster } from "evergreen-ui";

const LoadingComponent = () => {
  return (
    <Fragment>
      <div
        style={{
          height: "100%",
          width: "100v%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BeatLoader color="#3C94A3" size={10} />
      </div>
    </Fragment>
  );
};

export default function MembersTable() {
  const { loading, error, data } = useQuery(GET_MEMBERS);
  if (error) {
    toaster.warning(error);
  }
  return (
    <Fragment>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Contact
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Package
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {data &&
                        data.fetchMembers.map((member, i) => (
                          <tr key={i}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={`${member.profile}`}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {member.name}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {member.email}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {member.contact}
                              </div>
                              <div className="text-sm text-gray-500">
                                Ghanaian
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {member.package}
                              </span>
                            </td>

                            <td className="px-6 py-4 flex whitespace-nowrap text-right text-sm font-medium">
                              <svg
                                className="mr-4 h-6 w-6 text-teal-500 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                              </svg>
                              <svg
                                className="mr-4 h-6 w-6 text-red-500 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
