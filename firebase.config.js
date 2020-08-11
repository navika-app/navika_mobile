import * as firebase from "firebase";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBeOcvmR8kEKA__yIm8c25nfRl_9Tj90SQ",
  authDomain: "navika-mobile.firebaseapp.com",
  databaseURL: "https://navika-mobile.firebaseio.com",
  projectId: "navika-mobile",
};

firebase.initializeApp(firebaseConfig);
