import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD7jvZ_dWf_Fw23cGAJaadyr4TXelzDYBA",
  authDomain: "hilti-connect-c74f3.firebaseapp.com",
  projectId: "hilti-connect-c74f3",
  storageBucket: "hilti-connect-c74f3.appspot.com",
  messagingSenderId: "436180682066",
  appId: "1:436180682066:web:8e77077f9b977ea33b668b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);