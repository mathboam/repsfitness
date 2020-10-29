import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Footer from "../../components/Footer";
export default function LandingPage() {
  const images = ["./test2.jpg", "./test3.jpg", "./test4.jpg", "./test6.jpg"];
  return (
    <React.Fragment>
      <div className={"md:w-screen border-4"}>
        <NavBar />
        {/*before & after*/}
        <div
          className={
            "relative bg-white flex justify-center  overflow-hidden mt-12 md:mt-12 mb-12 md:mb-12 flex-col"
          }
        >
          <div
            className={"flex justify-center items-center w-full"}
            data-aos={"fade-up"}
          >
            <h2 className="text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-2xl sm:leading-none md:text-2xl">
              Before & After
            </h2>
          </div>
        </div>
        <div
          className={"flex flex-col justify-center items-center w-full"}
          data-aos={"fade-up"}
        >
          <div className={"testimonialsContainer w-11/12 mt-8"}>
            <Carousel className={"h-full flex flex-col"}>
              <div className={"flex justify-center items-center"}>
                <img src={images[2]} className={"h-full w-full"} />
              </div>
              <div className={"flex justify-center items-center"}>
                <img src={images[1]} className={"h-full w-full"} />
              </div>
              <div className={"flex justify-center items-center"}>
                <img src={images[0]} className={"h-full w-full"} />
              </div>
              <div className={"flex justify-center items-center"}>
                <img src={images[3]} className={"h-full w-full"} />
              </div>
            </Carousel>
          </div>
          <div
            className="mt-12 sm:mt-12 md:mt-12 sm:ml-3 flex  justify-center items-center"
            data-aos={"fade-up"}
          >
            <Link
              to={"/testimonials"}
              className="w-full flex items-center justify-center px-8 py-3 border-transparent text-base leading-6 font-extrabold rounded-md text-blue bg-gray-900 hover:text-white hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              See More
            </Link>
          </div>
        </div>
        <div
          className={
            "justify-center flex-col items-center flex w-full h-10px my-12"
          }
          data-aos={"fade-up"}
        >
          <h2 className="text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-2xl sm:leading-none md:text-2xl">
            Programs
          </h2>
        </div>
        <div
          class={
            "relative rounded-t-lg gradientbackground md:items-center flex justify-center overflow-hidden mt-12 md:mt-1 flex-col"
          }
        >
          <div className={"flex p-2 flex-col"}>
            {/*Stepping section */}
            <h1
              className={
                "xl:text-2xl tracking-widest mt-4 header text-center text-xl tracking-tight z-20 leading-10 font-bold text-white sm:text-xl sm:leading-none md:text-2xl"
              }
            >
              Stepping
            </h1>
            <div className={""}>
              <div
                className={"flex md:flex-col flex-row mt-8"}
                data-aos={"fade-left"}
              >
                <div className={"md:flex md:flex-row relative"}>
                  <div className={"w-auto z-30 rounded-md h-auto"}>
                    <img
                      src={"./facemanwoman.jpg"}
                      className={"imageCard rounded-md"}
                    />
                    <Link
                      to={"/programs"}
                      className={
                        "xl:text-2xl md:hidden absolute bottom-0 left-0 tracking-widest text-right bg-purple-400 rounded-lg md:rounded-none p-2 header md:text-2xl sm:p-2 text-sm tracking-tight z-20 leading-10 font-extrabold text-white  sm:leading-none md:text-extrabold"
                      }
                    >
                      Read More
                    </Link>
                  </div>
                  <div
                    className={
                      "md:w-1/3 md:flex md:p-4 md:items-center hidden md:flex-1"
                    }
                  >
                    <h4
                      className={
                        "xl:text-base md:leading-normal  md:text-right mt-4 md:mt-12 header text-center tracking-tight z-20 leading-10 font-bold text-white sm:text-xl sm:leading-none md:text-base"
                      }
                    >
                      We have an amazing stepping program where we track your
                      activities based on your normal day to day movements(NO
                      FITNESS EXERCISE NEDDED!!!).
                    </h4>
                  </div>
                </div>

                <div className={"md:mt-4 md:flex md:justify-end hidden"}>
                  <h1
                    className={
                      "xl:text-2xl tracking-widest text-right bg-purple-400 rounded-lg md:rounded-none p-2 header md:text-2xl sm:p-2 text-sm tracking-tight z-20 leading-10 font-extrabold text-white  sm:leading-none md:text-extrabold"
                    }
                  >
                    Read More
                  </h1>
                </div>
              </div>
              <h4
                className={
                  "xl:text-xl md:hidden tracking-widest md: mt-4 md:mt-12 header text-center text-base tracking-tight z-20 leading-10 font-bold text-white sm:text-xl sm:leading-none md:text-xl"
                }
              >
                We have an amazing stepping program where we track your
                activities based on your normal day to day movements. (NO
                FITNESS EXERCISE NEDDED!!!).
              </h4>
            </div>

            <div className={"flex justify-center flex-col p-2"}>
              <h1
                className={
                  "xl:text-2xl tracking-widest mt-4 header text-center text-xl tracking-tight z-20 leading-10 font-bold text-white sm:text-xl sm:leading-none md:text-2xl"
                }
              >
                Prepping
              </h1>

              {/*Fitness Class section */}
              <div className={""}>
                <div
                  className={"flex md:flex-col flex-row mt-8"}
                  data-aos={"fade-left"}
                >
                  <div className={"md:flex md:flex-row relative"}>
                    <div className={"w-auto z-30 rounded-md h-auto"}>
                      <img
                        src={"./okro.jpg"}
                        className={"imageCard rounded-md"}
                      />
                      <Link
                        to={"/programs"}
                        className={
                          "xl:text-2xl md:hidden absolute bottom-0 left-0 tracking-widest text-right bg-teal-400 rounded-lg md:rounded-none p-2 header md:text-2xl sm:p-2 text-sm tracking-tight z-20 leading-10 font-extrabold text-white  sm:leading-none md:text-extrabold"
                        }
                      >
                        Read More
                      </Link>
                    </div>
                    <div
                      className={
                        "md:w-1/2 md:flex hidden md:justify-center md:absolute md:right-0"
                      }
                    >
                      <h4
                        className={
                          "xl:text-xl md:leading-normal  md:text-left mt-4 md:mt-12 header text-center text-base tracking-tight z-20 leading-10 font-bold text-white sm:text-xl sm:leading-none md:text-base"
                        }
                      >
                        Enjoy your local Ghana dishes while you work on your
                        body fat. Healthy and concious food intake is key to
                        weight loss and body management.So at reps we say,
                        measure it to manage it.
                      </h4>
                    </div>
                  </div>

                  <div className={"md:mt-4 md:flex md:justify-end hidden"}>
                    <h1
                      className={
                        "xl:text-2xl tracking-widest text-right bg-teal-400 rounded-lg md:rounded-none p-2 header md:text-2xl sm:p-2 text-sm tracking-tight z-20 leading-10 font-extrabold text-white  sm:leading-none md:text-extrabold"
                      }
                    >
                      Read More
                    </h1>
                  </div>
                </div>
                <h4
                  className={
                    "xl:text-xl md:hidden tracking-widest md: mt-4 md:mt-12 header text-center text-base tracking-tight z-20 leading-10 font-bold text-white sm:text-xl sm:leading-none md:text-xl"
                  }
                >
                  Enjoy your local Ghana dishes while you work on your body fat.
                  Healthy and concious food intake is key to weight loss and
                  body management.So at reps we say, measure it to manage it.
                </h4>
              </div>
              <div className={""}>
                <div
                  className={"flex md:flex-col flex-row mt-12"}
                  data-aos={"fade-left"}
                >
                  <div className={"md:flex md:flex-row relative"}>
                    <div
                      className={
                        "md:w-1/3  md:flex hidden md:p-4 md:items-center md:flex-1"
                      }
                    >
                      <h4
                        className={
                          "xl:text-xl md:leading-normal  md:text-left mt-4 md:mt-12 header text-center text-base tracking-tight z-20 leading-10 font-bold text-white sm:text-xl sm:leading-none md:text-base"
                        }
                      >
                        We also provide weight loss meal plans for our U.K
                        members and those who prefer international dishes.
                      </h4>
                    </div>
                    <div className={"w-auto z-30 rounded-md h-auto"}>
                      <img
                        src={"./rice.jpg"}
                        className={"imageCard rounded-md"}
                      />
                      <Link
                        to={"/programs"}
                        className={
                          "xl:text-2xl md:hidden absolute bottom-0 left-0 tracking-widest text-right bg-teal-400 rounded-lg md:rounded-none p-2 header md:text-2xl sm:p-2 text-sm tracking-tight z-20 leading-10 font-extrabold text-white  sm:leading-none md:text-extrabold"
                        }
                      >
                        Read More
                      </Link>
                    </div>
                  </div>

                  <div className={"md:mt-2 md:flex md:justify-start hidden"}>
                    <h1
                      className={
                        "xl:text-2xl tracking-widest text-right bg-teal-400 rounded-lg md:rounded-none p-2 header md:text-2xl sm:p-2 text-sm tracking-tight z-20 leading-10 font-extrabold text-white  sm:leading-none md:text-extrabold"
                      }
                    >
                      Read More
                    </h1>
                  </div>
                </div>
                <h4
                  className={
                    "xl:text-xl md:hidden mt-4 md:mt-12 header text-center text-base tracking-tight z-20 leading-10 font-bold text-white sm:text-xl sm:leading-none md:text-xl"
                  }
                >
                  We also provide weight loss meal plans for our U.K members and
                  those who prefer international dishes.
                </h4>
              </div>

              {/*Fitness Class section */}
              <h1
                className={
                  "xl:text-2xl tracking-widest mt-12 header text-center text-xl tracking-tight z-20 leading-10 font-bold text-white sm:text-xl sm:leading-none md:text-2xl"
                }
              >
                Monthly Marathons(Optional)
              </h1>
              <h1
                className={
                  "xl:text-2xl tracking-widest mt-12 header text-center text-xl tracking-tight z-20 leading-10 font-bold text-white sm:text-xl sm:leading-none md:text-2xl"
                }
              >
                Walkathons
              </h1>

              <div className={""}>
                <div
                  className={"flex md:flex-col flex-row mt-8"}
                  data-aos={"fade-left"}
                >
                  <div className={"md:flex md:flex-row relative"}>
                    <div className={"w-auto z-30 rounded-md h-auto"}>
                      <img
                        src={"./walkforest.jpeg"}
                        className={"imageCard rounded-md"}
                      />
                      <Link
                        to={"/programs"}
                        className={
                          "xl:text-2xl md:hidden absolute bottom-0 left-0 tracking-widest text-right bg-teal-400 rounded-lg md:rounded-none p-2 header md:text-2xl sm:p-2 text-sm tracking-tight z-20 leading-10 font-extrabold text-white  sm:leading-none md:text-extrabold"
                        }
                      >
                        Read More
                      </Link>
                    </div>
                    <div
                      className={
                        "md:w-1/3 md:flex md:p-4 md:items-center hidden md:flex-1"
                      }
                    >
                      <h4
                        className={
                          "xl:text-base md:leading-normal  md:text-right mt-4 md:mt-12 header text-center tracking-tight z-20 leading-10 font-bold text-white sm:text-xl sm:leading-none md:text-base"
                        }
                      >
                        Once every three months, our members are tasked with a
                        fun walkathon challenges that helps shreds body fats as
                        well. Maximum of 25 miles every three months.
                      </h4>
                    </div>
                  </div>

                  <div className={"md:mt-4 md:flex md:justify-end hidden"}>
                    <h1
                      className={
                        "xl:text-2xl tracking-widest text-right bg-teal-400 rounded-lg md:rounded-none p-2 header md:text-2xl sm:p-2 text-sm tracking-tight z-20 leading-10 font-extrabold text-white  sm:leading-none md:text-extrabold"
                      }
                    >
                      Read More
                    </h1>
                  </div>
                </div>
                <h4
                  className={
                    "xl:text-xl md:hidden tracking-widest md: mt-4 md:mt-12 header text-center text-base tracking-tight z-20 leading-10 font-bold text-white sm:text-xl sm:leading-none md:text-xl"
                  }
                >
                  Once every three months, our members are tasked with a fun
                  walkathon challenges that helps shreds body fats as well.
                  Maximum of 25 miles every three months.
                </h4>
              </div>

              <Link
                to={"/programs"}
                className={
                  "xl:text-2xl tracking-widest header mt-8 text-center text-xl tracking-tight z-20 leading-10 font-bold text-white bg-teal-400 p-4 w-full sm:text-xl sm:leading-none md:text-2xl"
                }
              >
                Click to see more
              </Link>
            </div>
          </div>
        </div>

        {/*Life Coaching*/}
        <div className={"flex justify-center items-center my-12 flex-col"}>
          <h2 className="text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-2xl sm:leading-none md:text-2xl">
            Life Coaching
          </h2>

          <p
            className={
              "mt-8 p-4 text-gray-700 text-center tracking-wider leading-loose"
            }
          >
            A confidential,one on one service to explore compulsory eating,
            binge eating, yoyo eating and many more.
          </p>
          <div className={"flex justify-center"}></div>
          <div className={"w-4/5 flex flex-wrap border boxShadow"}>
            <img src={"./lifec.jpeg"} className={"w-auto h-auto"} />
          </div>

          <p
            className={
              "mt-8 p-4 text-gray-700 text-center tracking-wider leading-loose"
            }
          >
            The Life coach will walk you through the issues which mostly trigger
            people's behavior to over eat.
          </p>
        </div>

        {/*reps for men*/}
        <div className={"flex justify-center items-center my-12 flex-col"}>
          <h2 className="text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-2xl sm:leading-none md:text-2xl">
            Reps Fitness Ghana
          </h2>
          <h2 className={"bg-gray-900 mt-8 p-4 text-2lx  text-white"}>
            {" "}
            FOR MEN{" "}
          </h2>
        </div>

        <div className={"w-4/5 flex flex-wrap border boxShadow"}>
          <img src={"./bigbelly.jpeg"} className={"w-auto h-auto"} />
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
}
