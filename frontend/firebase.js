// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvdjBwkJQJbaZwPQ1onWL4k7Q39XPLJwA",
  authDomain: "library-management-proje-ecc3f.firebaseapp.com",
  projectId: "library-management-proje-ecc3f",
  storageBucket: "library-management-proje-ecc3f.firebasestorage.app",
  messagingSenderId: "216510717464",
  appId: "1:216510717464:web:90ccf8d3aa0456d7d7ed6d",
  measurementId: "G-Q5YWX6SX42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);