import React from 'react'
import { View,StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Appbar'
import Busqueda from '../SearchBar';
import ButtonCat from '../ButtonCat';

const Principal = () => {
    return ( 
     <View>
      <Header/>
        <Busqueda/>  
        <ButtonCat/>  
      </View>
     );
}
 
export default Principal;