// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
<<<<<<< HEAD
const firebaseConfig = {
    apiKey: "AIzaSyAPbi5-xdX8s3h7aK_0S38z1VjY4kfGSk4",
    authDomain: "crowd-care.firebaseapp.com",
    databaseURL: "https://crowd-care-default-rtdb.firebaseio.com",
    projectId: "crowd-care",
    storageBucket: "crowd-care.appspot.com",
    messagingSenderId: "457828323552",
    appId: "1:457828323552:web:71b6458d2dea63b0a68085",
    measurementId: "G-HX6P5JD5Y9"
  };
=======

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPbi5-xdX8s3h7aK_0S38z1VjY4kfGSk4",
  authDomain: "crowd-care.firebaseapp.com",
  databaseURL: "https://crowd-care-default-rtdb.firebaseio.com",
  projectId: "crowd-care",
  storageBucket: "crowd-care.appspot.com",
  messagingSenderId: "457828323552",
  appId: "1:457828323552:web:71b6458d2dea63b0a68085",
  measurementId: "G-HX6P5JD5Y9",
};
>>>>>>> 763d3c609841940bed2339532f8ddbda3377544c

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const auth = initializeAuth(firebase);

export default {};

// module.export = { db, auth };
