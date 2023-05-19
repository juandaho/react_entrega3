import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBRmA7uLkYC2pa9JHAq4ltPUjguY7R3Dao",
    authDomain: "react-197f9.firebaseapp.com",
    projectId: "react-197f9",
    storageBucket: "react-197f9.appspot.com",
    messagingSenderId: "975159165993",
    appId: "1:975159165993:web:2f94fe70fb2db32b828838"
  };





const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
