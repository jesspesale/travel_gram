// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAomHkUyY4I8XD3rYq-LD2SbftJXj-L8Ug",
  authDomain: "travelgram-39eba.firebaseapp.com",
  projectId: "travelgram-39eba",
  storageBucket: "travelgram-39eba.appspot.com",
  messagingSenderId: "211989329504",
  appId: "1:211989329504:web:b56e0357be92215bac7505",
  measurementId: "G-Y90M6SQKYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

​​const auth = getAuth(app);
​​const db = getFirestore(app);
// need storage - how we can upload things/pictures and store in our db

export {auth, db, analytics}