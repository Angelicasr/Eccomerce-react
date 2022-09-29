// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyA9l0Sn3bO0OjGxOguo8giN7CyRtPkmn1o",
authDomain: "eccomerce-alambique.firebaseapp.com",
projectId: "eccomerce-alambique",
storageBucket: "eccomerce-alambique.appspot.com",
messagingSenderId: "174451895461",
appId: "1:174451895461:web:072761ded47c39c86d314c",
measurementId: "G-DTWLS83F4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);