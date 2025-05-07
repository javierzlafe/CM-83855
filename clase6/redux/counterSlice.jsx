import { createSlice } from '@reduxjs/toolkit'; // Herramienta para generar el slice

const initialState = {
  value: 0, // Valor inicial del contador
};

const counterSlice = createSlice({
  name: 'counter', // Nombre del slice
  initialState, // Estado inicial definido arriba
  reducers: {
    increment: (state) => { state.value += 1 }, // Acción para sumar 1
    decrement: (state) => { state.value -= 1 }, // Acción para restar 1
  },
});

export const { increment, decrement } = counterSlice.actions; // Exportamos las acciones
export default counterSlice.reducer; // Exportamos el reducer