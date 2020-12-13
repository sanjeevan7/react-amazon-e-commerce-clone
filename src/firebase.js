import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALGHmiYUe4a1jv5x3bOdkSCnx5JPfLy0s",
  authDomain: "clone-105cd.firebaseapp.com",
  databaseURL: "https://clone-105cd.firebaseio.com",
  projectId: "clone-105cd",
  storageBucket: "clone-105cd.appspot.com",
  messagingSenderId: "93596891210",
  appId: "1:93596891210:web:6c0923ca1b8c29934e8eb3",
  measurementId: "G-PPHK8V5Y2G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
