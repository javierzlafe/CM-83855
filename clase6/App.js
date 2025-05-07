import React from 'react';
import { Provider } from 'react-redux'; // Conecta Redux con React
import { store } from './redux/store'; // Importamos nuestro store
import Contador from './screens/Contador'; // Componente de ejemplo
import GuardarDato from './screens/GuardarDato';

export default function App() {
  return ( <GuardarDato/>)
}