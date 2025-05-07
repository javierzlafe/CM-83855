import React from "react";
import {View,Text,Button} from "react-native"

export default function HomeScreen({navigation}){
    return(

        <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
                <Text>pantalla principal</Text>
                <Button title="Ir a detalles" 
                onPress={ ()=> navigation.navigate("Details", {itemId: 46})   }/>
        </View>


    )
}
