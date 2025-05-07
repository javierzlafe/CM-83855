import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';  //aca puedo importar colores predefinidos

const EstilosBasicos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenidos a la clase del pela</Text>
    </View>
  );
};

//antes de aplicar estilos, recuerden que la view de app.js debe tener style={{flex:1}}


const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda la pantalla
    justifyContent: 'center', // Centra en vertical
    alignItems: 'center', // Centra en horizontal
    backgroundColor: COLORS.primary   //ACA USO EL COLOR PRIMARY QUE IMPORTE
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default EstilosBasicos;
