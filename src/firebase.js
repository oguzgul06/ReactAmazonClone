import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyAXZK5M6yWC42T7nbEpgiz55JWQ5gu8SFA",
  authDomain: "clone-ba957.firebaseapp.com",
  projectId: "clone-ba957",
  storageBucket: "clone-ba957.appspot.com",
  messagingSenderId: "863618762775",
  appId: "1:863618762775:web:040ae3b30237ef63ccb452",
  measurementId: "G-SCJ16918NR",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
