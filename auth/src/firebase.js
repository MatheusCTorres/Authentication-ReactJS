import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC0t6fTSc6pT7Cr1YvhSkTwIxaNg6XozJY",
    authDomain: "blog-reactjs-da340.firebaseapp.com",
    projectId: "blog-reactjs-da340",
    storageBucket: "blog-reactjs-da340.appspot.com",
    messagingSenderId: "106781034620",
    appId: "1:106781034620:web:77616ff930675f146ae1f9",
    measurementId: "G-LVR7L62WB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()