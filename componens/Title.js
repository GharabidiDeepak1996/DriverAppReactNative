import React from "react";
import { StyleSheet,View,Text } from "react-native";
import Colors from "../constants/Colors"

export default function Title({children}){
    return(
       <Text style={styles.title}>{children}</Text>
    )
}

const styles=StyleSheet.create({
    title:{
       // fontFamily:'roboto-mono-bold',
        fontSize:32,
        color: Colors.lochmara,
    }
})