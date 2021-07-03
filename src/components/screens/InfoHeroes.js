import { Text, View,ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react';
import HeroCard from '../Card';
import { MostrarInfo } from '../../api';


const InfoHeores = () => {
    const [heroes, setHeroes] = useState({});
    const [stats, setStats] = useState({});
    const [biography, setBiography] = useState({});

    const getHeroes = async() =>{
        const response = await MostrarInfo();
        setHeroes(response);
        setStats(response.powerstats)
        setBiography(response.biography)
    }
        useEffect(() => {
           getHeroes()
        },[]);

    return ( 
        <ScrollView>
        <Text>Pantalla de Informacion</Text>
        <HeroCard info={heroes} powerstats = {stats} biography = {biography}/>
        </ScrollView>
     );
}
 
export default InfoHeores;
