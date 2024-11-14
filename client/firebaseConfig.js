import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIFxhOvgQUqziXS-MwhbJVj6WRuM68kko",
  authDomain: "ez-daily-90474.firebaseapp.com",
  projectId: "ez-daily-90474",
  storageBucket: "ez-daily-90474.firebasestorage.app",
  messagingSenderId: "366905761750",
  appId: "1:366905761750:web:dac096b0cf9d487993ce77",
  measurementId: "G-FYMKY208HD"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

