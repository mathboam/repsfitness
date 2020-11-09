import React, { useState } from "react";
import Personal from "../../components/Personal";
import Packages from "../../components/packages";
import WelcomPage from "../../components/WelcomPage";
import packages from "../../components/packages";

export default function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [illness, setIllness] = useState("");
  const [offer, setOffer] = useState("");
  const [payment, setPayment] = useState("");
  const [age, setAge] = useState(0);
  const [counter, setCounter] = useState(0);
  return (
    <React.Fragment>
      <div className={"h-full"}>
        <div className={"flex flex-1 justify-center items-center my-6"}>
          <h1
            className={
              "text-teal-400 font-bold lg:text-2xl md:text-xl text-base"
            }
          >
            Registration
          </h1>
        </div>

        <div
          className={`h-full border-t justify-center items-center ${
            counter === 2 ? "p-2" : "p-24"
          }`}
        >
          {counter === 0 ? (
            <Personal
              firstName={firstName}
              setLastName={setLastName}
              setFirstName={setFirstName}
              lastName={lastName}
              contact={contact}
              email={email}
              age={age}
              setContact={setContact}
              setAge={setAge}
              setEmail={setEmail}
              setcouter={setCounter}
              counter={counter}
              illness={illness}
              setIllness={setIllness}
            />
          ) : counter === 1 ? (
            <Packages contact={contact} />
          ) : (
            <WelcomPage
              payment={payment}
              setPayment={setPayment}
              offer={offer}
              setOffer={setOffer}
              counter={counter}
              setCounter={setCounter}
            />
          )}
          <div className="hidden sm:block">
            <div className="py-5">
              <div className="border-t border-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
