// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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