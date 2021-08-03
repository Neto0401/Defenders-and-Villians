import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStackNavigator from './MainStackNavigator';
import StackPerfil from "./StackPerfil"
import themeContext from '../../theme/themeContext';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
    const theme = useContext(themeContext);
    return(
        <Drawer.Navigator drawerStyle={{ backgroundColor : theme.drawer}}
        drawerContentOptions ={{ 
            inactiveTintColor: '#ffffff',
            activeTintColor:theme.titleColor,
            activeBackgroundColor:theme.botonJuego
        }}>
        <Drawer.Screen name = "Perfil de Usuario" component = {StackPerfil}/>
        <Drawer.Screen name = 'Explorar Personajes' component = {MainStackNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;