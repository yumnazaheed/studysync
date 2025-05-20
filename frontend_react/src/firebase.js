// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFWwxdOR4Bu7ay_LuvBjT6pzcB74zuEck",
  authDomain: "study-sync-unsw.firebaseapp.com",
  projectId: "study-sync-unsw",
  storageBucket: "study-sync-unsw.firebasestorage.app",
  messagingSenderId: "202210207605",
  appId: "1:202210207605:web:de0a0e0cf5eacc0c33153c",
  measurementId: "G-WZ7568WX1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export auth and db for use in other components
