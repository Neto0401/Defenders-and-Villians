import React, { useEffect,useState,useContext } from 'react'
import { View,ImageBackground } from 'react-native';
import { searchHeroes } from '../../api';
import themeContext from '../../theme/themeContext';
import HeaderBack from '../BackBar';
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
    const theme = useContext(themeContext);
    return ( 
        <View>
            <HeaderBack navigation = {navigation} regreso = {'Principal'}/>
            <ImageBackground  source= {require('../../../assets/BackgroundImageFinal.png')} style={{flex:0, resizeMode:"cover", justifyContent:'center',backgroundColor:theme.bckColor}}>
            <ListaBusqueda Busqueda = {heroes} navigation={navigation}/>
            </ImageBackground>
        </View>
     );
}
 
export default SearchResults;