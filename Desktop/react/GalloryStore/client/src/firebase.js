import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQVHVg8fdrK5wskyzWoWmswC_kP5VxEao",
  authDomain: "gallory-a054d.firebaseapp.com",
  projectId: "gallory-a054d",
  storageBucket: "gallory-a054d.firebasestorage.app",
  messagingSenderId: "101561592264",
  appId: "1:101561592264:web:fe8293f0136c82042b78fd",
  measurementId: "G-P3G6HLYP7E"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);