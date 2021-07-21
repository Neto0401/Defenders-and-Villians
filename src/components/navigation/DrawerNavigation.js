import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PantallaPerfil from '../screens/Perfil';
import MainStackNavigator from './StackNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
    return(
        <Drawer.Navigator
        drawerStyle={{
            backgroundColor : '#0F2441',
        }}
        drawerContentOptions ={{
            inactiveTintColor: '#ffffff'
        }}
        >
            <Drawer.Screen name = "Perfil de Usuario" component = {PantallaPerfil}/>
            <Drawer.Screen name = 'Explorar Personajes' component = {MainStackNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;
