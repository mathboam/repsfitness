import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBjqGyd4C5JqhdJVd9vCiDZgWBdqqcuxg",
  authDomain: "repsfitnessghana.firebaseapp.com",
  databaseURL: "https://repsfitnessghana.firebaseio.com",
  projectId: "repsfitnessghana",
  storageBucket: "repsfitnessghana.appspot.com",
  messagingSenderId: "262949582828",
  appId: "1:262949582828:web:3aa2385ce9ce72746032c9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projStorage = firebase.storage();
const projFireStore = firebase.firestore();

export { projStorage, projFireStore };

// import React, { Fragment, useEffect } from "react";
// import useStorage from "../Hooks/useStorage";
// import { useMutation } from "@apollo/client";
// import { toaster } from "evergreen-ui";
// import { UPLOAD_STEPS } from "../../gql/mutations/stepsUpload";
// import { BeatLoader } from "react-spinners";
//
// export default function ProgressBar({ file, setFile,setProfile  }) {
//   const { progress, url } = useStorage(file);
//   useEffect(() => {
//     if (url) {
//       console.log(url);
//       setProfile(url);
//       setFile(null);
//     }
//   }, [url, setFile]);
//   return (
//       <Fragment>
//         <div
//             className={`h-2 rounded-sm bg-blue-600 my-4`}
//             style={{ width: progress + "%" }}
//         ></div>
//       </Fragment>
//   );
// }
