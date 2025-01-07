import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg4w26DTOmWXfmKz8S-ulP4jiJ6C1Yrt4",
  authDomain: "ecommerce-63395.firebaseapp.com",
  projectId: "ecommerce-63395",
  storageBucket: "ecommerce-63395.firebasestorage.app",
  messagingSenderId: "865369338169",
  appId: "1:865369338169:web:40d6816a5b137bef18b8e8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;