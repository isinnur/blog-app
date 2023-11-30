// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//Firebase'den veritabanı işlemleri için Firestore'u kullanmanıza olanak tanır.
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4eym0q0OgkJa81cw6CIhL2QQzcWMEPHk",
  authDomain: "blog-website-1e134.firebaseapp.com",
  projectId: "blog-website-1e134",
  storageBucket: "blog-website-1e134.appspot.com",
  messagingSenderId: "508916912814",
  appId: "1:508916912814:web:7d38e6cd4261930306133f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
