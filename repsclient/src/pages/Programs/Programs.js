import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function Programs(props) {
  return (
    <React.Fragment>
      <div>
        <NavBar />

        <div
          className={"flex justify-center w-screen items-center mt-12"}
          data-aos={"fade-up"}
        >
          <h1
            className={
              "xl:text-4xl border-2 p-2 bg-teal-500 tracking-widest text-center header text-xl tracking-tight z-20 leading-10 font-bold text-white sm:text-4xl sm:leading-none md:text-3xl"
            }
          >
            PREPPING & STEPPING PROGRAM(2020/2021)
          </h1>
        </div>
        <div
          className={
            "w-screen relative banner flex justify-center items-center "
          }
          data-aos={"fade-up"}
        >
          <div className={"w-screen h-full bg-gray-800 flex flex-row"}>
            <img src={"./blk1.jpg"} className={"h-auto w-screen"} alt={""} />
            {/*<img*/}
            {/*  src={"./de.jpg"}*/}
            {/*  className={*/}
            {/*    "h-auto hidden xl:block xl:w-full"*/}
            {/*  }*/}
            {/*/>*/}
          </div>
          <h1
            className={
              "xl:text-4xl absolute left-0 tracking-widest text-center header text-2xl tracking-tight z-20 leading-10 font-extrabold text-white sm:text-4xl sm:leading-none md:text-extrabold"
            }
          >
            Stepping, that one I can do
          </h1>
        </div>
        <div className={"flex-col flex justify-center items-center space-y-12"}>
          <p className="bg-purple-600 p-6 text-lg tracking-wide z-20 leading-10 font-medium text-center text-white sm:text-sm sm:leading-none md:text-2xl lg:text-3xl xl:text-4xl font-bold">
            You cannot fail on this program unless you fail to do the
            program!!!!!
          </p>
        </div>

        {/* Stepping challenges*/}
        <div className={"justify-center items-center flex mt-12 flex-col"}>
          <h1
            className={
              "xl:text-4xl tracking-widest header text-center text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-2xl sm:leading-none md:text-4xl"
            }
          >
            Stepping Programs
          </h1>

          {/*walkathon text*/}
          <p
            className={
              "mt-12 p-4 text-gray-600 font-extrabold text-xl text-center tracking-wider leading-loose"
            }
          >
            You DO NOT exercise on our program you are only encouraged to
            walk!!!.
          </p>

          <p
            className={
              "mt-0 p-4 text-gray-700 text-center tracking-wider leading-loose"
            }
          >
            We have daily challenges that will motivate you to get up out of
            your chair and do the most natural thing known to man to man, which
            is to walk.
          </p>

          <div className={"w-4/5 border-2 lg:hidden"}></div>

          <p
            className={
              "mt-0 p-4 text-gray-700 text-center tracking-wider leading-loose"
            }
          >
            This stepping program will make you realise that all the sweating
            and jumping CANNOT burn fat as amazingly as our walking program.
          </p>
          <div
            className={
              "mt-12 lg:hidden w-screen relative banner flex justify-center items-center "
            }
            data-aos={"fade-up"}
          >
            <div className={"w-screen h-full bg-gray-800 flex flex-row"}>
              <h1 className={"absolute  z-50 text-white font-bold"}>
                Not the right way to feel during fitness training
              </h1>
              <img
                src={"./tired.jpg"}
                className={"h-auto xl:w-screen w-full"}
                alt={""}
              />
            </div>
          </div>
          <p
            className={
              "mt-0 p-4 text-gray-700 text-center tracking-wider leading-loose"
            }
          >
            That’s why this young lady in UK, who lost 12kg on our program in
            six weeks, sent us this picture and message on a freezing cold day
            in UK.
          </p>
        </div>

        <div className={"w-full border h-auto"}>
          <div></div>
        </div>

        {/* Prepping */}

        <h1
          className={
            "xl:text-4xl tracking-widest header text-center text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-2xl sm:leading-none md:text-4xl"
          }
        >
          Prepping Programs
        </h1>

        <div
          className={
            "mt-12 w-screen relative banner flex flex-col justify-center items-center "
          }
          data-aos={"fade-up"}
        >
          <div className={"w-screen h-full bg-gray-800 flex flex-row"}>
            <img src={"./de.jpg"} className={"h-auto xl:w-screen w-full"} />
          </div>
        </div>
        <p
          className={
            "p-4 my-12 text-gray-700 text-center tracking-wider leading-loose"
          }
        >
          Prepping is the ideal way to guarantee u eat the right food at the
          right time and eliminate giving into temptations which destroy all
          diet.
        </p>
        <div
          className={
            "flex p-2 lg:space-x-12 md:space-y-12 lg:space-y-0 sm:space-y-12 md:p-2 lg:p-6 xl:p-12 flex-col xl:flex-row justify-center lg:flex-row sm:flex-col"
          }
        >
          <div
            className={
              "w-auto lg:w-auto relative z-40 cardboard2 bg-teal-400 rounded-lg"
            }
          >
            <h1
              className={
                "xl:text-xl absolute bottom-0 left-0 tracking-widest text-right bg-purple-400 rounded-lg p-4 header md:text-base sm:p-2 text-sm tracking-tight z-20 leading-10 font-extrabold text-white  sm:leading-none md:text-extrabold"
              }
            >
              When you love prepping, life is more relaxing.
            </h1>
            <img src={"./blk4.jpg "} className={"h-full rounded-lg"} />
          </div>

          <div
            className={
              "w-auto lg:w-auto relative z-40 cardboard2 bg-teal-400 rounded-lg"
            }
          >
            <h1
              className={
                "xl:text-xl absolute bottom-0 tracking-widest text-right bg-purple-400 rounded-lg p-4 header md:text-base sm:p-2 text-sm tracking-tight z-20 leading-10 font-extrabold text-white  sm:leading-none md:text-extrabold"
              }
            >
              Measure It To Manage It
            </h1>
            <img src={"./prep1.jpg "} className={"h-full w-full rounded-lg"} />
          </div>
        </div>

        {/*  many more */}
        <div className={"justify-center items-center flex mt-12 flex-col"}>
          <h1
            className={
              "xl:text-2xl tracking-widest header text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-2xl sm:leading-none md:text-2xl"
            }
          >
            And Many More.....
          </h1>
        </div>
      </div>
      <hr className={"my-12"} />
      {/*monthly section*/}
      <div data-aos={"fade-up"}>
        <div className={"justify-center items-center flex mt-12 flex-col"}>
          <h1
            className={
              "xl:text-6xl tracking-widest text-center header text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-5xl sm:leading-none md:text-5xl"
            }
          >
            Monthly Marathon Challenges
          </h1>

          <p
            className={
              "mt-12 text-gray-600 text-center tracking-wider leading-loose"
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            architecto commodi consequuntur dignissimos dolores eligendi eveniet
            ex explicabo laudantium, magni minima neque nostrum odio rem,
            repellat repudiandae ullam ut veritatis? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Dignissimos inventore itaque iure
            officiis sequi? Atque distinctio eaque iste, odio rem reprehenderit
            sunt! Exercitationem facere hic magni, nulla odit officiis
            rerum.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Alias architecto commodi consequuntur dignissimos dolores eligendi
            eveniet ex explicabo laudantium, magni minima neque nostrum odio
            rem, repellat repudiandae ullam ut veritatis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Dignissimos inventore itaque
            iure officiis sequi? Atque distinctio eaque iste, odio rem
            reprehenderit sunt! Exercitationem facere hic magni, nulla odit
            officiis rerum. sunt! Exercitationem facere hic magni, nulla odit
            officiis rerum.
          </p>
        </div>

        {/* Walkathons*/}
        <div className={"justify-center items-center flex mt-12 flex-col"}>
          <h1
            className={
              "xl:text-6xl tracking-widest header text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-5xl sm:leading-none md:text-5xl"
            }
          >
            Walk-a-thon
          </h1>
          {/*walkathon text*/}
          <p
            className={
              "mt-12 p-4 text-gray-600 text-center tracking-wider leading-loose"
            }
          >
            Our daily stepping challenges prepare you for our amazing 24 hr.
            Walk-a-thon. Walking is the easiest and most effective way to burn
            fat without losing muscles. Our members were shocked to see they
            could literally walk off the fat in weeks. One of our walkathon
            champion, who hated walking and drove everywhere at the start of the
            program walked 26 miles in a day and shredded 2kgs of fat over night
            and he is now addicted to walking.
          </p>
          <div>
            <div className={"w-"}></div>
          </div>
          {/*<div*/}
          {/*  data-aos="fade-right"*/}
          {/*  data-aos-offset="300"*/}
          {/*  data-aos-easing="ease-in-sine"*/}
          {/*  className={*/}
          {/*    "pictureCollage justify-center p-1 items-center flex-wrap w-11/12 xl:w-11/12 md:w-full h-auto sm:space-x-0 md:space-x-2 xl:space-x-2 z-30 flex mt-12 bg-gray-800 rounded-lg"*/}
          {/*  }*/}
          {/*>*/}
          {/*  <div*/}
          {/*    className={*/}
          {/*      "xl:w-1/5 relative m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"*/}
          {/*    }*/}
          {/*  >*/}
          {/*    <img src={"./e1.jpg"} className={"w-full h-64 rounded-lg"} />*/}
          {/*    <p*/}
          {/*      className={*/}
          {/*        "absolute rounded-tl-lg bg-blue p-2 top-0 left-0 text-sm tracking-tight z-20 leading-10 font-medium text-center text-gray-800 text-gray-200 sm:text-sm sm:leading-none md:text-2xl"*/}
          {/*      }*/}
          {/*    >*/}
          {/*      Wear Correct Footwears*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*  <div*/}
          {/*    className={*/}
          {/*      "xl:w-1/5 m-1 relative lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"*/}
          {/*    }*/}
          {/*  >*/}
          {/*    <img*/}
          {/*      src={"./walkere.jpg"}*/}
          {/*      className={"w-full h-64 rounded-lg"}*/}
          {/*    />*/}
          {/*    <p*/}
          {/*      className={*/}
          {/*        "absolute rounded-tl-lg bg-gray-800 p-2 top-0 left-0 text-sm tracking-tight z-20 leading-10 font-medium text-center text-gray-200 sm:text-sm sm:leading-none md:text-2xl"*/}
          {/*      }*/}
          {/*    >*/}
          {/*      With Pets*/}
          {/*    </p>*/}
          {/*  </div>{" "}*/}
          {/*  <div*/}
          {/*    className={*/}
          {/*      "xl:w-1/5 m-1 lg:w-1/4 relative md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"*/}
          {/*    }*/}
          {/*  >*/}
          {/*    <img*/}
          {/*      src={"./beach2.jpg"}*/}
          {/*      className={"w-full h-64 rounded-lg"}*/}
          {/*    />*/}
          {/*    <p*/}
          {/*      className={*/}
          {/*        "absolute rounded-tl-lg bg-gray-800 p-2 top-0 left-0 text-sm tracking-tight z-20 leading-10 font-medium text-center text-gray-200 sm:text-sm sm:leading-none md:text-2xl"*/}
          {/*      }*/}
          {/*    >*/}
          {/*      With Loved Ones*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*  <div*/}
          {/*    className={*/}
          {/*      "xl:w-1/5 m-1 relative lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"*/}
          {/*    }*/}
          {/*  >*/}
          {/*    <p*/}
          {/*      className={*/}
          {/*        "absolute rounded-tl-lg bg-blue p-2 top-0 left-0 text-sm tracking-tight z-20 leading-10 font-medium text-center text-gray-800 text-gray-200 sm:text-sm sm:leading-none md:text-2xl"*/}
          {/*      }*/}
          {/*    >*/}
          {/*      In The house*/}
          {/*    </p>*/}
          {/*    <img*/}
          {/*      src={"./walkathon.jpg"}*/}
          {/*      className={"w-full h-64 rounded-lg"}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <div*/}
          {/*    className={*/}
          {/*      "xl:w-1/5 m-1 relative lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"*/}
          {/*    }*/}
          {/*  >*/}
          {/*    <img*/}
          {/*      src={"./groupwalk.jpg"}*/}
          {/*      className={"w-full h-64 rounded-lg"}*/}
          {/*    />*/}
          {/*    <p*/}
          {/*      className={*/}
          {/*        "absolute rounded-tl-lg bg-gray-800 p-2 top-0 left-0 text-sm tracking-tight z-20 leading-10 font-medium text-center text-gray-200 sm:text-sm sm:leading-none md:text-2xl"*/}
          {/*      }*/}
          {/*    >*/}
          {/*      With Friends*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*  <div*/}
          {/*    className={*/}
          {/*      "xl:w-1/5 m-1 relative lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"*/}
          {/*    }*/}
          {/*  >*/}
          {/*    <p*/}
          {/*      className={*/}
          {/*        "absolute rounded-tl-lg bg-blue p-2 top-0 left-0 text-sm tracking-tight z-20 leading-10 font-medium text-center text-gray-800 text-gray-200 sm:text-sm sm:leading-none md:text-2xl"*/}
          {/*      }*/}
          {/*    >*/}
          {/*      On The Treadmills*/}
          {/*    </p>*/}
          {/*    <img*/}
          {/*      src={"./treadmill2.jpg"}*/}
          {/*      className={"w-full h-64 rounded-lg"}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <div*/}
          {/*    className={*/}
          {/*      "xl:w-1/5 m-1 relative lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"*/}
          {/*    }*/}
          {/*  >*/}
          {/*    <p*/}
          {/*      className={*/}
          {/*        "absolute rounded-tl-lg bg-gray-800 p-2 top-0 left-0 text-sm tracking-tight z-20 leading-10 font-medium text-center text-gray-200 sm:text-sm sm:leading-none md:text-2xl"*/}
          {/*      }*/}
          {/*    >*/}
          {/*      Essential tools*/}
          {/*    </p>*/}
          {/*    <img*/}
          {/*      src={"./pedometerapp.png"}*/}
          {/*      className={"w-full h-64 rounded-lg"}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <div*/}
          {/*    className={*/}
          {/*      "xl:w-1/5 m-1 relative lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"*/}
          {/*    }*/}
          {/*  >*/}
          {/*    <p*/}
          {/*      className={*/}
          {/*        "absolute rounded-tl-lg bg-gray-800 p-2 top-0 left-0 text-sm tracking-tight z-20 leading-10 font-medium text-center text-gray-200 sm:text-sm sm:leading-none md:text-2xl"*/}
          {/*      }*/}
          {/*    >*/}
          {/*      While shopping*/}
          {/*    </p>*/}
          {/*    <img*/}
          {/*      src={"./shopping3.jpg"}*/}
          {/*      className={"w-full h-64 rounded-lg"}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <div*/}
          {/*    className={*/}
          {/*      "xl:w-1/5 m-1 relative lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"*/}
          {/*    }*/}
          {/*  >*/}
          {/*    <p*/}
          {/*      className={*/}
          {/*        "absolute rounded-tl-lg bg-blue p-2 top-0 left-0 text-sm tracking-tight z-20 leading-10 font-medium text-center text-gray-800 text-gray-200 sm:text-sm sm:leading-none md:text-2xl"*/}
          {/*      }*/}
          {/*    >*/}
          {/*      With The Kids*/}
          {/*    </p>*/}
          {/*    <img*/}
          {/*      src={"./shopping.jpg"}*/}
          {/*      className={"w-full h-64 rounded-lg"}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>

        <hr className={"my-12"} />

        <h1
          className={
            "xl:text-2xl tracking-widest mt-12 header text-center text-xl tracking-tight z-20 leading-10 font-bold text-gray-700 sm:text-xl sm:leading-none md:text-2xl"
          }
        >
          Fastathons(ONCE IN THREE MONTHS)
        </h1>
        <div className={""}>
          <div
            className={"flex md:flex-col flex-row mt-8"}
            data-aos={"fade-left"}
          >
            <div className={"md:flex md:flex-row relative"}>
              <div
                className={
                  "md:w-1/3 md:flex md:p-4 md:items-center hidden md:flex-1"
                }
              >
                <h4
                  className={
                    "xl:text-base md:leading-normal md:text-left mt-4 md:mt-12 header text-center tracking-tight z-20 leading-10 font-bold text-gray-400 sm:text-xl sm:leading-none md:text-base"
                  }
                >
                  24 hours - 14 days water only fasting that helps tighten up
                  the core or abs of our members. We take it slow and make sure
                  its within the reach of every member.
                </h4>
              </div>
              <div className={"w-auto z-30 rounded-md h-auto"}>
                <img src={"./fasta.jpg"} className={"imageCard rounded-md"} />
                <Link
                  to={"/programs"}
                  className={
                    "xl:text-2xl md:hidden absolute bottom-0 right-0 tracking-widest text-right bg-teal-400 rounded-lg md:rounded-none p-2 header md:text-2xl sm:p-2 text-sm tracking-tight z-20 leading-10 font-extrabold text-white  sm:leading-none md:text-extrabold"
                  }
                >
                  Read More
                </Link>
              </div>
            </div>

            <div className={"md:mt-4 md:flex md:justify-start hidden"}>
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
              "xl:text-xl md:hidden tracking-widest md: mt-4 md:mt-12 header text-center text-base tracking-tight z-20 leading-10 font-bold text-gray-400 sm:text-xl sm:leading-none md:text-xl"
            }
          >
            24 hours - 14 days water only fastings that helps tighten up the
            core of our members. We take it slow and make sure its within the
            reach of every member.
          </h4>
        </div>

        <h1
          className={
            "xl:text-2xl tracking-widest mt-12 header text-center text-xl tracking-tight z-20 leading-10 font-bold text-gray-400 sm:text-xl sm:leading-none md:text-2xl"
          }
        >
          Skipathon( ONCE IN THREE MONTHS )
        </h1>

        <div className={""}>
          <div
            className={"flex md:flex-col flex-row mt-8"}
            data-aos={"fade-left"}
          >
            <div className={"md:flex md:flex-row relative"}>
              <div className={"w-auto z-30 rounded-md h-auto"}>
                <img src={"./skippa6.jpg"} className={"imageCard rounded-md"} />
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
                    "xl:text-base md:leading-normal md:text-right mt-4 md:mt-12 header text-left tracking-tight z-20 leading-10 font-bold text-gray-700 sm:text-xl sm:leading-none md:text-base"
                  }
                >
                  We skip for fun. We skip for pleasure.
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
            We skip for fun. We skip for pleasure.
          </h4>
        </div>

        {/*skeippathons*/}
        <div
          className={"justify-center items-center flex mt-12 flex-col"}
          data-aos={"fade-up"}
        >
          <h1
            className={
              "xl:text-6xl tracking-widest header text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-5xl sm:leading-none md:text-5xl"
            }
          >
            Skipathons
          </h1>
          <div
            className={
              "flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row p-2 sm:p-2 md:p-2 lg:p-12 xl:p-12 space-x-0 space-y-6 sm:space-x-0 sm:space-y-6 md:space-x-0 md:space-y-6 lg:space-x-12 xl:space-x-12"
            }
            data-aos={"fade-up"}
          >
            <div
              className={
                "w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex justify-center items-center"
              }
            >
              <p
                className={
                  "mt-12 text-gray-600 text-center md:text-left tracking-wider leading-loose"
                }
              >
                Skip within your comfort while you burn calories and build
                muscles to help put your body to shape
              </p>
            </div>
            <div
              data-aos={"fade-up"}
              className={
                "bg-gray-800 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 rounded-lg sideBanner"
              }
            >
              <img
                src={"./stepapp.jpg"}
                className={"w-full h-full rounded-lg"}
              />
            </div>
          </div>
        </div>
        {/*  many more */}
        <div className={"justify-center items-center flex mt-12 flex-col"}>
          <h1
            className={
              "xl:text-2xl tracking-widest header text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-2xl sm:leading-none md:text-2xl"
            }
          >
            And Many More.....
          </h1>
        </div>
      </div>

      <hr className={"my-12"} />

      {/*Weekly section*/}
      <div>
        <div className={"justify-center items-center flex mt-12 flex-col"}>
          <h1
            className={
              "xl:text-6xl tracking-widest header text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-5xl sm:leading-none md:text-5xl"
            }
          >
            Weekly Challenges
          </h1>

          <p
            className={
              "mt-12 text-gray-600 text-center tracking-wider leading-loose"
            }
          >
            Reps fun walking day is indeed a fun activity at Reps where we join
            our stepping coach as he takes us for a walk. Our coach motivates
            and makes it fun. Members join the live stream and get connected to
            the stepping coach.
          </p>
        </div>

        {/* Walkathons*/}
        <div className={"justify-center items-center flex mt-12 flex-col"}>
          <h1
            className={
              "xl:text-6xl tracking-widest header text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-5xl sm:leading-none md:text-5xl"
            }
          >
            Weight-Ins
          </h1>
          <div
            className={
              "flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row p-2 sm:p-2 md:p-2 lg:p-12 xl:p-12 space-x-0 space-y-6 sm:space-x-0 sm:space-y-6 md:space-x-0 md:space-y-6 lg:space-x-12 xl:space-x-12"
            }
            data-aos={"fade-up"}
          >
            <div
              data-aos={"fade-up"}
              className={
                "bg-gray-800 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 rounded-lg sideBanner"
              }
            >
              <img
                src={"./scales.jpg"}
                className={"w-full h-full rounded-lg"}
              />
            </div>
            <div
              className={
                "w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex justify-center items-center"
              }
            >
              <p
                className={
                  "mt-12 text-gray-600 text-left tracking-wider leading-loose"
                }
              >
                A weekly weigh - in is sent to our administrator to keep track
                of every single calorie burnt
              </p>
            </div>
          </div>
        </div>

        {/*skeippathons*/}
        <div className={"justify-center items-center flex mt-12 flex-col"}>
          <h1
            className={
              "xl:text-6xl tracking-widest header text-center text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-5xl sm:leading-none md:text-5xl"
            }
          >
            Group And Solo Consultations
          </h1>
          <p
            className={
              "mt-12 text-gray-600 text-center tracking-wider leading-loose"
            }
          >
            For private consultations, call our number and arrange for your
            schedules
          </p>
          <div
            data-aos={"fade-up"}
            className={
              "xl:w-4/5 w-full centerBanner bg-gray-800 rounded-lg mt-12 z-50"
            }
          >
            <img src={"coach.jpg"} className={"w-full h-full rounded-lg"} />
          </div>
        </div>
        {/*  many more */}
        <div className={"justify-center items-center flex mt-12 flex-col"}>
          <h1
            className={
              "xl:text-2xl tracking-widest header text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-2xl sm:leading-none md:text-2xl"
            }
          >
            And Many More.....
          </h1>
        </div>
      </div>
      <hr className={"my-12"} />

      {/*Daily section*/}
      <div>
        <div className={"justify-center items-center flex mt-12 flex-col"}>
          <h1
            className={
              "xl:text-6xl tracking-widest header text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-5xl sm:leading-none md:text-5xl"
            }
          >
            Daily Challenges
          </h1>

          <p
            className={
              "mt-12 text-gray-600 text-center tracking-wider leading-loose"
            }
          >
            Everyday steps are converted to calories lost thereby keeping track
            of Every calorie lost
          </p>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
}
