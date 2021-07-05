import React, { useEffect,useState } from 'react'
import { View, ImageBackground } from 'react-native'
import { FilterHeros } from '../../api';
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

    return(
        <View>
              <ImageBackground  source= {require('../../../assets/ImagenModoClaro.png')} style={{flex:0, resizeMode:"cover", justifyContent:'center'}}>
            <ListaHeroes heroes = {heroes} navigation ={navigation}/>
            </ImageBackground>
        </View>
    )
}

export default Listado;