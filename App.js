import React from 'react';
import {View } from 'react-native';
import Heroes from './src/api';
import Home from './src/components/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Listado from './src/components/screens/Listado';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Listado" component={Listado}/>
      </Stack.Navigator>  
    </NavigationContainer>
  );
}

