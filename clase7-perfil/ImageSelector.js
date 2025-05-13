import React, { useState } from 'react';
import { View, Button, Image, Alert, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImageSelector = () => {
  const [pickedImage, setPickedImage] = useState(null); // Estado para guardar la imagen capturada

  // Función para verificar permisos de cámara
  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permisos insuficientes',
        'Necesitamos permisos para usar la cámara.',
        [{ text: 'Ok' }]
      );
      return false;
    }
    return true;
  };

  // Función que abre la cámara y permite tomar la foto
  const handleTakeImage = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,      // Permite recortar antes de aceptar
      aspect: [16, 9],          // Relación de aspecto
      quality: 0.5,             // Calidad de imagen (0 a 1)
    });

    if (!image.canceled) {
      // Si el usuario tomó una foto, guardamos la URI en el estado
      setPickedImage(image.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {pickedImage ? (
          <Image source={{ uri: pickedImage }} style={styles.image} />
        ) : (
          <Text>No hay imagen seleccionada</Text>
        )}
      </View>
      <Button title="Abrir cámara" onPress={handleTakeImage} />
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
