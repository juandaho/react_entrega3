import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
// apiKey: process.env.REACT_APP_apiKey,
// authDomain: process.env.REACT_APP_authDomain,
// projectId: process.env.REACT_APP_projectId,
// storageBucket: process.env.REACT_APP_storageBucket,
// messagingSenderId: process.env.REACT_APP_messagingSenderId,
// appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBRmA7uLkYC2pa9JHAq4ltPUjguY7R3Dao",
  authDomain: "react-197f9.firebaseapp.com",
  projectId: "react-197f9",
  storageBucket: "react-197f9.appspot.com",
  messagingSenderId: "975159165993",
  appId: "1:975159165993:web:2f94fe70fb2db32b828838",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
