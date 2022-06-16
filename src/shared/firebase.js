import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCURGc6Xs5wDaH-4KNWCeMob-eRqb76xJk",
  authDomain: "smys-7a6ef.firebaseapp.com",
  projectId: "smys-7a6ef",
  storageBucket: "smys-7a6ef.appspot.com",
  messagingSenderId: "253893001555",
  appId: "1:253893001555:web:40bcc37a6f8efee909e1a6",
  measurementId: "G-DN31NYPNPL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export default app;
