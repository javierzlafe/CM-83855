import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'; // Componentes nativos
import { useSelector, useDispatch } from 'react-redux'; // Hooks de Redux
import { increment, decrement } from '../redux/counterSlice'; // Acciones del slice

const Contador = () => {
  const count = useSelector(state => state.counter.value); // Leemos el valor actual del contador
  const dispatch = useDispatch(); // Obtenemos la función para despachar acciones

  return (
    <View style={styles.container}> {/* Contenedor principal */}
      <Text style={styles.text}>Contador: {count}</Text> {/* Mostramos el valor */}
      <Button title="Sumar" onPress={() => dispatch(increment())} /> {/* Botón para sumar */}
      <Button title="Restar" onPress={() => dispatch(decrement())} /> {/* Botón para restar */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Contador;