// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
//import "firebase/firestore";
//import 'firebase/auth';    //the problem was occuring here first...it was showing "module not found"

const firebaseConfig = {
    apiKey: "AIzaSyDd-0OBZOCPueB6cAnD_KIyK08_PLglP7M",
    authDomain: "shopping-app-npva.firebaseapp.com",
    projectId: "shopping-app-npva",
    storageBucket: "shopping-app-npva.appspot.com",
    messagingSenderId: "244574488008",
    appId: "1:244574488008:web:5e6f43c24717173538ecfd",
    measurementId: "G-KJ9YM7HFRB"
  };

  //const firebase = require('firebase/app');

  //const app = firebase.initializeApp({ ... });
 // const firebaseApp = firebase.default.initializeApp(firebaseConfig);
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //const firestore = firebase.firestore();
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };