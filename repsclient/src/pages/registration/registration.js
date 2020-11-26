import React, { useState, lazy, Fragment, Suspense } from "react";
import { BeatLoader } from "react-spinners";

const PersonalComponent = lazy(() => import(`../../components/Personal`));
const PackagesComponent = lazy(() => import(`../../components/packages`));
const WelcomeComponent = lazy(() => import(`../../components/WelcomPage`));

const LoadingComponent = () => {
  return (
    <Fragment>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BeatLoader color="#3C94A3" size={10} />
      </div>
    </Fragment>
  );
};

export default function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [illness, setIllness] = useState("");
  const [offer, setOffer] = useState("");
  const [payment, setPayment] = useState("");
  const [age, setAge] = useState(0);
  const [profile, setProfile] = useState("");
  const [startWeight, setStartWeight] = useState(0);
  const [counter, setCounter] = useState(0);
  return (
    <React.Fragment>
      <div className={""}>
        <div
          className={"flex flex-1 justify-center relative items-center py-6"}
        >
          <img
            className={`w-12 absolute rounded-full left-0 mx-4 md:mx-12 h-12`}
            src={"/logo.jpg"}
          />
          <h1
            className={
              "text-teal-400 font-bold lg:text-2xl md:text-xl text-base"
            }
          >
            Registration
          </h1>
        </div>
        <Suspense fallback={LoadingComponent()}>
          <div className={` border-t ${counter === 2 ? "md:p-2" : "md:p-8"}`}>
            {counter === 0 ? (
              <PersonalComponent
                firstName={firstName}
                setLastName={setLastName}
                setFirstName={setFirstName}
                lastName={lastName}
                contact={contact}
                email={email}
                profile={profile}
                setProfile={setProfile}
                age={age}
                setContact={setContact}
                setAge={setAge}
                setEmail={setEmail}
                setcouter={setCounter}
                counter={counter}
                illness={illness}
                startWeight={startWeight}
                setStartWeight={setStartWeight}
                setIllness={setIllness}
              />
            ) : counter === 1 ? (
              <PackagesComponent
                contact={contact}
                payment={payment}
                setPayment={setPayment}
                offer={offer}
                setOffer={setOffer}
                age={age}
                profile={profile}
                email={email}
                contact={contact}
                startWeight={startWeight}
                lastName={lastName}
                firstName={firstName}
                counter={counter}
                setCounter={setCounter}
                illness={illness}
              />
            ) : (
              <WelcomeComponent
                payment={payment}
                setPayment={setPayment}
                offer={offer}
                setOffer={setOffer}
                age={age}
                email={email}
                contact={contact}
                lastName={lastName}
                firstName={firstName}
                counter={counter}
                setCounter={setCounter}
                illness={illness}
              />
            )}
            <div className="hidden sm:block">
              <div className="py-5">
                <div className="border-t border-gray-200"></div>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </React.Fragment>
  );
}
