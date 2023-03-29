import React, { useState,useCallback, useEffect } from 'react'
import {View, Image, ActivityIndicator, StyleSheet} from 'react-native'
import Colors from '../constants/Colors'
import { useFonts } from 'expo-font';

export default function SplashLoadScreen({ navigation }) {
  
    
    //state for activity animation
    const [animating, setAnimating] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setAnimating(false)
             navigation.navigate("Auth")
            //navigation.navigate("LoginScreen")
        }, 1000)
    })

   
    return (
        <View 
        style={styles.container}>
            <Image
                source={require('../assets/image/icon.png')}
                style={{ width: '90%', resizeMode: 'contain', margin: 30 }} />

                {/* Loader */}
            <ActivityIndicator
                animating={animating}
                color={Colors.white}
                size="large"
            //style={styles.activityIndicator}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80
    }
})