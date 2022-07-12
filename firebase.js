// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsHQDdKqu0cac3bdri_pmelIEJxzVtYQc",
  authDomain: "rn-uber-eats-927f6.firebaseapp.com",
  projectId: "rn-uber-eats-927f6",
  storageBucket: "rn-uber-eats-927f6.appspot.com",
  messagingSenderId: "383896929192",
  appId: "1:383896929192:web:16cbb55833cdfc583b139d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const db = getFirestore(app);
