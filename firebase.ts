import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgGfRwT8dWtVN4Ku277ujyTui-fdkzEfs",
  authDomain: "netflix-clone-7e141.firebaseapp.com",
  projectId: "netflix-clone-7e141",
  storageBucket: "netflix-clone-7e141.appspot.com",
  messagingSenderId: "869126391699",
  appId: "1:869126391699:web:5d40c9b51930f9ebd7ca66",
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
