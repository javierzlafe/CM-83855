import { configureStore } from '@reduxjs/toolkit'; // Herramienta para configurar el store
import counterReducer from './counterSlice'; // Reducer del contador

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Registramos el slice dentro del store
  },
});