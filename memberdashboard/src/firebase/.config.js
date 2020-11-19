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
