import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider as AuthProvider, Provider } from '../providers/AuthContext';
import Login from '../screens/Login';
import Registrarse from '../screens/Registrarse';
const Stack = createStackNavigator();
import { NavigationContainer } from '@react-navigation/native';

const StackLogin = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = 'Login' component = {Login} options ={{headerShown:false}}/>
                <Stack.Screen name = 'Registrarse' component = {Registrarse} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackLogin;
