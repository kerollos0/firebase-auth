// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYsHRTenq20r_DpNn80juAlC6p7PsQ3Cc",
  authDomain: "fir-auth-fcfbb.firebaseapp.com",
  projectId: "fir-auth-fcfbb",
  storageBucket: "fir-auth-fcfbb.appspot.com",
  messagingSenderId: "665105286026",
  appId: "1:665105286026:web:cf699c79bc251c60207e73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
