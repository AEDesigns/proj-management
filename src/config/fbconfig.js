import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCUoeEHmqY0UR8-hM4w6Y77ei-eodQWm0s",
  authDomain: "project-management-4b33e.firebaseapp.com",
  databaseURL: "https://project-management-4b33e.firebaseio.com",
  projectId: "project-management-4b33e",
  storageBucket: "project-management-4b33e.appspot.com",
  messagingSenderId: "869338442591",
  appId: "1:869338442591:web:e6c31e6063d5a2f64424ea",
  measurementId: "G-0B1TKFZE0K",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
