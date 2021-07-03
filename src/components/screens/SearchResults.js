import React, { useEffect,useState } from 'react'
import { View,Text } from 'react-native';
import { searchHeroes } from '../../api';
import ListaBusqueda from '../ListaBusqueda';

const SearchResults = () => {

const [heroes, setHeroes] = useState(null);

const getHeroes = async() =>{
    const response = await searchHeroes();
    setHeroes(response);
}
// console.log('------------------------------------------------------');
// console.log(heroes);

    useEffect(() => {
        getHeroes()
    },[]);

    return ( 
        <View>
            <Text>Pantalla de Resultados de Busqueda</Text>
            <ListaBusqueda Busqueda = {heroes} />
        </View>
     );
}
 
export default SearchResults;