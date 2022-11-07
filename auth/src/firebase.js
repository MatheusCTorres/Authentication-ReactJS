import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDwFEoc9EU78xb3hA2LyLny5RiIn_m1-n8",
    authDomain: "blog-auth-reactjs.firebaseapp.com",
    projectId: "blog-auth-reactjs",
    storageBucket: "blog-auth-reactjs.appspot.com",
    messagingSenderId: "19125618686",
    appId: "1:19125618686:web:4c64003a1e2fe2d63a22af",
    measurementId: "G-SY75NC0PZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()