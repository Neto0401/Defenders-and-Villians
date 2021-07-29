import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStackNavigator from './MainStackNavigator';
import StackPerfil from "./StackPerfil"


const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
    return(
        <Drawer.Navigator drawerStyle={{ backgroundColor : '#0F2441',}}
        drawerContentOptions ={{ inactiveTintColor: '#ffffff'}}>
            <Drawer.Screen name = "Perfil de Usuario" component = {StackPerfil}/>
            <Drawer.Screen name = 'Explorar Personajes' component = {MainStackNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;