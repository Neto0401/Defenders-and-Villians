import React, { useEffect,useState,useContext } from 'react'
import { View, ImageBackground } from 'react-native'
import { FilterHeros } from '../../api';
import themeContext from '../../theme/themeContext';
import HeaderBack from '../BackBar';
import ListaHeroes from '../ListaHeroes';

const Listado = ({navigation}) =>{
    const [heroes, setHeroes] = useState({});

    const getHeroes = async() =>{
        const response = await FilterHeros();
        setHeroes(response);
    }
        useEffect(() => {
           getHeroes()
        },[]);

        const theme = useContext(themeContext);
    return(
        <View>
            <HeaderBack navigation = {navigation} regreso = {'Principal'}/>
            <ImageBackground  source= {require('../../../assets/BackgroundImageFinal.png')} style={{flex:0, resizeMode:"cover", justifyContent:'center',backgroundColor:theme.bckColor}}>
            <ListaHeroes heroes = {heroes} navigation ={navigation}/>
            </ImageBackground>
        </View>
    )
}

export default Listado;