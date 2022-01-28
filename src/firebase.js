import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore"
import { getDatabase } from "firebase/database";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAomHkUyY4I8XD3rYq-LD2SbftJXj-L8Ug",
  authDomain: "travelgram-39eba.firebaseapp.com",
  projectId: "travelgram-39eba",
  storageBucket: "travelgram-39eba.appspot.com",
  messagingSenderId: "211989329504",
  appId: "1:211989329504:web:b56e0357be92215bac7505",
  measurementId: "G-Y90M6SQKYC"
});

const auth = getAuth();
const db = getFirestore();
// const db = getDatabase(firebaseApp);  ??

export {auth, db}

