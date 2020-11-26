import React, { Fragment, useState } from "react";
import Loader from "../../comps/Loader";
import WeightsModal from "../../comps/modals/WeightsModal";
import { useQuery } from "@apollo/client";
import { GET_WEIGHTS_IMAGES } from "../../gql/queryJutsu/weightsjutsu";

export default function Steps(props) {
  const d = new Date();

  const [shown, setShown] = useState(false);
  const [userImage, setUserImage] = useState({});
  const { loading, error, data } = useQuery(GET_WEIGHTS_IMAGES);
  return (
    <Fragment>
      <div className="pt-2 pb-6 md:py-6">
        <div className="max-w-7xl flex mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Today's Steps
          </h1>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-4">
              <div className="border-gray-200 rounded-lg h-96">
                {/* start */}

                <div className="">
                  <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
                    <div className="space-y-12 ">
                      <div className="space-y-2 flex sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                          {d.toDateString()}
                        </h2>
                      </div>
                      <ul className="space-y-2 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
                        {data &&
                          data.fetchImages.map((image, i) => (
                            <button
                              key={i}
                              onClick={() => {
                                setShown(!shown);
                                setUserImage(image);
                              }}
                              className={`py-4 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left focus:outline-none`}
                            >
                              <span className={`text-white pt-4`}>
                                {image?.member?.name}
                              </span>
                              <div className="space-y-6 flex justify-center w-full xl:space-y-10">
                                <img
                                  className="h-64 rounded-sm"
                                  src={`${image.url}`}
                                  alt="steps_image"
                                />
                              </div>
                            </button>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <WeightsModal
                  setShown={setShown}
                  shown={shown}
                  userImage={userImage}
                />
                {/*end*/}
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}
