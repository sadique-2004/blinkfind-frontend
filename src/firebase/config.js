import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBVZXwXOwFZGqgGxS-E-dGKx4m_IwRxvyY",
  authDomain: "blinkfind-visitor-counter.firebaseapp.com",
  projectId: "blinkfind-visitor-counter",
  storageBucket: "blinkfind-visitor-counter.appspot.com",
  messagingSenderId: "450784588754",
  appId: "1:450784588754:web:9f5d8b8f8f8f8f8f8f8f8f",
  databaseURL: "https://blinkfind-visitor-counter-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
