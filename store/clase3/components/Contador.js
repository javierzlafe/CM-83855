//importante! si vas a copiar y pegar, por lo menos trata de entender que hace el codigo

import React, { useState,useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const Contador = () => {
const [contador, setContador] = useState(0); // Estado inicial


const sumar = () => {
    console.log('Antes de sumar:', contador); // Debug antes
    setContador(contador + 1); // Aumentamos en 1
};
//setContador es asíncrono. El valor cambia después de renderizar el componente
useEffect(() => {
    console.log('Nuevo valor del contador:', contador);
  }, [contador]);

return (
    <View>
    <Text>Contador: {contador}</Text>
    <Button title="Sumar" onPress={sumar} />
    </View>
);
};

export default Contador;