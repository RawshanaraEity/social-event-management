// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7JKy8O4TsHZvjM2OCuCy_Mq-7bcAyPsI",
  authDomain: "social-events-management-a40ca.firebaseapp.com",
  projectId: "social-events-management-a40ca",
  storageBucket: "social-events-management-a40ca.appspot.com",
  messagingSenderId: "1039662605748",
  appId: "1:1039662605748:web:11e2e4823c3da4f39e7ee1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;