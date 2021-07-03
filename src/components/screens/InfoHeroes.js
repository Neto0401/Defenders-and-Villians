import { Text, View } from 'react-native'
import React, {useState, useEffect} from 'react';
import HeroCard from '../Card';
import { MostrarInfo } from '../../api';

const InfoHeores = () => {
    const [heroes, setHeroes] = useState({});

    const getHeroes = async() =>{
        //const response = await fetchHeroes();
        const response = await MostrarInfo();
        setHeroes(response);
    }
        useEffect(() => {
           getHeroes()
        },[]);

    return ( 
        <View>
        <Text>Pantalla de Informacion</Text>
        <HeroCard info={heroes}/>
        </View>
     );
}
 
export default InfoHeores;
