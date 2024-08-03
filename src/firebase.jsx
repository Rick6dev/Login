// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth}  from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx_fqm_Zg7r-sl07uk164X_DlDbMYuAtc",
  authDomain: "fir-login-857ea.firebaseapp.com",
  projectId: "fir-login-857ea",
  storageBucket: "fir-login-857ea.appspot.com",
  messagingSenderId: "690269798068",
  appId: "1:690269798068:web:37698ddecc065432f461e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth();

export {app,auth}