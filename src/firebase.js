// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrPITL5ZlSHk9xFEKEanBJTde4wXE7kZ4",
  authDomain: "clone-22647.firebaseapp.com",
  projectId: "clone-22647",
  storageBucket: "clone-22647.appspot.com",
  messagingSenderId: "307652290890",
  appId: "1:307652290890:web:c74e0de8123274e110b9b3",
  measurementId: "G-432ZH5GZVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth();
const analytics = getAnalytics(app);

export function _signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function _login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}
