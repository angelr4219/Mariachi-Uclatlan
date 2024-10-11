// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebase = {
    apiKey: "AIzaSyA78IrkwYA13GZpsJmm-fkFO3Qicbou4Qk",
    authDomain: "mariachi-uclatlan.firebaseapp.com",
    projectId: "mariachi-uclatlan",
    storageBucket: "mariachi-uclatlan.appspot.com",
    messagingSenderId: "667998778010",
    appId: "1:667998778010:web:24b31b571e5f117da5e523",
    measurementId: "G-0GQKM9P2CZ"
  };

const app = initializeApp(firebase);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db ,analytics };


/*
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

*/
