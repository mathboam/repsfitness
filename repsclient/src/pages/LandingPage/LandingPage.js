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
      <NavBar />
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
                  <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-5xltext-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-5xl">
                    Reps Fitness Ghana's Member's Online
                    <br className="xl:hidden" />
                    <br className="xl:hidden" />
                    <span className="text-blue">Diet And Health Club</span>
                  </h2>
                  <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Reps Fitness is an{" "}
                    <Link
                      to={"/programs"}
                      className={"text-blue hover:underline"}
                    >
                      Online Diet
                    </Link>{" "}
                    and{" "}
                    <Link
                      href={"https://google.com"}
                      className={"text-blue hover:underline"}
                    >
                      Health
                    </Link>{" "}
                    Club Our members* have activities.{" "}
                    <Link
                      href={"https://google.com"}
                      className={"text-blue hover:underline"}
                    >
                      Programs
                    </Link>
                    and
                    <Link
                      href={"https://google.com"}
                      className={"text-blue hover:underline"}
                    >
                      consultations
                    </Link>
                    that keeps them motivated and{" "}
                    <Link
                      href={"https://google.com"}
                      className={"text-blue hover:underline"}
                    >
                      accountable
                    </Link>
                    on a daily basis.
                    <br />
                    <br />
                    We have a limit of 50{" "}
                    <Link
                      href={"https://google.com"}
                      className={"text-blue hover:underline"}
                    >
                      members
                    </Link>
                    who * will walk the walk * with you. At Reps, we want you to
                    learn how to take control of your habits in order to live a
                    healthy life and have a piece of mind where your weight is
                    not just of interest to you but to our team of professionals
                    and members also.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow" data-aos={"fade-up"}>
                      <Link
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-blue hover:bg-blue focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                      >
                        Get started
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3" data-aos={"fade-up"}>
                      <Link
                        to={"/programs"}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue bg-gray-900 hover:text-white hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
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
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-5xl">
            Programs
          </h2>
        </div>
        <div className={"flex p-2 flex-col"}>
          {/*Stepping section */}
          <div
            className={"flex flex-row justify-end mt-8"}
            data-aos="fade-right"
          >
            <div className={"w-auto z-30 rounded-md h-auto"}>
              <h1
                className={
                  "xl:text-2xl absolute bottom-0 right-0 tracking-widest text-right bg-teal-400 rounded-lg p-2 header md:text-base sm:p-2 text-sm tracking-tight z-20 leading-10 font-extrabold text-white  sm:leading-none md:text-extrabold"
                }
              >
                ReadMore
              </h1>
              <img src={"./walk2.jpg"} className={"imageCard rounded-md"} />
            </div>
          </div>
          <h1
            className={
              "xl:text-4xl tracking-widest my-12 header text-center text-2xl tracking-tight z-20 leading-10 font-bold text-white sm:text-2xl sm:leading-none md:text-4xl"
            }
          >
            Stepping
          </h1>
        </div>
      </div>
      <div className={"my-12 flex flex-col p-4"}>
        {/*Meal Plan section */}
        <div className={"flex flex-row"} data-aos="fade-right">
          <div className={"w-full z-30 h-auto rounded-md"}>
            <h1
              className={
                "xl:text-2xl absolute bottom-0 left-0 tracking-widest text-right bg-purple-400 rounded-lg p-2 header md:text-base sm:p-2 text-sm tracking-tight z-20 leading-10 font-extrabold text-white  sm:leading-none md:text-extrabold"
              }
            >
              ReadMore
            </h1>
            <img src={"./dit.jpg"} className={"imageCard rounded-md"} />
          </div>
        </div>
        <h1
          className={
            "xl:text-4xl tracking-widest my-12 header text-center text-2xl tracking-tight z-20 leading-10 font-bold text-white sm:text-2xl sm:leading-none md:text-4xl"
          }
        >
          Meal Plans
        </h1>

        {/*Fitness Class section */}
        <div className={"flex flex-row mt-8"} data-aos={"fade-left"}>
          <div className={"w-auto z-30 rounded-md h-auto"}>
            <img src={"./ani.jpeg"} className={"imageCard rounded-md"} />
            <h1
              className={
                "xl:text-2xl absolute bottom-0 left-0 tracking-widest text-right bg-teal-400 rounded-lg p-2 header md:text-base sm:p-2 text-sm tracking-tight z-20 leading-10 font-extrabold text-white  sm:leading-none md:text-extrabold"
              }
            >
              ReadMore
            </h1>
          </div>
        </div>
        <h1
          className={
            "xl:text-4xl tracking-widest my-12 header text-center text-2xl tracking-tight z-20 leading-10 font-bold text-white sm:text-2xl sm:leading-none md:text-4xl"
          }
        >
          Fitness CLasses
        </h1>
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
            <Link
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue bg-gray-900 hover:text-white hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
