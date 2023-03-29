import Reacr from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './DrawerScreens/ScheduleTrips';
import SettingScreen from './DrawerScreens/CharterTrips';
import CustomSidebarMenu from './CustomSidebarMenu';
import NavigationDrawerHeader from './NavigationDrawerHeader';
import Colors from '../constants/Colors'

//Import Screens

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerNavigationRoutes =(props) =>{
    return(
        <Drawer.Navigator
          screenOptions={{
            headerShown: false, 
            //drawerLabelStyle  
            drawerActiveBackgroundColor:'#345585',
            drawerActiveTintColor:'#FFFF',
            drawerInactiveTintColor:'#cdec20'     
          }}
          drawerContent={CustomSidebarMenu}
          initialRouteName="HomeScreen">

     <Drawer.Screen
        name="Schedule Trips"
        options={{
         // <Ionicons>
         // drawerLabel: 'Home Screen'

        }}
        component={HomeScreenStack}/>
      
      <Drawer.Screen
        name="Charter Trips"
        options={{
          //drawerLabel: 'Setting Screen'
        }}
        component={SettingScreenStack}/>

        </Drawer.Navigator>
    )

}

const HomeScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator 
      //initialRouteName="HomeScreen"
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Schedule Trips', //Set Header Title
            headerLeft: () => (
              <NavigationDrawerHeader navigationProps={navigation} />
            ),
            headerStyle: {
              backgroundColor: Colors.lochmara, //Set Header color
            },
            headerTintColor: Colors.white, //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    );
  };
  
  const SettingScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator
       // initialRouteName="SettingScreen"
        screenOptions={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            title: 'Charter Trips', //Set Header Title
          }}
        />
      </Stack.Navigator>
    );
  };

export default DrawerNavigationRoutes;