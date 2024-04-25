// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOZQA4t0S0roydX5gFVULHg7b9uknUA1c",
  authDomain: "todo-4ab38.firebaseapp.com",
  projectId: "todo-4ab38",
  storageBucket: "todo-4ab38.appspot.com",
  messagingSenderId: "874178589648",
  appId: "1:874178589648:web:885a0112d37f007a80ffd5",
  measurementId: "G-YY5Y76G64S"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
// const analytics = getAnalytics(FIREBASE_APP);