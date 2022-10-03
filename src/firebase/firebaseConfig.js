// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkO-RU9f1xEw3_oXyfqrNkPnB8JyELB5g",
  authDomain: "oscuro-197f6.firebaseapp.com",
  projectId: "oscuro-197f6",
  storageBucket: "oscuro-197f6.appspot.com",
  messagingSenderId: "818396429257",
  appId: "1:818396429257:web:5b0daa87c5d4366eca8618"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);