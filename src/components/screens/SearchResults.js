import React, { useEffect,useState } from 'react'
import { View,Text } from 'react-native';


const SearchResults = () => {

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
            <Text>Pantalla de Resultados de Busqueda</Text>
        </View>
     );
}
 
export default SearchResults;