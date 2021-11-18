// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAneJiGWIUraTmwNmbprssYeW1p4a0DicM",
  authDomain: "clone-18b36.firebaseapp.com",
  projectId: "clone-18b36",
  storageBucket: "clone-18b36.appspot.com",
  messagingSenderId: "180197115911",
  appId: "1:180197115911:web:f41cf7155af2c09af002a2",
  measurementId: "G-JE8DS9M96N"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};