// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb3B6mfYuTCAX_hfck9kaQz_If80kJsLg",
  authDomain: "a-10-modify.firebaseapp.com",
  projectId: "a-10-modify",
  storageBucket: "a-10-modify.firebasestorage.app",
  messagingSenderId: "52725892974",
  appId: "1:52725892974:web:b03e3c942fe5ebad62a37f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
