import react from "react";
import {View, Text} from "react-native"

import React from 'react';
import { View, Text } from 'react-native';

export default function Usuario({ nombre, estaLogueado }) {
  return (
    <View>
      {estaLogueado ? (
        <Text>Hola {nombre}, ¡bienvenido!</Text>
      ) : (
        <Text>Debés iniciar sesión</Text>
      )}
    </View>
  );
}