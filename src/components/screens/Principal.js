import React,{useContext} from 'react';
import { View, ImageBackground} from 'react-native';
import Header from '../../components/Appbar';
import Busqueda from '../SearchBar';
import ButtonCat from '../ButtonCat';
import themeContext from '../../theme/themeContext';

const Principal = ({navigation}) => {
  const theme = useContext(themeContext);
    return ( 
     <View style = {{backgroundColor:theme.primaryColor}}>
      <Header navigation = {navigation}/>
        <Busqueda navigation = {navigation}/>  
        <ImageBackground  source= {require('../../../assets/BackgroundImageFinal.png')} style={{flex:0, resizeMode:"cover", justifyContent:'center',backgroundColor:theme.bckColor}}>
        <ButtonCat navigation = {navigation}/> 
        </ImageBackground>
      </View>
     );
}

export default Principal;