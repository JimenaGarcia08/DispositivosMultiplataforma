import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 
import { GluestackUIProvider, Box, Text, ScrollView, ButtonText, Image } from '@gluestack-ui/themed';
import { Input, InputField, Button, FormControl, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText, FormControlError, FormControlErrorIcon, FormControlErrorText, AlertCircleIcon } from '@gluestack-ui/themed';
import { config } from "@gluestack-ui/config";
import Logo from '../assets/Icons/Logo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Recovery from './screens/Recovery';
import Home from './screens/Home';
import Profile from './screens/Profile';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer> 
      <GluestackUIProvider config={config}>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Recovery" component={Recovery} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}

/*const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <GluestackUIProvider>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Recovery" component={Recovery} />
          <Stack.Screen name="Home">
            {() => (
              <Drawer.Navigator>
                <Drawer.Screen name="HomeScreen" component={Home} />
              </Drawer.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}
*/