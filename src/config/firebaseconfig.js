// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-kJETbtDioer45ga-4FhUWTrgctSbhGU",
  authDomain: "react-9c1f0.firebaseapp.com",
  databaseURL: "https://react-9c1f0-default-rtdb.firebaseio.com",
  projectId: "react-9c1f0",
  storageBucket: "react-9c1f0.appspot.com",
  messagingSenderId: "672734444126",
  appId: "1:672734444126:web:5a67dce413bda7ff6112cf",
  measurementId: "G-D2K26PCEXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;