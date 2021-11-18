// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);