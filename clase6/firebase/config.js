import { initializeApp } from 'firebase/app'; // Importa función para inicializar la app
import { getFirestore } from 'firebase/firestore'; // Importa acceso a base de datos
import { getAuth } from 'firebase/auth'; // Importa autenticación

// Configuración generada desde la consola de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDMr-bw6mK0nXFsJsse9MSlJ6FQKAgqsZs",
    authDomain: "react-native-84d98.firebaseapp.com",
    projectId: "react-native-84d98",
    storageBucket: "react-native-84d98.firebasestorage.app",
    messagingSenderId: "390153407582",
    appId: "1:390153407582:web:c544ab736bca5a9f4778cf"
};

const app = initializeApp(firebaseConfig); // Inicializa la app
export const db = getFirestore(app); // Exporta la base de datos
export const auth = getAuth(app); // Exporta la autenticación