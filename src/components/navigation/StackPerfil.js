import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Perfil from '../screens/Perfil'
import PantallaMinijuego from '../screens/PantallaMinijuego';
import PantallaVictoria from '../screens/Resultado';
import Coleccion from '../screens/Coleccion';
import JuegoTerminado from '../screens/Derrota'
import { startClock } from 'react-native-reanimated';
import themeContext from '../../theme/themeContext';

const Stack = createStackNavigator();

const StackPerfil = () => {
    const theme = useContext(themeContext);//
    return ( 
        <Stack.Navigator>
            <Stack.Screen name = 'Perfil' component = {Perfil} options = {{headerShown: false}} />
            <Stack.Screen name = 'Minijuego' component = {PantallaMinijuego} options ={{headerShown :false}}/>
            <Stack.Screen name = 'Coleccion' component = {Coleccion} options ={{headerStyle:{backgroundColor:theme.bckColor}, headerTintColor:theme.header}} />
            <Stack.Screen name = 'Felicitaciones' component ={PantallaVictoria} options = {{headerShown:false}}/>
            <Stack.Screen name = 'Fin' component ={JuegoTerminado} options ={{headerShown:false}}  />
        </Stack.Navigator>
     );
}
 
export default StackPerfil;