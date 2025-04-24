/* 
import React,{useState} from "react";
import HomeScreen from "./screen/HomeScreen";
import DetailScreen from "./screen/DetailScreen";
import { Switch, View,Image } from "react-native";

export default function App(){
  const [pantallaActual,setPantallaActual]= useState("home")

  //renderiza la pantalla segun el estado
  const renderPantalla = () => {
    switch (pantallaActual) {
      case 'home':
        return <HomeScreen cambiarPantalla={setPantallaActual} />;
      case 'detalle':
        return <DetailScreen cambiarPantalla={setPantallaActual} />;
      default:
        return <HomeScreen cambiarPantalla={setPantallaActual} />;
    }
  };

  return(
    <View style={{flex:1, justifyContent:"center"}}>
      {renderPantalla()}
      <Image
  source={{ uri: './assets/image/pochoclo.jpg' }}
  style={{ width: 200, height: 300,backgroundColor: "red"}}
/>
    </View>
  )


} */
import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');

  const manejarSubmit = () => {
    if (nombre.trim() === '') {
      setError('El nombre es obligatorio');
    } else {
      setError('');
      alert(`Hola ${nombre}!`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
        placeholder="Escribí tu nombre"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Enviar" onPress={manejarSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 80,
  },
  label: {
    marginBottom: 10,
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
