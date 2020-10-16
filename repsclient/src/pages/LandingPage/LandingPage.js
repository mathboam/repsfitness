import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Footer from "../../components/Footer";
export default function LandingPage() {
  const images = ["./test2.jpg", "./test3.jpg", "./test4.jpg", "./test6.jpg"];
  const [toggleMiniNav, setToggleMiniNav] = useState(false);
  return (
    <React.Fragment>
      <NavBar toggler={toggleMiniNav} setToggler={setToggleMiniNav} />
      <div class="relative overflow-hidden mt-2">
        <div class="max-w-screen-xl mx-auto ">
          <div class="relative  z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div class="relative pt-6 px-4 sm:px-6 lg:px-8 ">
              <main className=" mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div
                  className="sm:text-center lg:text-left"
                  data-aos={"fade-right"}
                >
                  <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-5xl">
                    Reps Fitness Ghana's Member's Online
                    <br className="xl:hidden" />
                    <br className="xl:hidden" />
                    <span className="text-blue">Diet And Health Club</span>
                  </h2>
                  <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Reps Fitness is an{" "}
                    <a
                      href={"https://google.com"}
                      className={"text-blue hover:underline"}
                    >
                      Online Diet
                    </a>{" "}
                    and{" "}
                    <a
                      href={"https://google.com"}
                      className={"text-blue hover:underline"}
                    >
                      Health
                    </a>{" "}
                    Club Our members* have activities.{" "}
                    <a
                      href={"https://google.com"}
                      className={"text-blue hover:underline"}
                    >
                      Programs
                    </a>{" "}
                    and{" "}
                    <a
                      href={"https://google.com"}
                      className={"text-blue hover:underline"}
                    >
                      consultations
                    </a>{" "}
                    that keeps them motivated and{" "}
                    <a
                      href={"https://google.com"}
                      className={"text-blue hover:underline"}
                    >
                      accountable
                    </a>{" "}
                    on a daily basis.
                    <br />
                    <br />
                    We have a limit of 50{" "}
                    <a
                      href={"https://google.com"}
                      className={"text-blue hover:underline"}
                    >
                      members
                    </a>{" "}
                    who * will walk the walk * with you. At Reps, we want you to
                    learn how to take control of your habits in order to live a
                    healthy life and have a piece of mind where your weight is
                    not just of interest to you but to our team of professionals
                    and members also.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow" data-aos={"fade-up"}>
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-blue hover:bg-blue focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                      >
                        Get started
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3" data-aos={"fade-up"}>
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue bg-gray-900 hover:text-white hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>

            <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div class="rounded-lg shadow-md">
                <div
                  class="rounded-lg bg-white shadow-xs overflow-hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="main-menu"
                  style={{ display: toggleMiniNav ? "block" : "none" }}
                >
                  <div class="px-5 pt-4 flex items-center justify-between">
                    <div></div>
                    <div class="-mr-2">
                      <button
                        type="button"
                        onClick={() => setToggleMiniNav(!toggleMiniNav)}
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        aria-label="Close menu"
                      >
                        <svg
                          class="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
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
                  </div>
                  <div class="px-2 pt-2 pb-3">
                    <a
                      href="#"
                      className="font-medium text-gray-700 hover:text-blue transition duration-150 ease-in-out"
                    >
                      Programs
                    </a>
                    <a
                      href="#"
                      className="ml-8 font-medium text-gray-700 hover:text-blue transition duration-150 ease-in-out"
                    >
                      Life Coaching
                    </a>
                    <a
                      href="#"
                      className="ml-8 font-medium text-gray-700 hover:text-blue transition duration-150 ease-in-out"
                    >
                      Accountability
                    </a>
                    <a
                      href="#"
                      className="ml-8 font-medium text-gray-700 hover:text-blue transition duration-150 ease-in-out"
                    >
                      Testimonials
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
          data-aos={"fade-left"}
        >
          <img
            class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="./side.jpg"
            alt=""
          />
        </div>
      </div>

      {/*  section 2*/}

      <div
        class={
          "relative rounded-t-lg gradientbackground flex justify-center overflow-hidden mt-12 md:mt-1 flex-col"
        }
      >
        <div
          class={
            "justify-center flex-col items-center flex w-full h-10px my-12"
          }
          data-aos={"fade-up"}
        >
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-5xl">
            Programs
          </h2>
        </div>
        <div className={"flex p-10 flex-col"}>
          {/*Meal Plan section */}
          <div className={"flex flex-row"} data-aos="fade-right">
            <div className={"w-auto z-30 h-auto rounded-md"}>
              <img src={"./dit.jpg"} className={"imageCard rounded-md"} />
            </div>
            <div className={"w-1/3 z-30 textCardContainer flex items-center"}>
              <div
                className={
                  "textCard w-4/5 z-40 bg-white justify-center items-center p-5"
                }
              >
                <h2
                  className={
                    "text-xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-xl"
                  }
                >
                  Meal Plans
                </h2>
                <p className={"text-left font-medium text-gray-700 mt-5"}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta eius, temporibus. Animi dicta eaque inventore
                  recusandae. Doloribus illum laboriosam non quasi recusandae?
                  Beatae consequuntur, cupiditate eos explicabo perspiciatis
                  reprehenderit voluptatum.
                </p>
              </div>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3 flex justify-center items-center">
              <a
                href="#"
                className="w-full z-30 flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-bold rounded-md text-gray-900 bg-white hover:text-darkblue hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Read More
              </a>
            </div>
          </div>

          {/*Stepping section */}
          <div
            className={"flex flex-row justify-end mt-8"}
            data-aos="fade-right"
          >
            <div className="mt-3 sm:mt-0 sm:ml-3 flex  justify-center items-center">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue bg-gray-900 hover:text-white hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Read More
              </a>
            </div>

            <div
              className={
                "w-1/3 z-40 textCardContainer2 flex items-center justify-end"
              }
            >
              <div
                className={
                  "textCard2 w-4/5 z-40 bg-white justify-center items-center p-5"
                }
              >
                <h2
                  className={
                    "text-xl text-right tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-xl"
                  }
                >
                  Stepping
                </h2>
                <p className={"text-right font-medium text-gray-700 mt-5"}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta eius, temporibus. Animi dicta eaque inventore
                  recusandae. Doloribus illum laboriosam non quasi recusandae?
                  Beatae consequuntur, cupiditate eos explicabo perspiciatis
                  reprehenderit voluptatum.
                </p>
              </div>
            </div>
            <div className={"w-auto z-30 rounded-md h-auto"}>
              <img src={"./walk2.jpg"} className={"imageCard rounded-md"} />
            </div>
          </div>

          {/*Fitness Class section */}
          <div className={"flex flex-row mt-8"} data-aos={"fade-left"}>
            <div className={"w-auto z-30 rounded-md h-auto"}>
              <img src={"./ani.jpeg"} className={"imageCard rounded-md"} />
            </div>
            <div className={"w-1/3 z-30 textCardContainer  flex items-center"}>
              <div
                className={
                  "textCard3 w-4/5 z-40 bg-white justify-center items-center p-5"
                }
              >
                <h2
                  className={
                    "text-xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-xl"
                  }
                >
                  Fitness Class
                </h2>
                <p className={"text-left font-medium text-gray-700 mt-5"}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta eius, temporibus. Animi dicta eaque inventore
                  recusandae. Doloribus illum laboriosam non quasi recusandae?
                  Beatae consequuntur, cupiditate eos explicabo perspiciatis
                  reprehenderit voluptatum.
                </p>
              </div>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3 flex justify-center items-center">
              <a
                href="#"
                className="w-full z-30 flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-bold rounded-md text-gray-900 bg-white hover:text-darkblue hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          "relative bg-white flex justify-center  overflow-hidden mt-12 md:mt-12 mb-12 md:mb-12 flex-col"
        }
      >
        <div
          className={"flex justify-center items-center w-full"}
          data-aos={"fade-up"}
        >
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-5xl">
            Testimonials
          </h2>
        </div>
        <div
          className={"flex flex-col justify-center items-center w-full"}
          data-aos={"fade-up"}
        >
          <div className={"testimonialsContainer w-11/12 mt-8"}>
            <Carousel className={"h-full flex flex-col"}>
              <div className={"flex justify-center items-center"}>
                <img src={images[0]} className={"h-full w-full"} />
              </div>
              <div className={"flex justify-center items-center"}>
                <img src={images[1]} className={"h-full w-full"} />
              </div>
              <div className={"flex justify-center items-center"}>
                <img src={images[2]} className={"h-full w-full"} />
              </div>
              <div className={"flex justify-center items-center"}>
                <img src={images[3]} className={"h-full w-full"} />
              </div>
            </Carousel>
          </div>
          <div
            className="mt-12 sm:mt-8 md:mt-24 sm:ml-3 flex  justify-center items-center"
            data-aos={"fade-up"}
          >
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue bg-gray-900 hover:text-white hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              See More
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
