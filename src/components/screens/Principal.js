import React from 'react';
import { View,StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Appbar'
import Busqueda from '../SearchBar';
import ButtonCat from '../ButtonCat';


const Principal = ({navigation}) => {
    return ( 
     <View>
      <Header navigation = {navigation}/>
        <Busqueda navigation = {navigation}/>  
        <ButtonCat navigation = {navigation}/> 
      </View>
     );
}

export default Principal;