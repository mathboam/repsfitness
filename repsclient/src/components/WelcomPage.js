import React from "react";

export default function WelcomPage(props) {
  return (
    <React.Fragment>
      <div className={`p-4 lg:p-12`}>
        <h1 className={`font-semibold text-xl`}>
          Welcome to Reps Fitness Ghana
        </h1>
        <p className={`my-12 text-teal-400 `}>
          Welcome {props.firstName + " " + " " + props.lastName} with Reps
          Fitness. Loose weight without the pain of exercise on our programs and
          hoping to make you get into your preferred body weight.
        </p>
      </div>
    </React.Fragment>
  );
}
