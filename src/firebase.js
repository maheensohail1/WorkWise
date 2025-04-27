// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // if you want database

const firebaseConfig = {
    apiKey: "AIzaSyAuvSr9I5fhMa_jca-NlnNHY-7HgGao_1Y",
    authDomain: "workwise-82c9f.firebaseapp.com",
    projectId: "workwise-82c9f",
    storageBucket: "workwise-82c9f.firebasestorage.app",
    messagingSenderId: "188269079829",
    appId: "1:188269079829:web:4c83be1c73895daa4ecd1c",
    measurementId: "G-0CEGHTM0C2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exports
const db = getFirestore(app);

export { db };
