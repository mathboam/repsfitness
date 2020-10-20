import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function Programs(props) {
  return (
    <React.Fragment>
      <div>
        <NavBar />

        <div
          className={
            "mt-12 w-full relative banner flex justify-center items-center "
          }
          data-aos={"fade-up"}
        >
          <div
            className={
              "absolute flex-col flex justify-center items-center space-y-12"
            }
          >
            <h1 className="xl:text-6xl text-4xl tracking-widest header tracking-tight z-20 leading-10 font-extrabold text-white sm:text-4xl sm:leading-none md:text-5xl">
              Programs
            </h1>
            <p className="text-xl tracking-wide z-20 leading-10 font-medium text-center text-gray-200 sm:text-sm sm:leading-none md:text-5xl">
              Reps fitness got lots of programs to get you started for your
              weight loss adventures
            </p>
          </div>
        </div>

        {/*monthly section*/}
        <div>
          <div className={"justify-center items-center flex mt-12 flex-col"}>
            <h1
              className={
                "xl:text-6xl tracking-widest header text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-5xl sm:leading-none md:text-5xl"
              }
            >
              Monthly Challenges
            </h1>

            <p
              className={
                "mt-12 text-gray-600 text-center tracking-wider leading-loose"
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              architecto commodi consequuntur dignissimos dolores eligendi
              eveniet ex explicabo laudantium, magni minima neque nostrum odio
              rem, repellat repudiandae ullam ut veritatis? Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Dignissimos inventore
              itaque iure officiis sequi? Atque distinctio eaque iste, odio rem
              reprehenderit sunt! Exercitationem facere hic magni, nulla odit
              officiis rerum.Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Alias architecto commodi consequuntur dignissimos dolores
              eligendi eveniet ex explicabo laudantium, magni minima neque
              nostrum odio rem, repellat repudiandae ullam ut veritatis? Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
              inventore itaque iure officiis sequi? Atque distinctio eaque iste,
              odio rem reprehenderit sunt! Exercitationem facere hic magni,
              nulla odit officiis rerum. sunt! Exercitationem facere hic magni,
              nulla odit officiis rerum.
            </p>
          </div>

          {/* Walkathons*/}
          <div className={"justify-center items-center flex mt-12 flex-col"}>
            <h1
              className={
                "xl:text-6xl tracking-widest header text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-5xl sm:leading-none md:text-5xl"
              }
            >
              Walkathons
            </h1>

            <div
              className={
                "pictureCollage justify-center p-1 items-center flex-wrap w-11/12 xl:w-11/12 md:w-full h-auto sm:space-x-0 md:space-x-2 xl:space-x-2 z-30 flex mt-12 bg-blue rounded-lg"
              }
            >
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>{" "}
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>{" "}
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>{" "}
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>
            </div>
          </div>

          {/*skeippathons*/}
          <div className={"justify-center items-center flex mt-12 flex-col"}>
            <h1
              className={
                "xl:text-6xl tracking-widest header text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-5xl sm:leading-none md:text-5xl"
              }
            >
              Skipathons
            </h1>

            <div
              className={
                "pictureCollage xl:w-11/12 justify-center p-1 items-center flex-wrap w-11/12 md:w-full h-auto sm:space-x-0 md:space-x-2 xl:space-x-2 z-30 flex mt-12 bg-blue rounded-lg"
              }
            >
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>{" "}
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>{" "}
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>{" "}
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>
            </div>
          </div>
          {/*  many more */}
          <div className={"justify-center items-center flex mt-12 flex-col"}>
            <h1
              className={
                "xl:text-6xl tracking-widest header text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-5xl sm:leading-none md:text-5xl"
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              architecto commodi consequuntur dignissimos dolores eligendi
              eveniet ex explicabo laudantium, magni minima neque nostrum odio
              rem, repellat repudiandae ullam ut veritatis? Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Dignissimos inventore
              itaque iure officiis sequi? Atque distinctio eaque iste, odio rem
              reprehenderit sunt! Exercitationem facere hic magni, nulla odit
              officiis rerum.Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Alias architecto commodi consequuntur dignissimos dolores
              eligendi eveniet ex explicabo laudantium, magni minima neque
              nostrum odio rem, repellat repudiandae ullam ut veritatis? Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
              inventore itaque iure officiis sequi? Atque distinctio eaque iste,
              odio rem reprehenderit sunt! Exercitationem facere hic magni,
              nulla odit officiis rerum. sunt! Exercitationem facere hic magni,
              nulla odit officiis rerum.
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
                "pictureCollage xl:w-11/12 justify-center p-1 items-center flex-wrap w-11/12 md:w-full h-auto sm:space-x-0 md:space-x-2 xl:space-x-2 z-30 flex mt-12 bg-gray-800 rounded-lg"
              }
            >
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>{" "}
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>{" "}
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>{" "}
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>
            </div>
          </div>

          {/*skeippathons*/}
          <div className={"justify-center items-center flex mt-12 flex-col"}>
            <h1
              className={
                "xl:text-6xl tracking-widest header text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-5xl sm:leading-none md:text-5xl"
              }
            >
              Group And Solo Consultations
            </h1>

            <div
              className={
                "pictureCollage justify-center p-1 items-center flex-wrap w-11/12 md:w-full xl:w-11/12 h-auto sm:space-x-0 md:space-x-2 xl:space-x-2 z-30 flex mt-12 bg-gray-800 rounded-lg"
              }
            >
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>{" "}
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>{" "}
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>{" "}
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>
            </div>
          </div>
          {/*  many more */}
          <div className={"justify-center items-center flex mt-12 flex-col"}>
            <h1
              className={
                "xl:text-6xl tracking-widest header text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-5xl sm:leading-none md:text-5xl"
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              architecto commodi consequuntur dignissimos dolores eligendi
              eveniet ex explicabo laudantium, magni minima neque nostrum odio
              rem, repellat repudiandae ullam ut veritatis? Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Dignissimos inventore
              itaque iure officiis sequi? Atque distinctio eaque iste, odio rem
              reprehenderit sunt! Exercitationem facere hic magni, nulla odit
              officiis rerum.Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Alias architecto commodi consequuntur dignissimos dolores
              eligendi eveniet ex explicabo laudantium, magni minima neque
              nostrum odio rem, repellat repudiandae ullam ut veritatis? Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
              inventore itaque iure officiis sequi? Atque distinctio eaque iste,
              odio rem reprehenderit sunt! Exercitationem facere hic magni,
              nulla odit officiis rerum. sunt! Exercitationem facere hic magni,
              nulla odit officiis rerum.
            </p>
          </div>

          {/* Stepping challenges*/}
          <div className={"justify-center items-center flex mt-12 flex-col"}>
            <h1
              className={
                "xl:text-6xl tracking-widest header text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-5xl sm:leading-none md:text-5xl"
              }
            >
              Stepping Challenges
            </h1>

            <div
              className={
                "pictureCollage2 xl:w-11/12 justify-center p-1 items-center flex-wrap w-11/12 md:w-full h-auto sm:space-x-0 md:space-x-2 xl:space-x-2 z-30 flex mt-12 bg-white rounded-lg"
              }
            >
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>{" "}
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>{" "}
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>{" "}
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>
              <div
                className={
                  "xl:w-1/5 m-1 lg:w-1/4 md:w-1/3 w-full sm:w-full h-64 bg-black z-40 rounded-lg"
                }
              >
                <img
                  src={"./smallbanner.jpg"}
                  className={"w-full h-64 rounded-lg"}
                />
              </div>
            </div>
          </div>

          {/*  many more */}
          <div className={"justify-center items-center flex mt-12 flex-col"}>
            <h1
              className={
                "xl:text-6xl tracking-widest header text-2xl tracking-tight z-20 leading-10 font-bold text-gray-600 sm:text-5xl sm:leading-none md:text-5xl"
              }
            >
              And Many More.....
            </h1>
          </div>
        </div>
        <hr className={"my-12"} />

        <Footer />
      </div>
    </React.Fragment>
  );
}
