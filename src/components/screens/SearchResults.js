import React, { useEffect,useState } from 'react'
import { View,ImageBackground } from 'react-native';
import { searchHeroes } from '../../api';
import ListaBusqueda from '../ListaBusqueda';

const SearchResults = ({navigation}) => {

const [heroes, setHeroes] = useState(null);

const getHeroes = async() =>{
    const response = await searchHeroes();
    setHeroes(response);
}

    useEffect(() => {
        getHeroes()
    },[]);

    return ( 
        <View>
             <ImageBackground  source= {require('../../../assets/ImagenModoClaro.png')} style={{flex:0, resizeMode:"cover", justifyContent:'center'}}>
            <ListaBusqueda Busqueda = {heroes} navigation={navigation}/>
            </ImageBackground>
        </View>
     );
}
 
export default SearchResults;