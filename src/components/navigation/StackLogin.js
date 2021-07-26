import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import Registrarse from '../screens/Registrarse';

const Stack = createStackNavigator();

const StackLogin = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = 'Login' component = {Login} options ={{headerShown:false}}/>
            <Stack.Screen name = 'Registrarse' component = {Registrarse} />
        </Stack.Navigator>
    );
}

export default StackLogin;
