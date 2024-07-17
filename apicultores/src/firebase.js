// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByCpAPdDLv92382YFD6e6EuzBriym5PqE",
  authDomain: "bee-rasp.firebaseapp.com",
  databaseURL: "https://bee-rasp-default-rtdb.firebaseio.com",
  projectId: "bee-rasp",
  storageBucket: "bee-rasp.appspot.com",
  messagingSenderId: "678019322204",
  appId: "1:678019322204:web:e6b3a52330297a3eff7199",
  measurementId: "G-F205VYXWR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database };