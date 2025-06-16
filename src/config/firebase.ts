import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYZY7g5OG2HTJG1YqijzsgX5vCWpuBMPg",
  authDomain: "instaresto-df2e1.firebaseapp.com",
  projectId: "instaresto-df2e1",
  storageBucket: "instaresto-df2e1.firebasestorage.app",
  messagingSenderId: "258913762457",
  appId: "1:258913762457:web:1b717f9fe3c60cc1664c08",
  measurementId: "G-F60B268CJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

// Initialize Analytics
export const analytics = getAnalytics(app);

export default app; 