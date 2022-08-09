
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZCDCfalTDa4Irg83RMfTgF84nKHs2dc8",
  authDomain: "ecommerce-app-7c755.firebaseapp.com",
  projectId: "ecommerce-app-7c755",
  storageBucket: "ecommerce-app-7c755.appspot.com",
  messagingSenderId: "927018580781",
  appId: "1:927018580781:web:8dfc339663360484b831a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)

export default fireDB