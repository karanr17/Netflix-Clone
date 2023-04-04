import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvqEvd_D7oQz_XO_hbgN5Y7v_CwoyPFKU",
  authDomain: "orders-3ac65.firebaseapp.com",
  projectId: "orders-3ac65",
  storageBucket: "orders-3ac65.appspot.com",
  messagingSenderId: "241378601224",
  appId: "1:241378601224:web:9765c3ab4210d16efee4bd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
