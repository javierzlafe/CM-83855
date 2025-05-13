// firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDS8Q4NRCF7dwINz4gfhoM6XAcm7p45ycg",
  authDomain: "login-fbfac.firebaseapp.com",
  projectId: "login-fbfac",
  storageBucket: "login-fbfac.appspot.com", // 🔧 corregido aquí
  messagingSenderId: "152672090663",
  appId: "1:152672090663:web:e90dfc3ab1e84da829ec02"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
