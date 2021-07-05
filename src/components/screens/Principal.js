import React from 'react';
import { View, ImageBackground} from 'react-native';
import Header from '../../components/Appbar'
import Busqueda from '../SearchBar';
import ButtonCat from '../ButtonCat';

const Principal = ({navigation}) => {
    return ( 
     <View>
      <Header navigation = {navigation}/>
        <Busqueda navigation = {navigation}/>  
        <ImageBackground  source= {require('../../../assets/ImagenModoClaro.png')} style={{flex:0, resizeMode:"cover", justifyContent:'center'}}>
        <ButtonCat navigation = {navigation}/> 
        </ImageBackground>
      </View>
     );
}

export default Principal;