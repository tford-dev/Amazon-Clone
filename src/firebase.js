//Imports of functions from SDK in Firebase
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyAneJiGWIUraTmwNmbprssYeW1p4a0DicM",
  authDomain: "clone-18b36.firebaseapp.com",
  projectId: "clone-18b36",
  storageBucket: "clone-18b36.appspot.com",
  messagingSenderId: "180197115911",
  appId: "1:180197115911:web:f41cf7155af2c09af002a2",
  measurementId: "G-JE8DS9M96N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };