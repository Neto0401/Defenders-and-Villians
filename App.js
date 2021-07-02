import React from 'react';
import {View } from 'react-native';
import Heroes from './src/api';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Listado from './src/components/screens/Listado';
import Principal from './src/components/screens/Principal';
import SearchResults from './src/components/screens/SearchResults';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={Principal} options = {{headerShown: false}}/>        
        <Stack.Screen name="Listado" component={Listado}/>
        <Stack.Screen name ="SearchResults" component = {SearchResults}/>
      </Stack.Navigator>  
    </NavigationContainer>
  );
}
// <Stack.Screen name="Principal" component={Principal}/>

