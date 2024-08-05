// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY ,
  authDomain: "realtime-chat-app-99461.firebaseapp.com",
  projectId: "realtime-chat-app-99461",
  storageBucket: "realtime-chat-app-99461.appspot.com",
  messagingSenderId: "908671602848",
  appId: "1:908671602848:web:7570594b00d7e3aa0839c5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore()
export const storage = getStorage()