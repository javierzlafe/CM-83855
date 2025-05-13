import { initializeApp } from 'firebase/app';
import {
  getReactNativePersistence,
  initializeAuth,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 🔥 Tu configuración
const firebaseConfig = {
  apiKey: 'AIzaSyDS8Q4NRCF7dwINz4gfhoM6XAcm7p45ycg',
  authDomain: 'login-fbfac.firebaseapp.com',
  projectId: 'login-fbfac',
  storageBucket: 'login-fbfac.appspot.com',
  messagingSenderId: '152672090663',
  appId: '1:152672090663:web:e90dfc3ab1e84da829ec02',
};

const app = initializeApp(firebaseConfig);

// ✅ Solo usás initializeAuth una vez, con persistencia (no uses getAuth)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };

