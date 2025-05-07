import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native'; // UI básica
import { collection, addDoc } from 'firebase/firestore'; // Métodos para DB
import { db } from '../firebase/config'; // Importamos la base

const GuardarDato = () => {
  const guardar = async () => {
    try {
      await addDoc(collection(db, 'mensajes'), {
        texto: 'Hola desde la clase del pela', // Dato a guardar
        fecha: new Date(), // Fecha actual
      });
      Alert.alert('Éxito', 'Mensaje guardado');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo guardar el mensaje');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Guardar en Firebase" onPress={guardar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GuardarDato;