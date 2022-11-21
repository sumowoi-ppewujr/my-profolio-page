// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrqZa6_XY_xfhVqvid6OUGrRWdxBr1bhc",
  authDomain: "pewujrprofolio.firebaseapp.com",
  projectId: "pewujrprofolio",
  storageBucket: "pewujrprofolio.appspot.com",
  messagingSenderId: "186039020510",
  appId: "1:186039020510:web:32273af86e0a71f7dbcb4f",
  measurementId: "G-C8HM0SFR1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FirebaseDB = getFirestore(app);