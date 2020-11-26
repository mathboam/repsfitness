import React from "react";
import { Link } from "react-router-dom";

export default function WelcomPage(props) {
  return (
    <React.Fragment>
      <div className={`p-4 lg:p-12`}>
        <h1 className={`font-semibold text-xl my-4`}>
          🎊🎉🥳🎊🎉🥳🎊🎉🥳🎊🎉🥳🎊🎉🥳🎊🎉🥳🎊🎉🥳🎊🎉🥳
        </h1>
        <h1 className={`font-semibold text-xl`}>
          Welcome to Reps Fitness Ghana
        </h1>
        <p className={`my-12 text-gray-700 `}>
          Welcome {props.firstName + " " + " " + props.lastName}, to Reps
          Fitness Ghana. Loose weight without the pain of exercise on our
          programs and hoping to make you get into your preferred body weight.
          It does not matter how slowly you go, as long as <b>you don't stop</b>{" "}
          . Loosing and maintaining weight is not just a program but a way of
          life so enjoy your new Reps way of living and be happy all the time.
        </p>
        <Link
          to={"/home"}
          className={`rounded-md bg-teal-500 px-4 py-4 shadow-sm text-white`}
        >
          Browse Our Website
        </Link>
      </div>
    </React.Fragment>
  );
}
