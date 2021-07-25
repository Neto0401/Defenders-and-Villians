import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Perfil from '../screens/Perfil'
import PantallaMinijuego from '../screens/PantallaMinijuego';


const Stack = createStackNavigator();

const StackPerfil = () => {
    return ( 
        <Stack.Navigator>
            <Stack.Screen name = 'Perfil' component = {Perfil} options = {{headerShown: false}} />
            <Stack.Screen name = 'Minijuego' component = {PantallaMinijuego}/>
        </Stack.Navigator>
     );
}
 
export default StackPerfil;