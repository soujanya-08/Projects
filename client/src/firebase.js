// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7c717.firebaseapp.com",
  projectId: "mern-blog-7c717",
  storageBucket: "mern-blog-7c717.firebasestorage.app",
  messagingSenderId: "512200791869",
  appId: "1:512200791869:web:acb9044e5ca320e037d754"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);