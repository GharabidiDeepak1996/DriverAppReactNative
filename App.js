import React, { useEffect, useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
//import { useFonts } from 'expo-font';
// deprecated -> import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegistrationScreen from './screens/Registration';
import LoginScreen from './screens/LoginScreen';
import SplashLoadScreen from './screens/SplashLoadScreen';
import DrawerNavigationRoutes from './screens/DrawerNavigationRoutes'
import Colors from './constants/Colors';

// // Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

//onLayout={onLayoutRootView} 

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

//   const [fontsLoaded] = useFonts({
//         'roboto-mono': require('../assets/fonts/RobotoMono-Regular.ttf'),
//         'roboto-mono-bold': require('../assets/fonts/RobotoMono-Bold.ttf')
//       });

//  const onLayoutRootView = useCallback(async () => {
//         if (fontsLoaded) {
//           await SplashScreen.hideAsync();
//         }
//       }, [fontsLoaded]);
    
//       if (!fontsLoaded) {
//         return null;
//       }


const Stack = createNativeStackNavigator();
let screen=<SplashLoadScreen/>

export default function App() {
  return (
       <NavigationContainer>
           <MyStack/>
        </NavigationContainer>
  );
}

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='SplashLoadScreen'>

      {/* SplashScreen which will come once for 5 Seconds */}
      <Stack.Screen  name="SplashLoadScreen" component={SplashLoadScreen} options={{headerShown:false}}/>

      {/* Auth Navigator: Include Login and Signup */}
      <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />

         {/* Navigation Drawer as a landing page */}
         <Stack.Screen
            name="DrawerNavigationRoutes"
            component={DrawerNavigationRoutes}
            // Hiding header for Navigation Drawer
            options={{headerShown: false}}
          />

    </Stack.Navigator>
  );
}

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator 
    initialRouteName="LoginScreen">
            
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />

            
            <Stack.Screen name="RegistrationScreen" component={RegistrationScreen}  
     options={{ 
      title:'',
      //headerTitle: "sdf",
     headerStyle: {
      backgroundColor: Colors.lochmara, //Set Header color
    },
    headerTintColor: Colors.white, //Set Header text color
    headerTitleStyle: {
      fontWeight: 'bold', //Set Header text style
    }, 
    headerTitleAlign:'center', //Header title on center
    headerShadowVisible: false, //set Header shadowvisible gone
    }} />

    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
})