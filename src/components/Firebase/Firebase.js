import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "axd-portfolio.firebaseapp.com",
  projectId: "axd-portfolio",
  storageBucket: "axd-portfolio.appspot.com",
  messagingSenderId: "541968919457",
  appId: "1:541968919457:web:e3bbfd87a48a9acf8fb9e0",
  measurementId: "G-K4VEZ9JL7T",
});

export const db = getFirestore(app);
