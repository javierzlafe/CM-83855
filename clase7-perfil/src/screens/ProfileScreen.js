import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { auth, db } from '../firebase/config';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export default function ProfileScreen() {
  const [imageBase64, setImageBase64] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setImageBase64(docSnap.data().photoBase64);
        }
      } catch (e) {
        console.error('Error al cargar la imagen:', e);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  const takePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      alert('Permiso para usar la cámara denegado');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      base64: true,
      quality: 0.4, // importante para no pasarse del límite de 1MB
    });

    if (!result.canceled) {
      const base64Image = result.assets[0].base64;
      saveImage(base64Image);
    }
  };

  const saveImage = async (base64) => {
    try {
      setLoading(true);
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        photoBase64: base64,
      });
      setImageBase64(base64);
    } catch (e) {
      console.error('Error al guardar la imagen:', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Mi Perfil</Text>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          {imageBase64 && (
            <Image
              source={{ uri: `data:image/jpeg;base64,${imageBase64}` }}
              style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 20 }}
            />
          )}
          <Button title="Sacar Foto con Cámara" onPress={takePhoto} />
        </>
      )}
    </View>
  );
}
