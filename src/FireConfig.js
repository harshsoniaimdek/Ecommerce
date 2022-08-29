
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdIOsxflB6ZmCgE48q0kfeAWDNHo2yAIU",
  authDomain: "ecommerce-appl.firebaseapp.com",
  projectId: "ecommerce-appl",
  storageBucket: "ecommerce-appl.appspot.com",
  messagingSenderId: "121455466648",
  appId: "1:121455466648:web:123453ff2e96c3426cd8ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

export default fireDB;