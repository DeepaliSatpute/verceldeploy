import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMVAAAVsSttuWBc6OxdzQyqFYn2TSlGN4",
  authDomain: "otp-project-ed4b2.firebaseapp.com",
  projectId: "otp-project-ed4b2",
  storageBucket: "otp-project-ed4b2.firebasestorage.app",
  messagingSenderId: "847344740974",
  appId: "1:847344740974:web:51200529c1e03d8f45147f",
  measurementId: "G-HGVJ36MGJ0"
};


const app = initializeApp(firebaseConfig);
console.log("Firebase app:", app);
//console.log("Firebase auth:", auth);

export const auth = getAuth(app)

