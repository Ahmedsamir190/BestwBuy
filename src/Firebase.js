// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1WCyZqwBp7Sjn96KdgwQ9Guh5XN4AM-0",
  authDomain: "bestbuy-1bb5e.firebaseapp.com",
  projectId: "bestbuy-1bb5e",
  storageBucket: "bestbuy-1bb5e.appspot.com",
  messagingSenderId: "482440507382",
  appId: "1:482440507382:web:1003994e6460e873d921d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
