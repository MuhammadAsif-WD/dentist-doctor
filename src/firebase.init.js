// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzkiVQ3025gX0mQd_buvw_3UQRW_KSpX0",
  authDomain: "dentist-doctor.firebaseapp.com",
  projectId: "dentist-doctor",
  storageBucket: "dentist-doctor.appspot.com",
  messagingSenderId: "309863485062",
  appId: "1:309863485062:web:1635bb9ab49a2198f2cb07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
