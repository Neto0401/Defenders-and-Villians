import React from 'react'
import { View,StyleSheet,ScrollView } from 'react-native';
import Header from '../../components/Appbar'
import Catbuttons from '../CatButtons';
import Busqueda from '../SearchBar';

const Principal = () => {
    return ( 
        <View>
            <Header/>
            <View >
                <Busqueda/>  
            </View>
            <ScrollView>
                <Catbuttons/>
            </ScrollView>
        </View>
     );
}
 
export default Principal;