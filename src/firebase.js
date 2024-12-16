import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAWcwn43qdUTcTSt5Jq234ZGzWffNpTFQ",
  authDomain: "social-media-9dc5c.firebaseapp.com",
  projectId: "social-media-9dc5c",
  storageBucket: "social-media-9dc5c.firebasestorage.app",
  messagingSenderId: "898650688205",
  appId: "1:898650688205:web:08c2184ee1258bd7fdf784",
  measurementId: "G-KZPPTCJ9M4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
