import React from 'react';
import { View, Text } from 'react-native';

const TarjetaUsuario = ({ nombre, edad }) => {
  console.log('Props recibidas:', nombre, edad);
  if (!nombre || !edad) {
    return <Text>Faltan datos</Text>; // Validación
  }

  return (
    <View>
      <Text>{nombre.toUpperCase()}</Text>
      <Text>{edad} años</Text>
    </View>
  );
};

export default TarjetaUsuario;