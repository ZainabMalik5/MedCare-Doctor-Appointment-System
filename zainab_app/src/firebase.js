// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_FsPIKRG40v5TxuTJjCdWYYen7k4NmTY",
  authDomain: "doctor-appointment-fe736.firebaseapp.com",
  projectId: "doctor-appointment-fe736",
  storageBucket: "doctor-appointment-fe736.firebasestorage.app",
  messagingSenderId: "837964596736",
  appId: "1:837964596736:web:b44e9955debf4a46c4fae5",
  measurementId: "G-NGL43K6Y64"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
