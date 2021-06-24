import React from 'react'
import { View,StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Appbar'
import Catbuttons from '../CatButtons';
import Busqueda from '../SearchBar';
import ButtonCat from '../ButtonCat';

const Principal = () => {
    return ( 
        <ScrollView>
     <View>
        <Header/>
      <View >
       <Busqueda/>  
      </View>
     
          <ButtonCat/>
       
            
        </View>
        </ScrollView>
     );
}
 
export default Principal;