import React from "react";
import {View,Text} from "react-native"

export default function DetailsScreen({route}){
    const {itemId} = route.params;



    return(

        <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
                <Text>Ya estoy en detalles</Text>
              
        </View>


    )
}
