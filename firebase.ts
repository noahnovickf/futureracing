// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEp-MeAN-YjNv6rGBGFxQs3sn17mamkgA",
  authDomain: "futureracing-fd725.firebaseapp.com",
  projectId: "futureracing-fd725",
  storageBucket: "futureracing-fd725.firebasestorage.app",
  messagingSenderId: "857086336924",
  appId: "1:857086336924:web:af94c134c9302709a3f259",
  measurementId: "G-7PPM4GPSYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
