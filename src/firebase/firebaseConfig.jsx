import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// const firebaseConfig = {
//     apiKey: "AIzaSyBRmA7uLkYC2pa9JHAq4ltPUjguY7R3Dao",
//     authDomain: "react-197f9.firebaseapp.com",
//     projectId: "react-197f9",
//     storageBucket: "react-197f9.appspot.com",
//     messagingSenderId: "975159165993",
//     appId: "1:975159165993:web:2f94fe70fb2db32b828838"
//   };


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
