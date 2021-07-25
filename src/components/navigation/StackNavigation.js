import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Listado from '../screens/Listado'
import InfoHeores from '../screens/InfoHeroes'
import SearchResults from '../screens/SearchResults'
import Configuracion from '../screens/Config'
import PantallaMinijuego from '../screens/PantallaMinijuego'
import Principal from '../screens/Principal'

const Stack = createStackNavigator();

const MainStackNavigator = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Principal" component = {Principal} options = {{headerShown: false}}/>        
            <Stack.Screen name = "Listado" component = {Listado} options={{headerShown:false}}/>
            <Stack.Screen name = "Resultados de Busqueda" component = {SearchResults} options={{headerShown:false}}/>
            <Stack.Screen name = "InfoHeroes" component = {InfoHeores}/>
            <Stack.Screen name = "Configuracion" component = {Configuracion} options={{headerShown:false}}/>
            <Stack.Screen name = "Minijuego" component = {PantallaMinijuego} />
        </Stack.Navigator>  
    )
}

export default MainStackNavigator;
