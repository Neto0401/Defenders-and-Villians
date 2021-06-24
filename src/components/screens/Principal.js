import React from 'react'
import { View,StyleSheet,ScrollView } from 'react-native';
import Header from '../../components/Appbar'
import Catbuttons from '../CatButtons';
import Busqueda from '../SearchBar';
import ButtonCat from '../ButtonCat';

const Principal = () => {
    return ( 
        <View>
            <Header/>
            <View >
                <Busqueda/>  
            </View>
            <ScrollView>
                <ButtonCat/>
            </ScrollView>
        </View>
     );
}
 
export default Principal;