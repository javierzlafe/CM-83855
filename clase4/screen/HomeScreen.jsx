import react from "react";
import { View,Text,Button } from "react-native";

export default function HomeScreen({cambiarPantalla}){
    return(
        <View style={{padding:20}}>
            <Text style={{fontSize:20}}></Text>
            <Button title="Ir al detalle" onPress={()=>cambiarPantalla("detalle")} />
        </View>
    )
}