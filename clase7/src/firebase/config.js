// src/firebase/config.js

import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDS8Q4NRCF7dwINz4gfhoM6XAcm7p45ycg',
  authDomain: 'login-fbfac.firebaseapp.com',
  projectId: 'login-fbfac',
  storageBucket: 'login-fbfac.appspot.com',
  messagingSenderId: '152672090663',
  appId: '1:152672090663:web:e90dfc3ab1e84da829ec02',
};

// Inicializamos la app de Firebase si no existe
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// ⚠️ No inicializamos `auth` directamente
let authInstance;

// Esta función devuelve una instancia lista de `auth`
export const getFirebaseAuth = () => {
  if (!authInstance) {
    authInstance = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  }
  return authInstance;
};
