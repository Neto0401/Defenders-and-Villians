import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Perfil from '../screens/Perfil'
import PantallaMinijuego from '../screens/PantallaMinijuego';
import PantallaVictoria from '../screens/Resultado';
import PantallaDerrota from '../screens/Derrota';
import Coleccion from '../screens/Coleccion';


const Stack = createStackNavigator();

const StackPerfil = () => {
    return ( 
        <Stack.Navigator>
            <Stack.Screen name = 'Perfil' component = {Perfil} options = {{headerShown: false}} />
            <Stack.Screen name = 'Minijuego' component = {PantallaMinijuego}/>
            <Stack.Screen name = 'Coleccion' component = {Coleccion}/>
            <Stack.Screen name = 'Felicitaciones' component ={PantallaVictoria}/>
            <Stack.Screen name = 'Derrota' component = {PantallaDerrota}/> 
        </Stack.Navigator>
     );
}
 
export default StackPerfil;