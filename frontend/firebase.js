// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyB6dG7ofCOqGMF1dgOdnMvyPrLan0-4ZJw",
  authDomain: "lib-management-576e3.firebaseapp.com",
  projectId: "lib-management-576e3",
  storageBucket: "lib-management-576e3.firebasestorage.app",
  messagingSenderId: "83996156267",
  appId: "1:83996156267:web:1f9604528353dc960a2c2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
