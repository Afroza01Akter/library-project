import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALqiU_OWe2AW6Ebr-Rf69hJbtJS5vL7fs",
  authDomain: "login-auth-b83ff.firebaseapp.com",
  projectId: "login-auth-b83ff",
  storageBucket: "login-auth-b83ff.appspot.com",
  messagingSenderId: "373469882742",
  appId: "1:373469882742:web:55b5e3479e32924829b257",
  measurementId: "G-KC7HXLB2JM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
