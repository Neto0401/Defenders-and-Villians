import React,{useState,useEffect} from 'react';
import {View } from 'react-native';
import Heroes from './src/api';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Listado from './src/components/screens/Listado';
import Principal from './src/components/screens/Principal';
import SearchResults from './src/components/screens/SearchResults';
import InfoHeores from './src/components/screens/InfoHeroes';
import Configuracion from './src/components/screens/Config';
import theme from './src/theme';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from './src/theme/themeContext';

const Stack = createStackNavigator();

export default function App() {
  const [mode, setMode] = useState(false);

  useEffect(() =>{
    let eventListener = EventRegister.addEventListener("changeTheme",(data)=>{
      setMode(data);
    });
    return()=>{
      EventRegister.removeEventListener(eventListener);
    }
  })
  
  return (
    <themeContext.Provider value ={mode === true ? theme.darkTheme : theme.colors}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Principal" component = {Principal} options = {{headerShown: false}}/>        
          <Stack.Screen name = "Listado" component = {Listado} options={{headerStyle:{backgroundColor:theme.colors.primaryColor}, headerTintColor:theme.colors.bckColor}}/>
          <Stack.Screen name = "Resultados de Busqueda" component = {SearchResults} options={{headerStyle:{backgroundColor:theme.colors.primaryColor}, headerTintColor:theme.colors.bckColor}}/>
          <Stack.Screen name = "InfoHeroes" component = {InfoHeores} options={{headerStyle:{backgroundColor:theme.colors.primaryColor}, headerTintColor:theme.colors.bckColor}}/>
          <Stack.Screen name = "Configuracion" component = {Configuracion} options={{headerStyle:{backgroundColor:theme.colors.primaryColor}, headerTintColor:theme.colors.bckColor}}/>
        </Stack.Navigator>  
      </NavigationContainer>
    </themeContext.Provider>
  );
}

