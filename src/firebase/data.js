// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjdKMcvf7JekWSLOUrR-XhPkMWacT0las",
    authDomain: "farma-coder.firebaseapp.com",
    projectId: "farma-coder",
    storageBucket: "farma-coder.appspot.com",
    messagingSenderId: "246225536588",
    appId: "1:246225536588:web:72dc28c78b69a9389216e9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const base = getFirestore(app)