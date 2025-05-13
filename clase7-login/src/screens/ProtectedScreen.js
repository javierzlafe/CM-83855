import React from 'react';
import { View, Text, Button } from 'react-native';
import { auth } from '../firebase/config';

export default function ProtectedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>¡Bienvenido! Estás autenticado 🔐</Text>
      <Button title="Cerrar sesión" onPress={() => auth.signOut()} />
    </View>
  );
}
