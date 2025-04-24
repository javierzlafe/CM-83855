import react from "react";
import { View,Text,Button } from "react-native";

export default function DetailScreen({cambiarPantalla}){
    return(
        <View style={{padding:20}}>
            <Text style={{fontSize:20}}></Text>
            <Button title="Volver al inicio" onPress={()=>cambiarPantalla("home")} />
        </View>
    )
}