import React, { useEffect, useState } from "react";
import { SideSheet, Pane, Heading, Card } from "evergreen-ui";

const WeightsModal = ({ shown, setShown, userImage }) => {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [newData, setNewData] = useState(null);

  return (
    <React.Fragment>
      <SideSheet
        isShown={shown}
        // onCloseComplete={() => setShown(!shown)}
        containerProps={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
        }}
      >
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding={16}>
            <Heading size={600}>Weights Calculations</Heading>
          </Pane>
        </Pane>
        <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
          <Card
            backgroundColor="white"
            elevation={0}
            height={260}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Heading>
              <img
                className="mx-auto h-full w-full xl:w-56 xl:h-56"
                src={`${userImage.url}`}
                alt=""
              />
            </Heading>
          </Card>
          <div className={`mt-4 h-64 space-y-4`}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Current weight
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  onChange={(e) => setCurrent(e.target.value)}
                  id="weight"
                  className="form-input block w-full sm:text-sm sm:leading-5 focus:outline-none"
                  placeholder="108.6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="weight"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Previous weight
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  onChange={(e) => setPrevious(e.target.value)}
                  id="weight"
                  className="form-input block w-full sm:text-sm sm:leading-5 focus:outline-none"
                  placeholder="112.6"
                />
              </div>
            </div>
          </div>
          <div className={`space-x-4 flex justify-end mt-4`}>
            <span className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setShown(false)}
                type="button"
                className="inline-flex items-center px-4 py-2 border border-indigo-700 border-transparent text-sm leading-5 font-medium rounded-md text-indigo-500 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 hover:text-white focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              >
                Cancel
              </button>
            </span>
            <span className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              >
                Save
              </button>
            </span>
          </div>
        </Pane>
      </SideSheet>
    </React.Fragment>
  );
};

export default WeightsModal;
