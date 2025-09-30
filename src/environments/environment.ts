// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig= {
  apiKey: "AIzaSyCKsCYn3giy8uqzRdeX4YqczKWQV-2gO0w",
  authDomain: "mi-proyecto-d4f0f.firebaseapp.com",
  projectId: "mi-proyecto-d4f0f",
  storageBucket: "mi-proyecto-d4f0f.firebasestorage.app",
  messagingSenderId: "153176663686",
  appId: "1:153176663686:web:70b1ef3db3089f87c59307",
  measurementId: "G-RHJ1M3NKGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);