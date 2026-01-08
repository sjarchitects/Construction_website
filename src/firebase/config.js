import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCRrO9cDfsv304nX9LIWsYkkj_8ihtrTjA",
  authDomain: "erpneet-f86b5.firebaseapp.com",
  databaseURL: "https://erpneet-f86b5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "erpneet-f86b5",
  storageBucket: "erpneet-f86b5.firebasestorage.app",
  messagingSenderId: "146796547405",
  appId: "1:146796547405:web:a16e95691b3d65e0667b04",
  measurementId: "G-W8PFM6HH68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);

export default app;
