import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCV3UuMewiY98FryZ60HfYNY6sbba_EhEg",
  authDomain: "la-trattoria-eaa56.firebaseapp.com",
  projectId: "la-trattoria-eaa56",
  storageBucket: "la-trattoria-eaa56.firebasestorage.app",
  messagingSenderId: "899748637400",
  appId: "1:899748637400:web:b16d2346856fcdc050a45d0",
  measurementId: "G-0P8K9P8N62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);