import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fetchHeroes,FilterHeros } from '../../api';
import ListaHeroes from '../ListaHeroes';

const Listado = ({navigation}) =>{
    const [heroes, setHeroes] = useState({});

    const getHeroes = async() =>{
        //const response = await fetchHeroes();
        const response = await FilterHeros();
        setHeroes(response);
    }
        useEffect(() => {
           getHeroes()
        },[]);

    return(
        <View>
            <Text>PANTALLA LISTADO</Text>
            <ListaHeroes heroes = {heroes} navigation ={navigation}/>
        </View>
    )
}

export default Listado;