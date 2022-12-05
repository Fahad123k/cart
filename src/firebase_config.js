import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeedJODq8qjigprM8_57h_llix4d8OktI",
  authDomain: "cart01-eb6c5.firebaseapp.com",
  projectId: "cart01-eb6c5",
  storageBucket: "cart01-eb6c5.appspot.com",
  messagingSenderId: "450366078081",
  appId: "1:450366078081:web:72b4c1afcd198ec8ca2180"
};

const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);