import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCZuj35SBK115_9LUEkN4Wx_iUA9yyU3bc",
    authDomain: "auth-1cf70.firebaseapp.com",
    projectId: "auth-1cf70",
    storageBucket: "auth-1cf70.appspot.com",
    messagingSenderId: "276388898880",
    appId: "1:276388898880:web:833f399512e6af70d297a5",
    measurementId: "G-GH44BWVHE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()