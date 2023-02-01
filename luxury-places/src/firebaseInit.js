// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsABV0hQagI3fNXidSmVeCruhdpOqYqC8",
  authDomain: "luxury-places-b93a0.firebaseapp.com",
  projectId: "luxury-places-b93a0",
  storageBucket: "luxury-places-b93a0.appspot.com",
  messagingSenderId: "1001484715775",
  appId: "1:1001484715775:web:1e39a8a60e8432d3a46eca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;