import React from 'react';
import { View,StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Appbar'
import Busqueda from '../SearchBar';
import ButtonCat from '../ButtonCat';

const Principal = ({navigation}) => {
    return ( 
     <View>
      <Header/>
        <Busqueda/>  
        <ButtonCat navigation={navigation}/> 
      </View>
     );
}

export default Principal;